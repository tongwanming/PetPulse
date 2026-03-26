<script setup lang="ts">
const { copy } = useSiteLocale();

defineProps<{
  item: {
    slug: string;
    title: string;
    animal: string;
    category: string;
    summary: string;
    useCase: string;
    caution: string;
    audio?: string;
    duration: string;
    mood: string;
    tags: string[];
  };
}>();
</script>

<template>
  <article class="card-lift rounded-blob border border-pine/10 bg-white p-6 shadow-float">
    <div class="mb-4 flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">{{ item.category }}</p>
        <h3 class="mt-2 text-xl font-semibold text-pine">{{ item.title }}</h3>
      </div>
      <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">{{ item.animal }}</span>
    </div>
    <div class="mb-4 flex flex-wrap gap-2">
      <span class="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink/70">{{ item.mood }}</span>
      <span class="rounded-full bg-peach/40 px-3 py-1 text-xs font-medium text-ink/70">{{ item.duration }}</span>
    </div>
    <p class="text-sm leading-6 text-ink/70">{{ item.summary }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="rounded-full border border-pine/10 px-3 py-1 text-xs text-ink/60"
      >
        {{ tag }}
      </span>
    </div>
    <div class="mt-5 space-y-2 rounded-3xl bg-sand/55 p-4 text-sm text-ink/80">
      <p><span class="font-semibold text-pine">{{ copy.common.useCase }}:</span>{{ item.useCase }}</p>
      <p><span class="font-semibold text-pine">{{ copy.common.caution }}:</span>{{ item.caution }}</p>
    </div>
    <div class="mt-5">
      <AudioPlayer :src="item.audio" :title="item.title" :duration="item.duration" compact />
    </div>
    <div class="mt-5 flex items-center justify-between gap-3">
      <NuxtLink :to="`/sounds/${item.slug}`" class="rounded-full bg-pine px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral">
        {{ copy.common.details }}
      </NuxtLink>
      <span class="text-xs text-ink/50">{{ item.audio ? copy.common.playable : copy.common.waitingAudio }}</span>
    </div>
  </article>
</template>
