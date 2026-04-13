export default defineNuxtConfig({
  compatibilityDate: "2026-03-26",
  ssr: true,
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      titleTemplate: "%s | PetChat",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "PetChat 提供猫狗叫声、逗宠声音、养宠常识、成长阶段知识与注意事项。"
        }
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteName: "PetChat",
      siteUrl: "https://pet-pulse.lovecqming.workers.dev",
      appStoreUrl: "https://apps.apple.com/us/app/pet-chat-cat-dog-translator/id6755099390"
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    },

    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  routeRules: {
    "/**": { prerender: true }
  }
});