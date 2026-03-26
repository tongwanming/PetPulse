<script setup lang="ts">
import { getLocalizedText, getTrainingVoiceLabel, trainingItems } from "~/data/site";

const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: locale.value === "zh" ? "训练口令音频" : "Training Command Audio",
  description:
    locale.value === "zh"
      ? "查看常用宠物训练口令音频，包括过来、坐下、趴下、安静、握手等多种声音版本。"
      : "Browse common pet training command audio, including come, sit, down, quiet, shake, and more."
}));

const searchQuery = ref("");
const voiceCount = 3;

const localizedTrainingItems = computed(() =>
  trainingItems.map((item) => ({
    slug: item.slug,
    command: getLocalizedText(item.command, locale.value),
    summary: getLocalizedText(item.summary, locale.value),
    goal: getLocalizedText(item.goal, locale.value),
    tags: item.tags.map((tag) => getLocalizedText(tag, locale.value)),
    variants: item.variants.map((variant) => ({
      voice: getTrainingVoiceLabel(variant.voice, locale.value),
      audio: variant.audio[locale.value]
    }))
  }))
);

const filteredTrainingItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return localizedTrainingItems.value;

  return localizedTrainingItems.value.filter((item) => {
    const haystack = [item.command, item.summary, item.goal, ...item.tags].join(" ").toLowerCase();
    return haystack.includes(query);
  });
});
</script>

<template>
  <section class="space-y-10">
    <SectionHeading
      :eyebrow="copy.trainingIndex.eyebrow"
      :title="copy.trainingIndex.title"
      :description="copy.trainingIndex.description"
    />

    <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.trainingIndex.searchTitle }}</p>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="copy.trainingIndex.searchPlaceholder"
          class="mt-5 w-full rounded-full border border-pine/10 bg-sand/45 px-5 py-3 text-sm text-ink outline-none placeholder:text-ink/35"
        >
        <p class="mt-4 text-sm leading-7 text-ink/65">
          {{ copy.trainingIndex.searchSummary(filteredTrainingItems.length, voiceCount) }}
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">{{ trainingItems.length }}</p>
          <p class="mt-2 text-sm text-ink/60">{{ copy.common.training }}</p>
        </div>
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">{{ voiceCount }}</p>
          <p class="mt-2 text-sm text-ink/60">{{ copy.common.voices }}</p>
        </div>
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">{{ trainingItems.length * voiceCount * 2 }}</p>
          <p class="mt-2 text-sm text-ink/60">{{ copy.common.totalAudio }}</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <TrainingCard v-for="item in filteredTrainingItems" :key="item.slug" :item="item" />
    </div>
  </section>
</template>
