<script setup lang="ts">
defineProps<{
  item: {
    slug: string;
    command: string;
    summary: string;
    goal: string;
    tags: string[];
    variants: {
      voice: string;
      audio: string;
    }[];
  };
}>();
</script>

<template>
  <article class="card-lift rounded-[2rem] border border-pine/10 bg-white p-6 shadow-float">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Training</p>
        <h3 class="mt-2 text-2xl font-semibold tracking-tight text-pine">{{ item.command }}</h3>
      </div>
      <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">
        {{ item.variants.length }} 种声音
      </span>
    </div>
    <p class="mt-4 text-sm leading-7 text-ink/70">{{ item.summary }}</p>
    <p class="mt-4 text-sm leading-7 text-ink/60">训练目标：{{ item.goal }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="rounded-full border border-pine/10 px-3 py-1 text-xs text-ink/60"
      >
        {{ tag }}
      </span>
    </div>
    <div class="mt-5 grid gap-3">
      <div
        v-for="variant in item.variants"
        :key="variant.voice"
        class="rounded-[1.5rem] bg-sand/55 p-4"
      >
        <div class="mb-3 flex items-center justify-between gap-3">
          <p class="text-sm font-semibold text-pine">{{ variant.voice }}</p>
        </div>
        <AudioPlayer :src="variant.audio" :title="`${item.command} · ${variant.voice}`" compact />
      </div>
    </div>
    <NuxtLink
      :to="`/training/${item.slug}`"
      class="mt-5 inline-flex rounded-full bg-pine px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral"
    >
      查看训练页
    </NuxtLink>
  </article>
</template>
