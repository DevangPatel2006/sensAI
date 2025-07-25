
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model IndustryInsight
 * 
 */
export type IndustryInsight = $Result.DefaultSelection<Prisma.$IndustryInsightPayload>
/**
 * Model Assessments
 * 
 */
export type Assessments = $Result.DefaultSelection<Prisma.$AssessmentsPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model CoverLetter
 * 
 */
export type CoverLetter = $Result.DefaultSelection<Prisma.$CoverLetterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DemandLevel: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type DemandLevel = (typeof DemandLevel)[keyof typeof DemandLevel]


export const MarketOutLook: {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  NEUTRAL: 'NEUTRAL'
};

export type MarketOutLook = (typeof MarketOutLook)[keyof typeof MarketOutLook]

}

export type DemandLevel = $Enums.DemandLevel

export const DemandLevel: typeof $Enums.DemandLevel

export type MarketOutLook = $Enums.MarketOutLook

export const MarketOutLook: typeof $Enums.MarketOutLook

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industryInsight`: Exposes CRUD operations for the **IndustryInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryInsights
    * const industryInsights = await prisma.industryInsight.findMany()
    * ```
    */
  get industryInsight(): Prisma.IndustryInsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessments`: Exposes CRUD operations for the **Assessments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessments.findMany()
    * ```
    */
  get assessments(): Prisma.AssessmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverLetter`: Exposes CRUD operations for the **CoverLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverLetters
    * const coverLetters = await prisma.coverLetter.findMany()
    * ```
    */
  get coverLetter(): Prisma.CoverLetterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    IndustryInsight: 'IndustryInsight',
    Assessments: 'Assessments',
    Resume: 'Resume',
    CoverLetter: 'CoverLetter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "industryInsight" | "assessments" | "resume" | "coverLetter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      IndustryInsight: {
        payload: Prisma.$IndustryInsightPayload<ExtArgs>
        fields: Prisma.IndustryInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          findFirst: {
            args: Prisma.IndustryInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          findMany: {
            args: Prisma.IndustryInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          create: {
            args: Prisma.IndustryInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          createMany: {
            args: Prisma.IndustryInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryInsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          delete: {
            args: Prisma.IndustryInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          update: {
            args: Prisma.IndustryInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          deleteMany: {
            args: Prisma.IndustryInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryInsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>[]
          }
          upsert: {
            args: Prisma.IndustryInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryInsightPayload>
          }
          aggregate: {
            args: Prisma.IndustryInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryInsight>
          }
          groupBy: {
            args: Prisma.IndustryInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryInsightCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryInsightCountAggregateOutputType> | number
          }
        }
      }
      Assessments: {
        payload: Prisma.$AssessmentsPayload<ExtArgs>
        fields: Prisma.AssessmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          findFirst: {
            args: Prisma.AssessmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          findMany: {
            args: Prisma.AssessmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>[]
          }
          create: {
            args: Prisma.AssessmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          createMany: {
            args: Prisma.AssessmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>[]
          }
          delete: {
            args: Prisma.AssessmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          update: {
            args: Prisma.AssessmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentsPayload>
          }
          aggregate: {
            args: Prisma.AssessmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessments>
          }
          groupBy: {
            args: Prisma.AssessmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentsCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      CoverLetter: {
        payload: Prisma.$CoverLetterPayload<ExtArgs>
        fields: Prisma.CoverLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findFirst: {
            args: Prisma.CoverLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findMany: {
            args: Prisma.CoverLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          create: {
            args: Prisma.CoverLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          createMany: {
            args: Prisma.CoverLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          delete: {
            args: Prisma.CoverLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          update: {
            args: Prisma.CoverLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          deleteMany: {
            args: Prisma.CoverLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          upsert: {
            args: Prisma.CoverLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          aggregate: {
            args: Prisma.CoverLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverLetter>
          }
          groupBy: {
            args: Prisma.CoverLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverLetterCountArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    industryInsight?: IndustryInsightOmit
    assessments?: AssessmentsOmit
    resume?: ResumeOmit
    coverLetter?: CoverLetterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assessments: number
    coverLetter: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessments?: boolean | UserCountOutputTypeCountAssessmentsArgs
    coverLetter?: boolean | UserCountOutputTypeCountCoverLetterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoverLetterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
  }


  /**
   * Count Type IndustryInsightCountOutputType
   */

  export type IndustryInsightCountOutputType = {
    users: number
  }

  export type IndustryInsightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | IndustryInsightCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * IndustryInsightCountOutputType without action
   */
  export type IndustryInsightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsightCountOutputType
     */
    select?: IndustryInsightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryInsightCountOutputType without action
   */
  export type IndustryInsightCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    experience: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bio: string | null
    experience: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    industry: number
    createdAt: number
    updatedAt: number
    bio: number
    experience: number
    skills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    experience?: true
  }

  export type UserSumAggregateInputType = {
    experience?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    industry?: true
    createdAt?: true
    updatedAt?: true
    bio?: true
    experience?: true
    skills?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    industry: string | null
    createdAt: Date
    updatedAt: Date
    bio: string | null
    experience: number | null
    skills: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    coverLetter?: boolean | User$coverLetterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    industry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bio?: boolean
    experience?: boolean
    skills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "industry" | "createdAt" | "updatedAt" | "bio" | "experience" | "skills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
    assessments?: boolean | User$assessmentsArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    coverLetter?: boolean | User$coverLetterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industryInsight?: boolean | User$industryInsightArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      industryInsight: Prisma.$IndustryInsightPayload<ExtArgs> | null
      assessments: Prisma.$AssessmentsPayload<ExtArgs>[]
      resume: Prisma.$ResumePayload<ExtArgs> | null
      coverLetter: Prisma.$CoverLetterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      industry: string | null
      createdAt: Date
      updatedAt: Date
      bio: string | null
      experience: number | null
      skills: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industryInsight<T extends User$industryInsightArgs<ExtArgs> = {}>(args?: Subset<T, User$industryInsightArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assessments<T extends User$assessmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resume<T extends User$resumeArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coverLetter<T extends User$coverLetterArgs<ExtArgs> = {}>(args?: Subset<T, User$coverLetterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly industry: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly skills: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.industryInsight
   */
  export type User$industryInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    where?: IndustryInsightWhereInput
  }

  /**
   * User.assessments
   */
  export type User$assessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    where?: AssessmentsWhereInput
    orderBy?: AssessmentsOrderByWithRelationInput | AssessmentsOrderByWithRelationInput[]
    cursor?: AssessmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentsScalarFieldEnum | AssessmentsScalarFieldEnum[]
  }

  /**
   * User.resume
   */
  export type User$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * User.coverLetter
   */
  export type User$coverLetterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    cursor?: CoverLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model IndustryInsight
   */

  export type AggregateIndustryInsight = {
    _count: IndustryInsightCountAggregateOutputType | null
    _avg: IndustryInsightAvgAggregateOutputType | null
    _sum: IndustryInsightSumAggregateOutputType | null
    _min: IndustryInsightMinAggregateOutputType | null
    _max: IndustryInsightMaxAggregateOutputType | null
  }

  export type IndustryInsightAvgAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightSumAggregateOutputType = {
    growthRate: number | null
  }

  export type IndustryInsightMinAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandlevel: $Enums.DemandLevel | null
    marketOutlook: $Enums.MarketOutLook | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightMaxAggregateOutputType = {
    id: string | null
    industry: string | null
    growthRate: number | null
    demandlevel: $Enums.DemandLevel | null
    marketOutlook: $Enums.MarketOutLook | null
    lastUpdated: Date | null
    nextUpdate: Date | null
  }

  export type IndustryInsightCountAggregateOutputType = {
    id: number
    industry: number
    salaryRanges: number
    growthRate: number
    demandlevel: number
    topSkills: number
    marketOutlook: number
    keyTrends: number
    recommendedSkills: number
    lastUpdated: number
    nextUpdate: number
    _all: number
  }


  export type IndustryInsightAvgAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightSumAggregateInputType = {
    growthRate?: true
  }

  export type IndustryInsightMinAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandlevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightMaxAggregateInputType = {
    id?: true
    industry?: true
    growthRate?: true
    demandlevel?: true
    marketOutlook?: true
    lastUpdated?: true
    nextUpdate?: true
  }

  export type IndustryInsightCountAggregateInputType = {
    id?: true
    industry?: true
    salaryRanges?: true
    growthRate?: true
    demandlevel?: true
    topSkills?: true
    marketOutlook?: true
    keyTrends?: true
    recommendedSkills?: true
    lastUpdated?: true
    nextUpdate?: true
    _all?: true
  }

  export type IndustryInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsight to aggregate.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryInsights
    **/
    _count?: true | IndustryInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndustryInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndustryInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryInsightMaxAggregateInputType
  }

  export type GetIndustryInsightAggregateType<T extends IndustryInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryInsight[P]>
      : GetScalarType<T[P], AggregateIndustryInsight[P]>
  }




  export type IndustryInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryInsightWhereInput
    orderBy?: IndustryInsightOrderByWithAggregationInput | IndustryInsightOrderByWithAggregationInput[]
    by: IndustryInsightScalarFieldEnum[] | IndustryInsightScalarFieldEnum
    having?: IndustryInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryInsightCountAggregateInputType | true
    _avg?: IndustryInsightAvgAggregateInputType
    _sum?: IndustryInsightSumAggregateInputType
    _min?: IndustryInsightMinAggregateInputType
    _max?: IndustryInsightMaxAggregateInputType
  }

  export type IndustryInsightGroupByOutputType = {
    id: string
    industry: string
    salaryRanges: JsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills: string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends: string[]
    recommendedSkills: string[]
    lastUpdated: Date
    nextUpdate: Date
    _count: IndustryInsightCountAggregateOutputType | null
    _avg: IndustryInsightAvgAggregateOutputType | null
    _sum: IndustryInsightSumAggregateOutputType | null
    _min: IndustryInsightMinAggregateOutputType | null
    _max: IndustryInsightMaxAggregateOutputType | null
  }

  type GetIndustryInsightGroupByPayload<T extends IndustryInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryInsightGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryInsightGroupByOutputType[P]>
        }
      >
    >


  export type IndustryInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandlevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
    users?: boolean | IndustryInsight$usersArgs<ExtArgs>
    _count?: boolean | IndustryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandlevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandlevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }, ExtArgs["result"]["industryInsight"]>

  export type IndustryInsightSelectScalar = {
    id?: boolean
    industry?: boolean
    salaryRanges?: boolean
    growthRate?: boolean
    demandlevel?: boolean
    topSkills?: boolean
    marketOutlook?: boolean
    keyTrends?: boolean
    recommendedSkills?: boolean
    lastUpdated?: boolean
    nextUpdate?: boolean
  }

  export type IndustryInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "industry" | "salaryRanges" | "growthRate" | "demandlevel" | "topSkills" | "marketOutlook" | "keyTrends" | "recommendedSkills" | "lastUpdated" | "nextUpdate", ExtArgs["result"]["industryInsight"]>
  export type IndustryInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | IndustryInsight$usersArgs<ExtArgs>
    _count?: boolean | IndustryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryInsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryInsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryInsight"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      industry: string
      salaryRanges: Prisma.JsonValue[]
      growthRate: number
      demandlevel: $Enums.DemandLevel
      topSkills: string[]
      marketOutlook: $Enums.MarketOutLook
      keyTrends: string[]
      recommendedSkills: string[]
      lastUpdated: Date
      nextUpdate: Date
    }, ExtArgs["result"]["industryInsight"]>
    composites: {}
  }

  type IndustryInsightGetPayload<S extends boolean | null | undefined | IndustryInsightDefaultArgs> = $Result.GetResult<Prisma.$IndustryInsightPayload, S>

  type IndustryInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryInsightCountAggregateInputType | true
    }

  export interface IndustryInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryInsight'], meta: { name: 'IndustryInsight' } }
    /**
     * Find zero or one IndustryInsight that matches the filter.
     * @param {IndustryInsightFindUniqueArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryInsightFindUniqueArgs>(args: SelectSubset<T, IndustryInsightFindUniqueArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndustryInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryInsightFindUniqueOrThrowArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindFirstArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryInsightFindFirstArgs>(args?: SelectSubset<T, IndustryInsightFindFirstArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindFirstOrThrowArgs} args - Arguments to find a IndustryInsight
     * @example
     * // Get one IndustryInsight
     * const industryInsight = await prisma.industryInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndustryInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryInsights
     * const industryInsights = await prisma.industryInsight.findMany()
     * 
     * // Get first 10 IndustryInsights
     * const industryInsights = await prisma.industryInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryInsightFindManyArgs>(args?: SelectSubset<T, IndustryInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndustryInsight.
     * @param {IndustryInsightCreateArgs} args - Arguments to create a IndustryInsight.
     * @example
     * // Create one IndustryInsight
     * const IndustryInsight = await prisma.industryInsight.create({
     *   data: {
     *     // ... data to create a IndustryInsight
     *   }
     * })
     * 
     */
    create<T extends IndustryInsightCreateArgs>(args: SelectSubset<T, IndustryInsightCreateArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndustryInsights.
     * @param {IndustryInsightCreateManyArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsight = await prisma.industryInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryInsightCreateManyArgs>(args?: SelectSubset<T, IndustryInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryInsights and returns the data saved in the database.
     * @param {IndustryInsightCreateManyAndReturnArgs} args - Arguments to create many IndustryInsights.
     * @example
     * // Create many IndustryInsights
     * const industryInsight = await prisma.industryInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryInsights and only return the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryInsightCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryInsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndustryInsight.
     * @param {IndustryInsightDeleteArgs} args - Arguments to delete one IndustryInsight.
     * @example
     * // Delete one IndustryInsight
     * const IndustryInsight = await prisma.industryInsight.delete({
     *   where: {
     *     // ... filter to delete one IndustryInsight
     *   }
     * })
     * 
     */
    delete<T extends IndustryInsightDeleteArgs>(args: SelectSubset<T, IndustryInsightDeleteArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndustryInsight.
     * @param {IndustryInsightUpdateArgs} args - Arguments to update one IndustryInsight.
     * @example
     * // Update one IndustryInsight
     * const industryInsight = await prisma.industryInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryInsightUpdateArgs>(args: SelectSubset<T, IndustryInsightUpdateArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndustryInsights.
     * @param {IndustryInsightDeleteManyArgs} args - Arguments to filter IndustryInsights to delete.
     * @example
     * // Delete a few IndustryInsights
     * const { count } = await prisma.industryInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryInsightDeleteManyArgs>(args?: SelectSubset<T, IndustryInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryInsights
     * const industryInsight = await prisma.industryInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryInsightUpdateManyArgs>(args: SelectSubset<T, IndustryInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryInsights and returns the data updated in the database.
     * @param {IndustryInsightUpdateManyAndReturnArgs} args - Arguments to update many IndustryInsights.
     * @example
     * // Update many IndustryInsights
     * const industryInsight = await prisma.industryInsight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndustryInsights and only return the `id`
     * const industryInsightWithIdOnly = await prisma.industryInsight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryInsightUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryInsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndustryInsight.
     * @param {IndustryInsightUpsertArgs} args - Arguments to update or create a IndustryInsight.
     * @example
     * // Update or create a IndustryInsight
     * const industryInsight = await prisma.industryInsight.upsert({
     *   create: {
     *     // ... data to create a IndustryInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryInsight we want to update
     *   }
     * })
     */
    upsert<T extends IndustryInsightUpsertArgs>(args: SelectSubset<T, IndustryInsightUpsertArgs<ExtArgs>>): Prisma__IndustryInsightClient<$Result.GetResult<Prisma.$IndustryInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndustryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightCountArgs} args - Arguments to filter IndustryInsights to count.
     * @example
     * // Count the number of IndustryInsights
     * const count = await prisma.industryInsight.count({
     *   where: {
     *     // ... the filter for the IndustryInsights we want to count
     *   }
     * })
    **/
    count<T extends IndustryInsightCountArgs>(
      args?: Subset<T, IndustryInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryInsightAggregateArgs>(args: Subset<T, IndustryInsightAggregateArgs>): Prisma.PrismaPromise<GetIndustryInsightAggregateType<T>>

    /**
     * Group by IndustryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryInsightGroupByArgs['orderBy'] }
        : { orderBy?: IndustryInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryInsight model
   */
  readonly fields: IndustryInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends IndustryInsight$usersArgs<ExtArgs> = {}>(args?: Subset<T, IndustryInsight$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndustryInsight model
   */
  interface IndustryInsightFieldRefs {
    readonly id: FieldRef<"IndustryInsight", 'String'>
    readonly industry: FieldRef<"IndustryInsight", 'String'>
    readonly salaryRanges: FieldRef<"IndustryInsight", 'Json[]'>
    readonly growthRate: FieldRef<"IndustryInsight", 'Float'>
    readonly demandlevel: FieldRef<"IndustryInsight", 'DemandLevel'>
    readonly topSkills: FieldRef<"IndustryInsight", 'String[]'>
    readonly marketOutlook: FieldRef<"IndustryInsight", 'MarketOutLook'>
    readonly keyTrends: FieldRef<"IndustryInsight", 'String[]'>
    readonly recommendedSkills: FieldRef<"IndustryInsight", 'String[]'>
    readonly lastUpdated: FieldRef<"IndustryInsight", 'DateTime'>
    readonly nextUpdate: FieldRef<"IndustryInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndustryInsight findUnique
   */
  export type IndustryInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight findUniqueOrThrow
   */
  export type IndustryInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight findFirst
   */
  export type IndustryInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight findFirstOrThrow
   */
  export type IndustryInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsight to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryInsights.
     */
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight findMany
   */
  export type IndustryInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter, which IndustryInsights to fetch.
     */
    where?: IndustryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryInsights to fetch.
     */
    orderBy?: IndustryInsightOrderByWithRelationInput | IndustryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryInsights.
     */
    cursor?: IndustryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryInsights.
     */
    skip?: number
    distinct?: IndustryInsightScalarFieldEnum | IndustryInsightScalarFieldEnum[]
  }

  /**
   * IndustryInsight create
   */
  export type IndustryInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a IndustryInsight.
     */
    data: XOR<IndustryInsightCreateInput, IndustryInsightUncheckedCreateInput>
  }

  /**
   * IndustryInsight createMany
   */
  export type IndustryInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightCreateManyInput | IndustryInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsight createManyAndReturn
   */
  export type IndustryInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * The data used to create many IndustryInsights.
     */
    data: IndustryInsightCreateManyInput | IndustryInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryInsight update
   */
  export type IndustryInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a IndustryInsight.
     */
    data: XOR<IndustryInsightUpdateInput, IndustryInsightUncheckedUpdateInput>
    /**
     * Choose, which IndustryInsight to update.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight updateMany
   */
  export type IndustryInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightUpdateManyMutationInput, IndustryInsightUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsight updateManyAndReturn
   */
  export type IndustryInsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * The data used to update IndustryInsights.
     */
    data: XOR<IndustryInsightUpdateManyMutationInput, IndustryInsightUncheckedUpdateManyInput>
    /**
     * Filter which IndustryInsights to update
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to update.
     */
    limit?: number
  }

  /**
   * IndustryInsight upsert
   */
  export type IndustryInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the IndustryInsight to update in case it exists.
     */
    where: IndustryInsightWhereUniqueInput
    /**
     * In case the IndustryInsight found by the `where` argument doesn't exist, create a new IndustryInsight with this data.
     */
    create: XOR<IndustryInsightCreateInput, IndustryInsightUncheckedCreateInput>
    /**
     * In case the IndustryInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryInsightUpdateInput, IndustryInsightUncheckedUpdateInput>
  }

  /**
   * IndustryInsight delete
   */
  export type IndustryInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
    /**
     * Filter which IndustryInsight to delete.
     */
    where: IndustryInsightWhereUniqueInput
  }

  /**
   * IndustryInsight deleteMany
   */
  export type IndustryInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryInsights to delete
     */
    where?: IndustryInsightWhereInput
    /**
     * Limit how many IndustryInsights to delete.
     */
    limit?: number
  }

  /**
   * IndustryInsight.users
   */
  export type IndustryInsight$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * IndustryInsight without action
   */
  export type IndustryInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryInsight
     */
    select?: IndustryInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryInsight
     */
    omit?: IndustryInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInsightInclude<ExtArgs> | null
  }


  /**
   * Model Assessments
   */

  export type AggregateAssessments = {
    _count: AssessmentsCountAggregateOutputType | null
    _avg: AssessmentsAvgAggregateOutputType | null
    _sum: AssessmentsSumAggregateOutputType | null
    _min: AssessmentsMinAggregateOutputType | null
    _max: AssessmentsMaxAggregateOutputType | null
  }

  export type AssessmentsAvgAggregateOutputType = {
    quizScore: number | null
  }

  export type AssessmentsSumAggregateOutputType = {
    quizScore: number | null
  }

  export type AssessmentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizScore: number | null
    category: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizScore: number | null
    category: string | null
    improvementTip: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentsCountAggregateOutputType = {
    id: number
    userId: number
    quizScore: number
    questions: number
    category: number
    improvementTip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentsAvgAggregateInputType = {
    quizScore?: true
  }

  export type AssessmentsSumAggregateInputType = {
    quizScore?: true
  }

  export type AssessmentsMinAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentsMaxAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentsCountAggregateInputType = {
    id?: true
    userId?: true
    quizScore?: true
    questions?: true
    category?: true
    improvementTip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to aggregate.
     */
    where?: AssessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentsOrderByWithRelationInput | AssessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentsMaxAggregateInputType
  }

  export type GetAssessmentsAggregateType<T extends AssessmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessments[P]>
      : GetScalarType<T[P], AggregateAssessments[P]>
  }




  export type AssessmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentsWhereInput
    orderBy?: AssessmentsOrderByWithAggregationInput | AssessmentsOrderByWithAggregationInput[]
    by: AssessmentsScalarFieldEnum[] | AssessmentsScalarFieldEnum
    having?: AssessmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentsCountAggregateInputType | true
    _avg?: AssessmentsAvgAggregateInputType
    _sum?: AssessmentsSumAggregateInputType
    _min?: AssessmentsMinAggregateInputType
    _max?: AssessmentsMaxAggregateInputType
  }

  export type AssessmentsGroupByOutputType = {
    id: string
    userId: string
    quizScore: number
    questions: JsonValue[]
    category: string
    improvementTip: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentsCountAggregateOutputType | null
    _avg: AssessmentsAvgAggregateOutputType | null
    _sum: AssessmentsSumAggregateOutputType | null
    _min: AssessmentsMinAggregateOutputType | null
    _max: AssessmentsMaxAggregateOutputType | null
  }

  type GetAssessmentsGroupByPayload<T extends AssessmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentsGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessments"]>

  export type AssessmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessments"]>

  export type AssessmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessments"]>

  export type AssessmentsSelectScalar = {
    id?: boolean
    userId?: boolean
    quizScore?: boolean
    questions?: boolean
    category?: boolean
    improvementTip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizScore" | "questions" | "category" | "improvementTip" | "createdAt" | "updatedAt", ExtArgs["result"]["assessments"]>
  export type AssessmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssessmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizScore: number
      questions: Prisma.JsonValue[]
      category: string
      improvementTip: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessments"]>
    composites: {}
  }

  type AssessmentsGetPayload<S extends boolean | null | undefined | AssessmentsDefaultArgs> = $Result.GetResult<Prisma.$AssessmentsPayload, S>

  type AssessmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentsCountAggregateInputType | true
    }

  export interface AssessmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessments'], meta: { name: 'Assessments' } }
    /**
     * Find zero or one Assessments that matches the filter.
     * @param {AssessmentsFindUniqueArgs} args - Arguments to find a Assessments
     * @example
     * // Get one Assessments
     * const assessments = await prisma.assessments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentsFindUniqueArgs>(args: SelectSubset<T, AssessmentsFindUniqueArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assessments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentsFindUniqueOrThrowArgs} args - Arguments to find a Assessments
     * @example
     * // Get one Assessments
     * const assessments = await prisma.assessments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsFindFirstArgs} args - Arguments to find a Assessments
     * @example
     * // Get one Assessments
     * const assessments = await prisma.assessments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentsFindFirstArgs>(args?: SelectSubset<T, AssessmentsFindFirstArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assessments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsFindFirstOrThrowArgs} args - Arguments to find a Assessments
     * @example
     * // Get one Assessments
     * const assessments = await prisma.assessments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessments.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentsWithIdOnly = await prisma.assessments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentsFindManyArgs>(args?: SelectSubset<T, AssessmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assessments.
     * @param {AssessmentsCreateArgs} args - Arguments to create a Assessments.
     * @example
     * // Create one Assessments
     * const Assessments = await prisma.assessments.create({
     *   data: {
     *     // ... data to create a Assessments
     *   }
     * })
     * 
     */
    create<T extends AssessmentsCreateArgs>(args: SelectSubset<T, AssessmentsCreateArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assessments.
     * @param {AssessmentsCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessments = await prisma.assessments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentsCreateManyArgs>(args?: SelectSubset<T, AssessmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentsCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessments = await prisma.assessments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentsWithIdOnly = await prisma.assessments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assessments.
     * @param {AssessmentsDeleteArgs} args - Arguments to delete one Assessments.
     * @example
     * // Delete one Assessments
     * const Assessments = await prisma.assessments.delete({
     *   where: {
     *     // ... filter to delete one Assessments
     *   }
     * })
     * 
     */
    delete<T extends AssessmentsDeleteArgs>(args: SelectSubset<T, AssessmentsDeleteArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assessments.
     * @param {AssessmentsUpdateArgs} args - Arguments to update one Assessments.
     * @example
     * // Update one Assessments
     * const assessments = await prisma.assessments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentsUpdateArgs>(args: SelectSubset<T, AssessmentsUpdateArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentsDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentsDeleteManyArgs>(args?: SelectSubset<T, AssessmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessments = await prisma.assessments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentsUpdateManyArgs>(args: SelectSubset<T, AssessmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments and returns the data updated in the database.
     * @param {AssessmentsUpdateManyAndReturnArgs} args - Arguments to update many Assessments.
     * @example
     * // Update many Assessments
     * const assessments = await prisma.assessments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assessments and only return the `id`
     * const assessmentsWithIdOnly = await prisma.assessments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assessments.
     * @param {AssessmentsUpsertArgs} args - Arguments to update or create a Assessments.
     * @example
     * // Update or create a Assessments
     * const assessments = await prisma.assessments.upsert({
     *   create: {
     *     // ... data to create a Assessments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessments we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentsUpsertArgs>(args: SelectSubset<T, AssessmentsUpsertArgs<ExtArgs>>): Prisma__AssessmentsClient<$Result.GetResult<Prisma.$AssessmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessments.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentsCountArgs>(
      args?: Subset<T, AssessmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentsAggregateArgs>(args: Subset<T, AssessmentsAggregateArgs>): Prisma.PrismaPromise<GetAssessmentsAggregateType<T>>

    /**
     * Group by Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentsGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessments model
   */
  readonly fields: AssessmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessments model
   */
  interface AssessmentsFieldRefs {
    readonly id: FieldRef<"Assessments", 'String'>
    readonly userId: FieldRef<"Assessments", 'String'>
    readonly quizScore: FieldRef<"Assessments", 'Float'>
    readonly questions: FieldRef<"Assessments", 'Json[]'>
    readonly category: FieldRef<"Assessments", 'String'>
    readonly improvementTip: FieldRef<"Assessments", 'String'>
    readonly createdAt: FieldRef<"Assessments", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessments findUnique
   */
  export type AssessmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where: AssessmentsWhereUniqueInput
  }

  /**
   * Assessments findUniqueOrThrow
   */
  export type AssessmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where: AssessmentsWhereUniqueInput
  }

  /**
   * Assessments findFirst
   */
  export type AssessmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentsOrderByWithRelationInput | AssessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentsScalarFieldEnum | AssessmentsScalarFieldEnum[]
  }

  /**
   * Assessments findFirstOrThrow
   */
  export type AssessmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentsOrderByWithRelationInput | AssessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentsScalarFieldEnum | AssessmentsScalarFieldEnum[]
  }

  /**
   * Assessments findMany
   */
  export type AssessmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentsOrderByWithRelationInput | AssessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentsScalarFieldEnum | AssessmentsScalarFieldEnum[]
  }

  /**
   * Assessments create
   */
  export type AssessmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessments.
     */
    data: XOR<AssessmentsCreateInput, AssessmentsUncheckedCreateInput>
  }

  /**
   * Assessments createMany
   */
  export type AssessmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentsCreateManyInput | AssessmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessments createManyAndReturn
   */
  export type AssessmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentsCreateManyInput | AssessmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessments update
   */
  export type AssessmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessments.
     */
    data: XOR<AssessmentsUpdateInput, AssessmentsUncheckedUpdateInput>
    /**
     * Choose, which Assessments to update.
     */
    where: AssessmentsWhereUniqueInput
  }

  /**
   * Assessments updateMany
   */
  export type AssessmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentsUpdateManyMutationInput, AssessmentsUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentsWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
  }

  /**
   * Assessments updateManyAndReturn
   */
  export type AssessmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentsUpdateManyMutationInput, AssessmentsUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentsWhereInput
    /**
     * Limit how many Assessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assessments upsert
   */
  export type AssessmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessments to update in case it exists.
     */
    where: AssessmentsWhereUniqueInput
    /**
     * In case the Assessments found by the `where` argument doesn't exist, create a new Assessments with this data.
     */
    create: XOR<AssessmentsCreateInput, AssessmentsUncheckedCreateInput>
    /**
     * In case the Assessments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentsUpdateInput, AssessmentsUncheckedUpdateInput>
  }

  /**
   * Assessments delete
   */
  export type AssessmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
    /**
     * Filter which Assessments to delete.
     */
    where: AssessmentsWhereUniqueInput
  }

  /**
   * Assessments deleteMany
   */
  export type AssessmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentsWhereInput
    /**
     * Limit how many Assessments to delete.
     */
    limit?: number
  }

  /**
   * Assessments without action
   */
  export type AssessmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessments
     */
    select?: AssessmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assessments
     */
    omit?: AssessmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentsInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    atsScore: number | null
  }

  export type ResumeSumAggregateOutputType = {
    atsScore: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    atsScore: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    atsScore: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    atsScore: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    atsScore?: true
  }

  export type ResumeSumAggregateInputType = {
    atsScore?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    atsScore?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    atsScore?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    atsScore?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string
    content: string
    atsScore: number | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    atsScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    atsScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    atsScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    atsScore?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "atsScore" | "feedback" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      atsScore: number | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly content: FieldRef<"Resume", 'String'>
    readonly atsScore: FieldRef<"Resume", 'Float'>
    readonly feedback: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model CoverLetter
   */

  export type AggregateCoverLetter = {
    _count: CoverLetterCountAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  export type CoverLetterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    jobDescription: string | null
    companyName: string | null
    jobTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverLetterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    jobDescription: string | null
    companyName: string | null
    jobTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoverLetterCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    jobDescription: number
    companyName: number
    jobTitle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoverLetterMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverLetterMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoverLetterCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    jobDescription?: true
    companyName?: true
    jobTitle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoverLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetter to aggregate.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverLetters
    **/
    _count?: true | CoverLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverLetterMaxAggregateInputType
  }

  export type GetCoverLetterAggregateType<T extends CoverLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverLetter[P]>
      : GetScalarType<T[P], AggregateCoverLetter[P]>
  }




  export type CoverLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithAggregationInput | CoverLetterOrderByWithAggregationInput[]
    by: CoverLetterScalarFieldEnum[] | CoverLetterScalarFieldEnum
    having?: CoverLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverLetterCountAggregateInputType | true
    _min?: CoverLetterMinAggregateInputType
    _max?: CoverLetterMaxAggregateInputType
  }

  export type CoverLetterGroupByOutputType = {
    id: string
    userId: string
    content: string
    jobDescription: string | null
    companyName: string
    jobTitle: string
    createdAt: Date
    updatedAt: Date
    _count: CoverLetterCountAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  type GetCoverLetterGroupByPayload<T extends CoverLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
            : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
        }
      >
    >


  export type CoverLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    jobDescription?: boolean
    companyName?: boolean
    jobTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoverLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "jobDescription" | "companyName" | "jobTitle" | "createdAt" | "updatedAt", ExtArgs["result"]["coverLetter"]>
  export type CoverLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoverLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverLetter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      jobDescription: string | null
      companyName: string
      jobTitle: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coverLetter"]>
    composites: {}
  }

  type CoverLetterGetPayload<S extends boolean | null | undefined | CoverLetterDefaultArgs> = $Result.GetResult<Prisma.$CoverLetterPayload, S>

  type CoverLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverLetterCountAggregateInputType | true
    }

  export interface CoverLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverLetter'], meta: { name: 'CoverLetter' } }
    /**
     * Find zero or one CoverLetter that matches the filter.
     * @param {CoverLetterFindUniqueArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverLetterFindUniqueArgs>(args: SelectSubset<T, CoverLetterFindUniqueArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverLetterFindUniqueOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverLetterFindFirstArgs>(args?: SelectSubset<T, CoverLetterFindFirstArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany()
     * 
     * // Get first 10 CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverLetterFindManyArgs>(args?: SelectSubset<T, CoverLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverLetter.
     * @param {CoverLetterCreateArgs} args - Arguments to create a CoverLetter.
     * @example
     * // Create one CoverLetter
     * const CoverLetter = await prisma.coverLetter.create({
     *   data: {
     *     // ... data to create a CoverLetter
     *   }
     * })
     * 
     */
    create<T extends CoverLetterCreateArgs>(args: SelectSubset<T, CoverLetterCreateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverLetters.
     * @param {CoverLetterCreateManyArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverLetterCreateManyArgs>(args?: SelectSubset<T, CoverLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverLetters and returns the data saved in the database.
     * @param {CoverLetterCreateManyAndReturnArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverLetter.
     * @param {CoverLetterDeleteArgs} args - Arguments to delete one CoverLetter.
     * @example
     * // Delete one CoverLetter
     * const CoverLetter = await prisma.coverLetter.delete({
     *   where: {
     *     // ... filter to delete one CoverLetter
     *   }
     * })
     * 
     */
    delete<T extends CoverLetterDeleteArgs>(args: SelectSubset<T, CoverLetterDeleteArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverLetter.
     * @param {CoverLetterUpdateArgs} args - Arguments to update one CoverLetter.
     * @example
     * // Update one CoverLetter
     * const coverLetter = await prisma.coverLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverLetterUpdateArgs>(args: SelectSubset<T, CoverLetterUpdateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverLetters.
     * @param {CoverLetterDeleteManyArgs} args - Arguments to filter CoverLetters to delete.
     * @example
     * // Delete a few CoverLetters
     * const { count } = await prisma.coverLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverLetterDeleteManyArgs>(args?: SelectSubset<T, CoverLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverLetterUpdateManyArgs>(args: SelectSubset<T, CoverLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters and returns the data updated in the database.
     * @param {CoverLetterUpdateManyAndReturnArgs} args - Arguments to update many CoverLetters.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoverLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverLetter.
     * @param {CoverLetterUpsertArgs} args - Arguments to update or create a CoverLetter.
     * @example
     * // Update or create a CoverLetter
     * const coverLetter = await prisma.coverLetter.upsert({
     *   create: {
     *     // ... data to create a CoverLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverLetter we want to update
     *   }
     * })
     */
    upsert<T extends CoverLetterUpsertArgs>(args: SelectSubset<T, CoverLetterUpsertArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterCountArgs} args - Arguments to filter CoverLetters to count.
     * @example
     * // Count the number of CoverLetters
     * const count = await prisma.coverLetter.count({
     *   where: {
     *     // ... the filter for the CoverLetters we want to count
     *   }
     * })
    **/
    count<T extends CoverLetterCountArgs>(
      args?: Subset<T, CoverLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoverLetterAggregateArgs>(args: Subset<T, CoverLetterAggregateArgs>): Prisma.PrismaPromise<GetCoverLetterAggregateType<T>>

    /**
     * Group by CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoverLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverLetterGroupByArgs['orderBy'] }
        : { orderBy?: CoverLetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoverLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverLetter model
   */
  readonly fields: CoverLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoverLetter model
   */
  interface CoverLetterFieldRefs {
    readonly id: FieldRef<"CoverLetter", 'String'>
    readonly userId: FieldRef<"CoverLetter", 'String'>
    readonly content: FieldRef<"CoverLetter", 'String'>
    readonly jobDescription: FieldRef<"CoverLetter", 'String'>
    readonly companyName: FieldRef<"CoverLetter", 'String'>
    readonly jobTitle: FieldRef<"CoverLetter", 'String'>
    readonly createdAt: FieldRef<"CoverLetter", 'DateTime'>
    readonly updatedAt: FieldRef<"CoverLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoverLetter findUnique
   */
  export type CoverLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findUniqueOrThrow
   */
  export type CoverLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findFirst
   */
  export type CoverLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findFirstOrThrow
   */
  export type CoverLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findMany
   */
  export type CoverLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetters to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter create
   */
  export type CoverLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverLetter.
     */
    data: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
  }

  /**
   * CoverLetter createMany
   */
  export type CoverLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverLetter createManyAndReturn
   */
  export type CoverLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter update
   */
  export type CoverLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverLetter.
     */
    data: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
    /**
     * Choose, which CoverLetter to update.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter updateMany
   */
  export type CoverLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
  }

  /**
   * CoverLetter updateManyAndReturn
   */
  export type CoverLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter upsert
   */
  export type CoverLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverLetter to update in case it exists.
     */
    where: CoverLetterWhereUniqueInput
    /**
     * In case the CoverLetter found by the `where` argument doesn't exist, create a new CoverLetter with this data.
     */
    create: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
    /**
     * In case the CoverLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
  }

  /**
   * CoverLetter delete
   */
  export type CoverLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter which CoverLetter to delete.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter deleteMany
   */
  export type CoverLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetters to delete
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to delete.
     */
    limit?: number
  }

  /**
   * CoverLetter without action
   */
  export type CoverLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    industry: 'industry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bio: 'bio',
    experience: 'experience',
    skills: 'skills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IndustryInsightScalarFieldEnum: {
    id: 'id',
    industry: 'industry',
    salaryRanges: 'salaryRanges',
    growthRate: 'growthRate',
    demandlevel: 'demandlevel',
    topSkills: 'topSkills',
    marketOutlook: 'marketOutlook',
    keyTrends: 'keyTrends',
    recommendedSkills: 'recommendedSkills',
    lastUpdated: 'lastUpdated',
    nextUpdate: 'nextUpdate'
  };

  export type IndustryInsightScalarFieldEnum = (typeof IndustryInsightScalarFieldEnum)[keyof typeof IndustryInsightScalarFieldEnum]


  export const AssessmentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizScore: 'quizScore',
    questions: 'questions',
    category: 'category',
    improvementTip: 'improvementTip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentsScalarFieldEnum = (typeof AssessmentsScalarFieldEnum)[keyof typeof AssessmentsScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    atsScore: 'atsScore',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const CoverLetterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    jobDescription: 'jobDescription',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoverLetterScalarFieldEnum = (typeof CoverLetterScalarFieldEnum)[keyof typeof CoverLetterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DemandLevel'
   */
  export type EnumDemandLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandLevel'>
    


  /**
   * Reference to a field of type 'DemandLevel[]'
   */
  export type ListEnumDemandLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandLevel[]'>
    


  /**
   * Reference to a field of type 'MarketOutLook'
   */
  export type EnumMarketOutLookFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketOutLook'>
    


  /**
   * Reference to a field of type 'MarketOutLook[]'
   */
  export type ListEnumMarketOutLookFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketOutLook[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
    industryInsight?: XOR<IndustryInsightNullableScalarRelationFilter, IndustryInsightWhereInput> | null
    assessments?: AssessmentsListRelationFilter
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    coverLetter?: CoverLetterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    industryInsight?: IndustryInsightOrderByWithRelationInput
    assessments?: AssessmentsOrderByRelationAggregateInput
    resume?: ResumeOrderByWithRelationInput
    coverLetter?: CoverLetterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
    industryInsight?: XOR<IndustryInsightNullableScalarRelationFilter, IndustryInsightWhereInput> | null
    assessments?: AssessmentsListRelationFilter
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
    coverLetter?: CoverLetterListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    skills?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    industry?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: IntNullableWithAggregatesFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
  }

  export type IndustryInsightWhereInput = {
    AND?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    OR?: IndustryInsightWhereInput[]
    NOT?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    id?: StringFilter<"IndustryInsight"> | string
    industry?: StringFilter<"IndustryInsight"> | string
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatFilter<"IndustryInsight"> | number
    demandlevel?: EnumDemandLevelFilter<"IndustryInsight"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: EnumMarketOutLookFilter<"IndustryInsight"> | $Enums.MarketOutLook
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsight"> | Date | string
    users?: UserListRelationFilter
  }

  export type IndustryInsightOrderByWithRelationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandlevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type IndustryInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    industry?: string
    AND?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    OR?: IndustryInsightWhereInput[]
    NOT?: IndustryInsightWhereInput | IndustryInsightWhereInput[]
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatFilter<"IndustryInsight"> | number
    demandlevel?: EnumDemandLevelFilter<"IndustryInsight"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: EnumMarketOutLookFilter<"IndustryInsight"> | $Enums.MarketOutLook
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeFilter<"IndustryInsight"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "industry">

  export type IndustryInsightOrderByWithAggregationInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandlevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
    _count?: IndustryInsightCountOrderByAggregateInput
    _avg?: IndustryInsightAvgOrderByAggregateInput
    _max?: IndustryInsightMaxOrderByAggregateInput
    _min?: IndustryInsightMinOrderByAggregateInput
    _sum?: IndustryInsightSumOrderByAggregateInput
  }

  export type IndustryInsightScalarWhereWithAggregatesInput = {
    AND?: IndustryInsightScalarWhereWithAggregatesInput | IndustryInsightScalarWhereWithAggregatesInput[]
    OR?: IndustryInsightScalarWhereWithAggregatesInput[]
    NOT?: IndustryInsightScalarWhereWithAggregatesInput | IndustryInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndustryInsight"> | string
    industry?: StringWithAggregatesFilter<"IndustryInsight"> | string
    salaryRanges?: JsonNullableListFilter<"IndustryInsight">
    growthRate?: FloatWithAggregatesFilter<"IndustryInsight"> | number
    demandlevel?: EnumDemandLevelWithAggregatesFilter<"IndustryInsight"> | $Enums.DemandLevel
    topSkills?: StringNullableListFilter<"IndustryInsight">
    marketOutlook?: EnumMarketOutLookWithAggregatesFilter<"IndustryInsight"> | $Enums.MarketOutLook
    keyTrends?: StringNullableListFilter<"IndustryInsight">
    recommendedSkills?: StringNullableListFilter<"IndustryInsight">
    lastUpdated?: DateTimeWithAggregatesFilter<"IndustryInsight"> | Date | string
    nextUpdate?: DateTimeWithAggregatesFilter<"IndustryInsight"> | Date | string
  }

  export type AssessmentsWhereInput = {
    AND?: AssessmentsWhereInput | AssessmentsWhereInput[]
    OR?: AssessmentsWhereInput[]
    NOT?: AssessmentsWhereInput | AssessmentsWhereInput[]
    id?: StringFilter<"Assessments"> | string
    userId?: StringFilter<"Assessments"> | string
    quizScore?: FloatFilter<"Assessments"> | number
    questions?: JsonNullableListFilter<"Assessments">
    category?: StringFilter<"Assessments"> | string
    improvementTip?: StringNullableFilter<"Assessments"> | string | null
    createdAt?: DateTimeFilter<"Assessments"> | Date | string
    updatedAt?: DateTimeFilter<"Assessments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssessmentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AssessmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentsWhereInput | AssessmentsWhereInput[]
    OR?: AssessmentsWhereInput[]
    NOT?: AssessmentsWhereInput | AssessmentsWhereInput[]
    userId?: StringFilter<"Assessments"> | string
    quizScore?: FloatFilter<"Assessments"> | number
    questions?: JsonNullableListFilter<"Assessments">
    category?: StringFilter<"Assessments"> | string
    improvementTip?: StringNullableFilter<"Assessments"> | string | null
    createdAt?: DateTimeFilter<"Assessments"> | Date | string
    updatedAt?: DateTimeFilter<"Assessments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AssessmentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentsCountOrderByAggregateInput
    _avg?: AssessmentsAvgOrderByAggregateInput
    _max?: AssessmentsMaxOrderByAggregateInput
    _min?: AssessmentsMinOrderByAggregateInput
    _sum?: AssessmentsSumOrderByAggregateInput
  }

  export type AssessmentsScalarWhereWithAggregatesInput = {
    AND?: AssessmentsScalarWhereWithAggregatesInput | AssessmentsScalarWhereWithAggregatesInput[]
    OR?: AssessmentsScalarWhereWithAggregatesInput[]
    NOT?: AssessmentsScalarWhereWithAggregatesInput | AssessmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessments"> | string
    userId?: StringWithAggregatesFilter<"Assessments"> | string
    quizScore?: FloatWithAggregatesFilter<"Assessments"> | number
    questions?: JsonNullableListFilter<"Assessments">
    category?: StringWithAggregatesFilter<"Assessments"> | string
    improvementTip?: StringNullableWithAggregatesFilter<"Assessments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessments"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringFilter<"Resume"> | string
    content?: StringFilter<"Resume"> | string
    atsScore?: FloatNullableFilter<"Resume"> | number | null
    feedback?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    content?: StringFilter<"Resume"> | string
    atsScore?: FloatNullableFilter<"Resume"> | number | null
    feedback?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringWithAggregatesFilter<"Resume"> | string
    content?: StringWithAggregatesFilter<"Resume"> | string
    atsScore?: FloatNullableWithAggregatesFilter<"Resume"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type CoverLetterWhereInput = {
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoverLetterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoverLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoverLetterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoverLetterCountOrderByAggregateInput
    _max?: CoverLetterMaxOrderByAggregateInput
    _min?: CoverLetterMinOrderByAggregateInput
  }

  export type CoverLetterScalarWhereWithAggregatesInput = {
    AND?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    OR?: CoverLetterScalarWhereWithAggregatesInput[]
    NOT?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoverLetter"> | string
    userId?: StringWithAggregatesFilter<"CoverLetter"> | string
    content?: StringWithAggregatesFilter<"CoverLetter"> | string
    jobDescription?: StringNullableWithAggregatesFilter<"CoverLetter"> | string | null
    companyName?: StringWithAggregatesFilter<"CoverLetter"> | string
    jobTitle?: StringWithAggregatesFilter<"CoverLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsight?: IndustryInsightCreateNestedOneWithoutUsersInput
    assessments?: AssessmentsCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentsUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsight?: IndustryInsightUpdateOneWithoutUsersNestedInput
    assessments?: AssessmentsUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentsUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }

  export type IndustryInsightCreateInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    users?: UserCreateNestedManyWithoutIndustryInsightInput
  }

  export type IndustryInsightUncheckedCreateInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
    users?: UserUncheckedCreateNestedManyWithoutIndustryInsightInput
  }

  export type IndustryInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutIndustryInsightNestedInput
  }

  export type IndustryInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutIndustryInsightNestedInput
  }

  export type IndustryInsightCreateManyInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsCreateInput = {
    id?: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentsInput
  }

  export type AssessmentsUncheckedCreateInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentsNestedInput
  }

  export type AssessmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsCreateManyInput = {
    id?: string
    userId: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    content: string
    atsScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    atsScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId: string
    content: string
    atsScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateInput = {
    id?: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoverLetterInput
  }

  export type CoverLetterUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoverLetterNestedInput
  }

  export type CoverLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateManyInput = {
    id?: string
    userId: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IndustryInsightNullableScalarRelationFilter = {
    is?: IndustryInsightWhereInput | null
    isNot?: IndustryInsightWhereInput | null
  }

  export type AssessmentsListRelationFilter = {
    every?: AssessmentsWhereInput
    some?: AssessmentsWhereInput
    none?: AssessmentsWhereInput
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type CoverLetterListRelationFilter = {
    every?: CoverLetterWhereInput
    some?: CoverLetterWhereInput
    none?: CoverLetterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoverLetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    industry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bio?: SortOrder
    experience?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDemandLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelFilter<$PrismaModel> | $Enums.DemandLevel
  }

  export type EnumMarketOutLookFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutLook | EnumMarketOutLookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutLookFilter<$PrismaModel> | $Enums.MarketOutLook
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryInsightCountOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    salaryRanges?: SortOrder
    growthRate?: SortOrder
    demandlevel?: SortOrder
    topSkills?: SortOrder
    marketOutlook?: SortOrder
    keyTrends?: SortOrder
    recommendedSkills?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightAvgOrderByAggregateInput = {
    growthRate?: SortOrder
  }

  export type IndustryInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandlevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightMinOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    growthRate?: SortOrder
    demandlevel?: SortOrder
    marketOutlook?: SortOrder
    lastUpdated?: SortOrder
    nextUpdate?: SortOrder
  }

  export type IndustryInsightSumOrderByAggregateInput = {
    growthRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDemandLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel> | $Enums.DemandLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandLevelFilter<$PrismaModel>
    _max?: NestedEnumDemandLevelFilter<$PrismaModel>
  }

  export type EnumMarketOutLookWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutLook | EnumMarketOutLookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutLookWithAggregatesFilter<$PrismaModel> | $Enums.MarketOutLook
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketOutLookFilter<$PrismaModel>
    _max?: NestedEnumMarketOutLookFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssessmentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    questions?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentsAvgOrderByAggregateInput = {
    quizScore?: SortOrder
  }

  export type AssessmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizScore?: SortOrder
    category?: SortOrder
    improvementTip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentsSumOrderByAggregateInput = {
    quizScore?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    atsScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    atsScore?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    atsScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    atsScore?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    atsScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CoverLetterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoverLetterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    jobDescription?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateskillsInput = {
    set: string[]
  }

  export type IndustryInsightCreateNestedOneWithoutUsersInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput
    connect?: IndustryInsightWhereUniqueInput
  }

  export type AssessmentsCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput> | AssessmentsCreateWithoutUserInput[] | AssessmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentsCreateOrConnectWithoutUserInput | AssessmentsCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentsCreateManyUserInputEnvelope
    connect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
  }

  export type ResumeCreateNestedOneWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    connect?: ResumeWhereUniqueInput
  }

  export type CoverLetterCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type AssessmentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput> | AssessmentsCreateWithoutUserInput[] | AssessmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentsCreateOrConnectWithoutUserInput | AssessmentsCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentsCreateManyUserInputEnvelope
    connect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    connect?: ResumeWhereUniqueInput
  }

  export type CoverLetterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightUpdateOneWithoutUsersNestedInput = {
    create?: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
    connectOrCreate?: IndustryInsightCreateOrConnectWithoutUsersInput
    upsert?: IndustryInsightUpsertWithoutUsersInput
    disconnect?: IndustryInsightWhereInput | boolean
    delete?: IndustryInsightWhereInput | boolean
    connect?: IndustryInsightWhereUniqueInput
    update?: XOR<XOR<IndustryInsightUpdateToOneWithWhereWithoutUsersInput, IndustryInsightUpdateWithoutUsersInput>, IndustryInsightUncheckedUpdateWithoutUsersInput>
  }

  export type AssessmentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput> | AssessmentsCreateWithoutUserInput[] | AssessmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentsCreateOrConnectWithoutUserInput | AssessmentsCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentsUpsertWithWhereUniqueWithoutUserInput | AssessmentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentsCreateManyUserInputEnvelope
    set?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    disconnect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    delete?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    connect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    update?: AssessmentsUpdateWithWhereUniqueWithoutUserInput | AssessmentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentsUpdateManyWithWhereWithoutUserInput | AssessmentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentsScalarWhereInput | AssessmentsScalarWhereInput[]
  }

  export type ResumeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    upsert?: ResumeUpsertWithoutUserInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutUserInput, ResumeUpdateWithoutUserInput>, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type AssessmentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput> | AssessmentsCreateWithoutUserInput[] | AssessmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentsCreateOrConnectWithoutUserInput | AssessmentsCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentsUpsertWithWhereUniqueWithoutUserInput | AssessmentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentsCreateManyUserInputEnvelope
    set?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    disconnect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    delete?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    connect?: AssessmentsWhereUniqueInput | AssessmentsWhereUniqueInput[]
    update?: AssessmentsUpdateWithWhereUniqueWithoutUserInput | AssessmentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentsUpdateManyWithWhereWithoutUserInput | AssessmentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentsScalarWhereInput | AssessmentsScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput
    upsert?: ResumeUpsertWithoutUserInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutUserInput, ResumeUpdateWithoutUserInput>, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type IndustryInsightCreatesalaryRangesInput = {
    set: InputJsonValue[]
  }

  export type IndustryInsightCreatetopSkillsInput = {
    set: string[]
  }

  export type IndustryInsightCreatekeyTrendsInput = {
    set: string[]
  }

  export type IndustryInsightCreaterecommendedSkillsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutIndustryInsightInput = {
    create?: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput> | UserCreateWithoutIndustryInsightInput[] | UserUncheckedCreateWithoutIndustryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightInput | UserCreateOrConnectWithoutIndustryInsightInput[]
    createMany?: UserCreateManyIndustryInsightInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutIndustryInsightInput = {
    create?: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput> | UserCreateWithoutIndustryInsightInput[] | UserUncheckedCreateWithoutIndustryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightInput | UserCreateOrConnectWithoutIndustryInsightInput[]
    createMany?: UserCreateManyIndustryInsightInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IndustryInsightUpdatesalaryRangesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDemandLevelFieldUpdateOperationsInput = {
    set?: $Enums.DemandLevel
  }

  export type IndustryInsightUpdatetopSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumMarketOutLookFieldUpdateOperationsInput = {
    set?: $Enums.MarketOutLook
  }

  export type IndustryInsightUpdatekeyTrendsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IndustryInsightUpdaterecommendedSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutIndustryInsightNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput> | UserCreateWithoutIndustryInsightInput[] | UserUncheckedCreateWithoutIndustryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightInput | UserCreateOrConnectWithoutIndustryInsightInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightInput | UserUpsertWithWhereUniqueWithoutIndustryInsightInput[]
    createMany?: UserCreateManyIndustryInsightInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightInput | UserUpdateWithWhereUniqueWithoutIndustryInsightInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightInput | UserUpdateManyWithWhereWithoutIndustryInsightInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightNestedInput = {
    create?: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput> | UserCreateWithoutIndustryInsightInput[] | UserUncheckedCreateWithoutIndustryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutIndustryInsightInput | UserCreateOrConnectWithoutIndustryInsightInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutIndustryInsightInput | UserUpsertWithWhereUniqueWithoutIndustryInsightInput[]
    createMany?: UserCreateManyIndustryInsightInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutIndustryInsightInput | UserUpdateWithWhereUniqueWithoutIndustryInsightInput[]
    updateMany?: UserUpdateManyWithWhereWithoutIndustryInsightInput | UserUpdateManyWithWhereWithoutIndustryInsightInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AssessmentsCreatequestionsInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutAssessmentsInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AssessmentsUpdatequestionsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type UserUpdateOneRequiredWithoutAssessmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentsInput
    upsert?: UserUpsertWithoutAssessmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssessmentsInput, UserUpdateWithoutAssessmentsInput>, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserCreateNestedOneWithoutResumeInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutResumeNestedInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    upsert?: UserUpsertWithoutResumeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeInput, UserUpdateWithoutResumeInput>, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserCreateNestedOneWithoutCoverLetterInput = {
    create?: XOR<UserCreateWithoutCoverLetterInput, UserUncheckedCreateWithoutCoverLetterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLetterInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoverLetterNestedInput = {
    create?: XOR<UserCreateWithoutCoverLetterInput, UserUncheckedCreateWithoutCoverLetterInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLetterInput
    upsert?: UserUpsertWithoutCoverLetterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoverLetterInput, UserUpdateWithoutCoverLetterInput>, UserUncheckedUpdateWithoutCoverLetterInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDemandLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelFilter<$PrismaModel> | $Enums.DemandLevel
  }

  export type NestedEnumMarketOutLookFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutLook | EnumMarketOutLookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutLookFilter<$PrismaModel> | $Enums.MarketOutLook
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandLevel | EnumDemandLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandLevel[] | ListEnumDemandLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandLevelWithAggregatesFilter<$PrismaModel> | $Enums.DemandLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandLevelFilter<$PrismaModel>
    _max?: NestedEnumDemandLevelFilter<$PrismaModel>
  }

  export type NestedEnumMarketOutLookWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketOutLook | EnumMarketOutLookFieldRefInput<$PrismaModel>
    in?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketOutLook[] | ListEnumMarketOutLookFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketOutLookWithAggregatesFilter<$PrismaModel> | $Enums.MarketOutLook
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketOutLookFilter<$PrismaModel>
    _max?: NestedEnumMarketOutLookFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IndustryInsightCreateWithoutUsersInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightUncheckedCreateWithoutUsersInput = {
    id?: string
    industry: string
    salaryRanges?: IndustryInsightCreatesalaryRangesInput | InputJsonValue[]
    growthRate: number
    demandlevel: $Enums.DemandLevel
    topSkills?: IndustryInsightCreatetopSkillsInput | string[]
    marketOutlook: $Enums.MarketOutLook
    keyTrends?: IndustryInsightCreatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightCreaterecommendedSkillsInput | string[]
    lastUpdated?: Date | string
    nextUpdate: Date | string
  }

  export type IndustryInsightCreateOrConnectWithoutUsersInput = {
    where: IndustryInsightWhereUniqueInput
    create: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
  }

  export type AssessmentsCreateWithoutUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentsUncheckedCreateWithoutUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentsCreateOrConnectWithoutUserInput = {
    where: AssessmentsWhereUniqueInput
    create: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput>
  }

  export type AssessmentsCreateManyUserInputEnvelope = {
    data: AssessmentsCreateManyUserInput | AssessmentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    content: string
    atsScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    atsScore?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterCreateWithoutUserInput = {
    id?: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterCreateOrConnectWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterCreateManyUserInputEnvelope = {
    data: CoverLetterCreateManyUserInput | CoverLetterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IndustryInsightUpsertWithoutUsersInput = {
    update: XOR<IndustryInsightUpdateWithoutUsersInput, IndustryInsightUncheckedUpdateWithoutUsersInput>
    create: XOR<IndustryInsightCreateWithoutUsersInput, IndustryInsightUncheckedCreateWithoutUsersInput>
    where?: IndustryInsightWhereInput
  }

  export type IndustryInsightUpdateToOneWithWhereWithoutUsersInput = {
    where?: IndustryInsightWhereInput
    data: XOR<IndustryInsightUpdateWithoutUsersInput, IndustryInsightUncheckedUpdateWithoutUsersInput>
  }

  export type IndustryInsightUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryInsightUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    salaryRanges?: IndustryInsightUpdatesalaryRangesInput | InputJsonValue[]
    growthRate?: FloatFieldUpdateOperationsInput | number
    demandlevel?: EnumDemandLevelFieldUpdateOperationsInput | $Enums.DemandLevel
    topSkills?: IndustryInsightUpdatetopSkillsInput | string[]
    marketOutlook?: EnumMarketOutLookFieldUpdateOperationsInput | $Enums.MarketOutLook
    keyTrends?: IndustryInsightUpdatekeyTrendsInput | string[]
    recommendedSkills?: IndustryInsightUpdaterecommendedSkillsInput | string[]
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    nextUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentsWhereUniqueInput
    update: XOR<AssessmentsUpdateWithoutUserInput, AssessmentsUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentsCreateWithoutUserInput, AssessmentsUncheckedCreateWithoutUserInput>
  }

  export type AssessmentsUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentsWhereUniqueInput
    data: XOR<AssessmentsUpdateWithoutUserInput, AssessmentsUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentsUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentsScalarWhereInput
    data: XOR<AssessmentsUpdateManyMutationInput, AssessmentsUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentsScalarWhereInput = {
    AND?: AssessmentsScalarWhereInput | AssessmentsScalarWhereInput[]
    OR?: AssessmentsScalarWhereInput[]
    NOT?: AssessmentsScalarWhereInput | AssessmentsScalarWhereInput[]
    id?: StringFilter<"Assessments"> | string
    userId?: StringFilter<"Assessments"> | string
    quizScore?: FloatFilter<"Assessments"> | number
    questions?: JsonNullableListFilter<"Assessments">
    category?: StringFilter<"Assessments"> | string
    improvementTip?: StringNullableFilter<"Assessments"> | string | null
    createdAt?: DateTimeFilter<"Assessments"> | Date | string
    updatedAt?: DateTimeFilter<"Assessments"> | Date | string
  }

  export type ResumeUpsertWithoutUserInput = {
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutUserInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUpsertWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    update: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterUpdateWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    data: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUpdateManyWithWhereWithoutUserInput = {
    where: CoverLetterScalarWhereInput
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyWithoutUserInput>
  }

  export type CoverLetterScalarWhereInput = {
    AND?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    OR?: CoverLetterScalarWhereInput[]
    NOT?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    userId?: StringFilter<"CoverLetter"> | string
    content?: StringFilter<"CoverLetter"> | string
    jobDescription?: StringNullableFilter<"CoverLetter"> | string | null
    companyName?: StringFilter<"CoverLetter"> | string
    jobTitle?: StringFilter<"CoverLetter"> | string
    createdAt?: DateTimeFilter<"CoverLetter"> | Date | string
    updatedAt?: DateTimeFilter<"CoverLetter"> | Date | string
  }

  export type UserCreateWithoutIndustryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentsCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndustryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentsUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIndustryInsightInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput>
  }

  export type UserCreateManyIndustryInsightInputEnvelope = {
    data: UserCreateManyIndustryInsightInput | UserCreateManyIndustryInsightInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutIndustryInsightInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutIndustryInsightInput, UserUncheckedUpdateWithoutIndustryInsightInput>
    create: XOR<UserCreateWithoutIndustryInsightInput, UserUncheckedCreateWithoutIndustryInsightInput>
  }

  export type UserUpdateWithWhereUniqueWithoutIndustryInsightInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutIndustryInsightInput, UserUncheckedUpdateWithoutIndustryInsightInput>
  }

  export type UserUpdateManyWithWhereWithoutIndustryInsightInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutIndustryInsightInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    experience?: IntNullableFilter<"User"> | number | null
    skills?: StringNullableListFilter<"User">
  }

  export type UserCreateWithoutAssessmentsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsight?: IndustryInsightCreateNestedOneWithoutUsersInput
    resume?: ResumeCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssessmentsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssessmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
  }

  export type UserUpsertWithoutAssessmentsInput = {
    update: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
    create: XOR<UserCreateWithoutAssessmentsInput, UserUncheckedCreateWithoutAssessmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssessmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssessmentsInput, UserUncheckedUpdateWithoutAssessmentsInput>
  }

  export type UserUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsight?: IndustryInsightUpdateOneWithoutUsersNestedInput
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResumeInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsight?: IndustryInsightCreateNestedOneWithoutUsersInput
    assessments?: AssessmentsCreateNestedManyWithoutUserInput
    coverLetter?: CoverLetterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumeInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentsUncheckedCreateNestedManyWithoutUserInput
    coverLetter?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
  }

  export type UserUpsertWithoutResumeInput = {
    update: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsight?: IndustryInsightUpdateOneWithoutUsersNestedInput
    assessments?: AssessmentsUpdateManyWithoutUserNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentsUncheckedUpdateManyWithoutUserNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCoverLetterInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    industryInsight?: IndustryInsightCreateNestedOneWithoutUsersInput
    assessments?: AssessmentsCreateNestedManyWithoutUserInput
    resume?: ResumeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoverLetterInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    industry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
    assessments?: AssessmentsUncheckedCreateNestedManyWithoutUserInput
    resume?: ResumeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoverLetterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoverLetterInput, UserUncheckedCreateWithoutCoverLetterInput>
  }

  export type UserUpsertWithoutCoverLetterInput = {
    update: XOR<UserUpdateWithoutCoverLetterInput, UserUncheckedUpdateWithoutCoverLetterInput>
    create: XOR<UserCreateWithoutCoverLetterInput, UserUncheckedCreateWithoutCoverLetterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoverLetterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoverLetterInput, UserUncheckedUpdateWithoutCoverLetterInput>
  }

  export type UserUpdateWithoutCoverLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    industryInsight?: IndustryInsightUpdateOneWithoutUsersNestedInput
    assessments?: AssessmentsUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoverLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentsUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AssessmentsCreateManyUserInput = {
    id?: string
    quizScore: number
    questions?: AssessmentsCreatequestionsInput | InputJsonValue[]
    category: string
    improvementTip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoverLetterCreateManyUserInput = {
    id?: string
    content: string
    jobDescription?: string | null
    companyName: string
    jobTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizScore?: FloatFieldUpdateOperationsInput | number
    questions?: AssessmentsUpdatequestionsInput | InputJsonValue[]
    category?: StringFieldUpdateOperationsInput | string
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyIndustryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bio?: string | null
    experience?: number | null
    skills?: UserCreateskillsInput | string[]
  }

  export type UserUpdateWithoutIndustryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentsUpdateManyWithoutUserNestedInput
    resume?: ResumeUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndustryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
    assessments?: AssessmentsUncheckedUpdateManyWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateOneWithoutUserNestedInput
    coverLetter?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutIndustryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    skills?: UserUpdateskillsInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}