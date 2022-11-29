// file: ~/server/api/auth/[...].ts
import discordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import { prisma } from '~~/lib/prisma'
const config = useRuntimeConfig()

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    discordProvider.default({ clientId: config.discordClientId, clientSecret: config.discordClientSecret }),
  ],
  secret: config.NUXT_SECRET,
})
