import { prisma } from '~~/lib/prisma'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      prisma,
    },
  }
})
