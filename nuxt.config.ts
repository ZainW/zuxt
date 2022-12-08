// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
    NUXT_SECRET: process.env.NUXT_SECRET,
  },
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: false,
  },
  modules: [
    '@unocss/nuxt',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
  },
})
