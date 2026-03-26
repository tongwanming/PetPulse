<script setup lang="ts">
defineProps<{
  item: {
    slug: string;
    title: string;
    summary: string;
    category: string;
    audience: string;
    readTime: string;
    intro?: string;
  };
  prefix: string;
}>();
</script>

<template>
  <article class="card-lift rounded-blob border border-pine/10 bg-white p-6 shadow-float">
    <div class="flex items-center justify-between gap-3">
      <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">{{ item.category }}</span>
      <span class="text-xs text-ink/50">{{ item.readTime }}</span>
    </div>
    <h3 class="mt-4 text-xl font-semibold text-pine">{{ item.title }}</h3>
    <p class="mt-3 text-sm leading-6 text-ink/70">{{ item.summary }}</p>
    <p v-if="item.intro" class="mt-3 text-sm leading-6 text-ink/60">
      {{ item.intro }}
    </p>
    <p class="mt-4 text-sm text-ink/60">适合人群：{{ item.audience }}</p>
    <NuxtLink :to="`${prefix}/${item.slug}`" class="mt-5 inline-flex rounded-full border border-pine/15 px-4 py-2 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white">
      阅读详情
    </NuxtLink>
  </article>
</template>
