export default defineNuxtConfig({
  compatibilityDate: "2026-03-26",
  ssr: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      titleTemplate: "%s | PetPulse",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "PetPulse 提供猫狗叫声、逗宠声音、养宠常识、成长阶段知识与注意事项。"
        }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteName: "PetPulse",
      siteUrl: "https://example.com"
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  routeRules: {
    "/**": { prerender: true }
  }
});
