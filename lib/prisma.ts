import { PrismaClient } from "@prisma/client"
import { useSSRContext } from "nuxt/dist/app/compat/capi"


declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = globalThis.prisma || new PrismaClient({
    log:
      process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

