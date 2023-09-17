// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
  },
  modules: ['@nuxt/ui'],
  ui: {
    icons: 'all',
    safelistColors: ['primary', 'green', 'red'],
  },
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false,
  },
})
