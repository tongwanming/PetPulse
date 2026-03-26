<script setup lang="ts">
const route = useRoute();

const navigation = [
  { label: "首页", to: "/" },
  { label: "宠物叫声", to: "/sounds" },
  { label: "训练口令", to: "/training" },
  { label: "养宠常识", to: "/guides" },
  { label: "成长阶段", to: "/stages" },
  { label: "关于", to: "/about" }
];
</script>

<template>
  <header class="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8">
    <div class="rounded-[2rem] border border-white/70 bg-white/80 px-5 py-4 shadow-float backdrop-blur">
      <div class="flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-full bg-coral text-xl text-white">P</span>
          <span>
            <span class="block text-lg font-semibold tracking-tight text-pine">PetPulse</span>
            <span class="block text-xs text-ink/60">猫狗叫声与养宠知识站</span>
          </span>
        </NuxtLink>
        <nav class="hidden items-center gap-2 md:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-4 py-2 text-sm transition hover:bg-pine hover:text-white"
            :class="route.path === item.to ? 'bg-pine text-white' : 'text-ink/70'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
      <nav class="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
        <NuxtLink
          v-for="item in navigation"
          :key="`${item.to}-mobile`"
          :to="item.to"
          class="shrink-0 rounded-full px-4 py-2 text-sm transition hover:bg-pine hover:text-white"
          :class="route.path === item.to ? 'bg-pine text-white' : 'bg-sand text-ink/70'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
