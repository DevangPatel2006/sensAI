"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

// Retry wrapper
async function generateWithRetry(industry, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await generateAIInsights(industry);
    } catch (err) {
      if (err.message.includes("503") && i < retries - 1) {
        console.warn("Gemini overloaded. Retrying...");
        await new Promise((res) => setTimeout(res, 2000));
      } else {
        console.error("Gemini Error:", err.message);
        throw err;
      }
    }
  }
}

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(async (tx) => {
      let industryInsight = await tx.industryInsight.findUnique({
        where: { industry: data.industry },
      });

      if (!industryInsight) {
        try {
          const insights = await generateWithRetry(data.industry);

          // Destructure and exclude demandLevel & marketOutlook
          const { demandLevel, marketOutlook, ...restInsights } = insights;

          const demandlevelEnum = demandLevel.toUpperCase(); // e.g., "HIGH"
          const marketOutlookEnum = marketOutlook.toUpperCase(); // e.g., "POSITIVE"

          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              ...restInsights,
              demandlevel: demandlevelEnum,
              marketOutlook: marketOutlookEnum,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        } catch (err) {
          console.warn("Gemini failed. Skipping industry update.");
        }
      }

      const updatedUser = await tx.user.update({
        where: {
          id: user.id,
        },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        },
      });

      return { updatedUser, industryInsight };
    }, { timeout: 10000 });

    revalidatePath("/");
    return result;
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile");
  }
}
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });

  if (!user) throw new Error("User not found");

  return {
    isOnboarded: !!user.industry,
  };
}
