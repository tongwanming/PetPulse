<script setup lang="ts">
import { getLocalizedText, getTrainingVoiceLabel, trainingItems } from "~/data/site";

const route = useRoute();
const item = trainingItems.find((entry) => entry.slug === route.params.slug);
const { locale, copy } = useSiteLocale();

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Training Not Found"
  });
}

const itemIndex = trainingItems.findIndex((entry) => entry.slug === item.slug);
const previousItem = computed(() => trainingItems[(itemIndex - 1 + trainingItems.length) % trainingItems.length]);
const nextItem = computed(() => trainingItems[(itemIndex + 1) % trainingItems.length]);

const localizedItem = computed(() => ({
  command: getLocalizedText(item.command, locale.value),
  summary: getLocalizedText(item.summary, locale.value),
  goal: getLocalizedText(item.goal, locale.value),
  tips: item.tips.map((tip) => getLocalizedText(tip, locale.value)),
  tags: item.tags.map((tag) => getLocalizedText(tag, locale.value)),
  variants: item.variants.map((variant) => ({
    voice: getTrainingVoiceLabel(variant.voice, locale.value),
    audio: variant.audio[locale.value]
  }))
}));

const localizedPreviousItem = computed(() => ({
  slug: previousItem.value.slug,
  command: getLocalizedText(previousItem.value.command, locale.value),
  summary: getLocalizedText(previousItem.value.summary, locale.value)
}));

const localizedNextItem = computed(() => ({
  slug: nextItem.value.slug,
  command: getLocalizedText(nextItem.value.command, locale.value),
  summary: getLocalizedText(nextItem.value.summary, locale.value)
}));

useSeoMeta(() => ({
  title:
    locale.value === "zh"
      ? `${localizedItem.value.command} 训练口令`
      : `${localizedItem.value.command} Training Command`,
  description: localizedItem.value.summary
}));
</script>

<template>
  <article class="mx-auto max-w-5xl space-y-8">
    <NuxtLink to="/training" class="inline-flex rounded-full border border-pine/15 bg-white px-4 py-2 text-sm font-semibold text-pine">
      {{ copy.common.backToTraining }}
    </NuxtLink>

    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">{{ copy.common.training }}</span>
        <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">{{ localizedItem.variants.length }} {{ copy.common.voices }}</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold tracking-tight text-pine">{{ localizedItem.command }}</h1>
      <p class="mt-4 text-lg leading-8 text-ink/70">{{ localizedItem.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in localizedItem.tags"
          :key="tag"
          class="rounded-full border border-pine/10 px-3 py-1 text-xs text-ink/60"
        >
          {{ tag }}
        </span>
      </div>
      <div class="mt-8 rounded-[1.5rem] bg-sand/70 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.trainingGoal }}</p>
        <p class="mt-3 text-sm leading-7 text-ink/75">{{ localizedItem.goal }}</p>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <div
        v-for="variant in localizedItem.variants"
        :key="variant.voice"
        class="rounded-[2rem] bg-white p-6 shadow-float"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ variant.voice }}</p>
        <h2 class="mt-2 text-xl font-semibold text-pine">{{ localizedItem.command }}</h2>
        <div class="mt-5">
          <AudioPlayer :src="variant.audio" :title="`${localizedItem.command} · ${variant.voice}`" />
        </div>
      </div>
    </section>

    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <h2 class="text-2xl font-semibold text-pine">{{ copy.common.trainingTips }}</h2>
      <ul class="mt-5 grid gap-4">
        <li
          v-for="tip in localizedItem.tips"
          :key="tip"
          class="rounded-3xl border border-pine/10 bg-mint/35 px-5 py-4 text-sm leading-7 text-ink/75"
        >
          {{ tip }}
        </li>
      </ul>
    </section>

    <section class="grid gap-6 md:grid-cols-2">
      <NuxtLink :to="`/training/${previousItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.previous }}</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ localizedPreviousItem.command }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ localizedPreviousItem.summary }}</p>
      </NuxtLink>
      <NuxtLink :to="`/training/${nextItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.next }}</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ localizedNextItem.command }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ localizedNextItem.summary }}</p>
      </NuxtLink>
    </section>
  </article>
</template>
