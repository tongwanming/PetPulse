<script setup lang="ts">
const { copy } = useSiteLocale();

const props = defineProps<{
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

const activeVariantIndex = ref(0);
const activeVariant = computed(() => props.item.variants[activeVariantIndex.value] ?? props.item.variants[0]);
</script>

<template>
  <article class="card-lift rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float sm:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-coral">Training</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-pine sm:text-2xl">{{ item.command }}</h3>
      </div>
      <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">
        {{ item.variants.length }} {{ copy.common.voices }}
      </span>
    </div>
    <p class="mt-4 line-clamp-3 text-sm leading-7 text-ink/70">{{ item.summary }}</p>
    <p class="mt-4 hidden text-sm leading-7 text-ink/60 sm:block">{{ copy.common.trainingGoal }}: {{ item.goal }}</p>
    <div class="mt-4 hidden flex-wrap gap-2 sm:flex">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="rounded-full border border-pine/10 px-3 py-1 text-xs text-ink/60"
      >
        {{ tag }}
      </span>
    </div>
    <div class="mt-4 flex flex-wrap gap-2 sm:hidden">
      <button
        v-for="(variant, index) in item.variants"
        :key="variant.voice"
        type="button"
        class="rounded-full px-3 py-2 text-xs font-semibold transition"
        :class="activeVariantIndex === index ? 'bg-pine text-white' : 'bg-sand text-ink/70'"
        @click="activeVariantIndex = index"
      >
        {{ variant.voice }}
      </button>
    </div>
    <div class="mt-4 sm:hidden">
      <AudioPlayer
        :src="activeVariant.audio"
        :title="`${item.command} · ${activeVariant.voice}`"
        compact
      />
    </div>
    <div class="mt-5 hidden grid gap-3 sm:grid">
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
      {{ copy.common.viewTrainingPage }}
    </NuxtLink>
  </article>
</template>
