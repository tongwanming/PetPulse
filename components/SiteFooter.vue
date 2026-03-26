<script setup lang="ts">
const { copy } = useSiteLocale();
</script>

<template>
  <footer class="relative z-10 border-t border-pine/10">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-ink/70 sm:px-8 md:flex-row md:items-start md:justify-between">
      <div class="max-w-md">
        <p class="font-semibold text-pine">PetChat</p>
        <p>{{ copy.footer.description }}</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <NuxtLink to="/about" class="hover:text-pine">{{ copy.nav.about }}</NuxtLink>
        <NuxtLink to="/guides" class="hover:text-pine">{{ copy.nav.guides }}</NuxtLink>
        <NuxtLink to="/sounds" class="hover:text-pine">{{ copy.nav.sounds }}</NuxtLink>
        <NuxtLink to="/training" class="hover:text-pine">{{ copy.nav.training }}</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-pine">{{ copy.footer.contact }}</NuxtLink>
        <NuxtLink to="/disclaimer" class="hover:text-pine">{{ copy.footer.disclaimer }}</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-pine">{{ copy.footer.privacy }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>
