/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'], // ✅ add this to allow external image loading
  },
};

export default nextConfig;
