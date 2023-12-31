// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  css: ['normalize.css'],

  nitro: {
    preset: 'aws-lambda',
    serveStatic: false
  },

})
