<script setup lang="ts">
import { localeOptions } from "~/data/i18n";

const route = useRoute();
const { locale, copy, setLocale } = useSiteLocale();
const mobileMenuOpen = ref(false);

const navigation = computed(() => [
  { label: copy.value.nav.home, to: "/" },
  { label: copy.value.nav.sounds, to: "/sounds" },
  { label: copy.value.nav.training, to: "/training" },
  { label: copy.value.nav.guides, to: "/guides" },
  { label: copy.value.nav.stages, to: "/stages" },
  { label: copy.value.nav.about, to: "/about" }
]);

const isActive = (path: string) => route.path === path || (path !== "/" && route.path.startsWith(`${path}/`));

const mobileMenuLabel = computed(() => (locale.value === "zh" ? "菜单" : "Menu"));

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  }
);
</script>

<template>
  <header class="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8">
    <div class="rounded-[2rem] border border-white/70 bg-white/80 px-5 py-4 shadow-float backdrop-blur">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-full bg-coral text-xl text-white">P</span>
          <span>
            <span class="block text-lg font-semibold tracking-tight text-pine">PetChat</span>
            <span class="block text-xs text-ink/60">{{ copy.brandSubtitle }}</span>
          </span>
        </NuxtLink>
        <div class="hidden items-center gap-3 md:flex">
          <nav class="flex items-center gap-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="rounded-full px-4 py-2 text-sm transition hover:bg-pine hover:text-white"
              :class="isActive(item.to) ? 'bg-pine text-white' : 'text-ink/70'"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
          <div class="flex items-center rounded-full bg-sand/80 p-1">
            <button
              v-for="option in localeOptions"
              :key="option.value"
              type="button"
              class="rounded-full px-3 py-1.5 text-xs font-semibold transition"
              :class="locale === option.value ? 'bg-pine text-white' : 'text-ink/65 hover:text-pine'"
              @click="setLocale(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4 md:hidden">
        <div class="flex items-center justify-between gap-3">
          <div class="flex shrink-0 items-center rounded-full bg-sand/80 p-1">
            <button
              v-for="option in localeOptions"
              :key="`mobile-${option.value}`"
              type="button"
              class="rounded-full px-3 py-1.5 text-xs font-semibold transition"
              :class="locale === option.value ? 'bg-pine text-white' : 'text-ink/65 hover:text-pine'"
              @click="setLocale(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-pine/10 bg-sand/70 px-4 py-2 text-sm font-semibold text-pine"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span>{{ mobileMenuLabel }}</span>
            <span class="text-xs">{{ mobileMenuOpen ? "−" : "+" }}</span>
          </button>
        </div>
        <nav v-if="mobileMenuOpen" class="mt-4 grid gap-2">
          <NuxtLink
            v-for="item in navigation"
            :key="`${item.to}-mobile`"
            :to="item.to"
            class="rounded-2xl px-4 py-3 text-sm font-semibold transition"
            :class="isActive(item.to) ? 'bg-pine text-white' : 'bg-sand text-ink/70'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
