<template>
  <div class="min-h-screen bg-cream text-ink">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute left-[-4rem] top-[-3rem] h-64 w-64 rounded-full bg-peach/50 blur-3xl" />
      <div class="absolute right-[-5rem] top-28 h-72 w-72 rounded-full bg-mint/50 blur-3xl" />
      <div class="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-coral/15 blur-3xl" />
    </div>
    <SiteHeader />
    <main class="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-8 sm:px-8">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
