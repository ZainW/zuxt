// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    analyze: true,
  },
  runtimeConfig: {
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
    NUXT_SECRET: process.env.NUXT_SECRET
  },
  modules: [
    '@unocss/nuxt',
    '@sidebase/nuxt-auth'
  ],
  unocss: {
    uno: true,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  }
})
