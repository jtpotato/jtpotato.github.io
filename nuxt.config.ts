// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  content: {
    markdown: {
      mdc: true,
      rehypePlugins: {
        "rehype-external-links": {
          options: {
            target: "_blank",
          },
        },
      },
    },
  },

  components: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/fonts", "@nuxt/content"],
});
