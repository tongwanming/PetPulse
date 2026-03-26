<script setup lang="ts">
const { copy } = useSiteLocale();
const { public: { appStoreUrl } } = useRuntimeConfig();
</script>

<template>
  <div class="min-h-screen bg-cream text-ink">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute left-[-4rem] top-[-3rem] h-64 w-64 rounded-full bg-peach/50 blur-3xl" />
      <div class="absolute right-[-5rem] top-28 h-72 w-72 rounded-full bg-mint/50 blur-3xl" />
      <div class="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-coral/15 blur-3xl" />
    </div>
    <SiteHeader />
    <main class="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-8 sm:px-8 sm:pb-20">
      <slot />
    </main>
    <SiteFooter />
    <a
      :href="appStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed inset-x-4 bottom-4 z-20 flex items-center justify-between rounded-[1.6rem] bg-pine px-5 py-4 text-white shadow-[0_18px_45px_rgba(38,61,51,0.28)] md:hidden"
    >
      <div class="min-w-0">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{{ copy.nav.appCta }}</p>
        <p class="truncate text-sm font-semibold">{{ copy.home.appHint }}</p>
      </div>
      <span class="ml-4 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white">{{ copy.home.appCta }}</span>
    </a>
  </div>
</template>
