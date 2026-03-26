<script setup lang="ts">
import { popularSoundTags, soundItems, uploadSteps } from "~/data/site";
import { localizeSoundItem, localizedPopularSoundTags } from "~/data/localized-content";

const route = useRoute();
const item = soundItems.find((entry) => entry.slug === route.params.slug);
const { locale, copy } = useSiteLocale();

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Sound Not Found"
  });
}

const localizedItem = computed(() => localizeSoundItem(item, locale.value));

useSeoMeta(() => ({
  title: localizedItem.value.title,
  description: localizedItem.value.summary
}));

const relatedSounds = computed(() => {
  return soundItems
    .filter((entry) => entry.slug !== item.slug)
    .map((entry) => {
      const sharedTags = entry.tags.filter((tag) => item.tags.includes(tag)).length;
      const sameAnimal = entry.animal === item.animal ? 2 : 0;
      const sameCategory = entry.category === item.category ? 3 : 0;
      const score = sharedTags * 4 + sameAnimal + sameCategory;

      return { entry: localizeSoundItem(entry, locale.value), score };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, 4)
    .map(({ entry }) => entry);
});

const itemIndex = soundItems.findIndex((entry) => entry.slug === item.slug);
const previousItem = computed(() => localizeSoundItem(soundItems[(itemIndex - 1 + soundItems.length) % soundItems.length], locale.value));
const nextItem = computed(() => localizeSoundItem(soundItems[(itemIndex + 1) % soundItems.length], locale.value));
const localizedPopularTags = computed(() => (locale.value === "zh" ? popularSoundTags : localizedPopularSoundTags.en));
</script>

<template>
  <article class="mx-auto max-w-4xl space-y-5 sm:space-y-8">
    <NuxtLink to="/sounds" class="inline-flex rounded-full border border-pine/15 bg-white px-4 py-2 text-sm font-semibold text-pine">
      {{ copy.common.backToSounds }}
    </NuxtLink>
    <section class="rounded-[2rem] bg-white p-5 shadow-float sm:p-8">
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">
        <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">{{ localizedItem.category }}</span>
        <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">{{ localizedItem.animal }}</span>
        <span class="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-pine">{{ localizedItem.mood }}</span>
        <span class="rounded-full border border-pine/10 px-3 py-1 text-xs font-semibold text-ink/60">{{ localizedItem.duration }}</span>
      </div>
      <h1 class="mt-4 text-3xl font-semibold tracking-tight text-pine sm:mt-5 sm:text-4xl">{{ localizedItem.title }}</h1>
      <p class="mt-3 text-base leading-7 text-ink/70 sm:mt-4 sm:text-lg sm:leading-8">{{ localizedItem.summary }}</p>
      <div class="mt-4 flex flex-wrap gap-2 sm:mt-5">
        <span
          v-for="tag in localizedItem.tags.slice(0, 4)"
          :key="tag"
          class="rounded-full border border-pine/10 bg-white px-3 py-1 text-xs text-ink/60"
        >
          {{ tag }}
        </span>
      </div>
      <div class="mt-5 rounded-[1.5rem] bg-sand/70 p-4 sm:mt-8 sm:p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.soundDetail.player }}</p>
        <div class="mt-4">
          <AudioPlayer :src="localizedItem.audio" :title="localizedItem.title" :duration="localizedItem.duration" />
        </div>
      </div>
    </section>
    <section class="grid gap-4 md:grid-cols-2 md:gap-6">
      <div class="rounded-[2rem] bg-white p-5 shadow-float sm:p-6">
        <h2 class="text-xl font-semibold text-pine">{{ copy.common.useCase }}</h2>
        <p class="mt-3 text-sm leading-7 text-ink/70">{{ localizedItem.useCase }}</p>
      </div>
      <div class="rounded-[2rem] bg-white p-5 shadow-float sm:p-6">
        <h2 class="text-xl font-semibold text-pine">{{ copy.common.caution }}</h2>
        <p class="mt-3 text-sm leading-7 text-ink/70">{{ localizedItem.caution }}</p>
      </div>
    </section>
    <section class="grid gap-4 md:grid-cols-2 md:gap-6">
      <NuxtLink :to="`/sounds/${previousItem.slug}`" class="rounded-[2rem] bg-white p-5 shadow-float transition hover:-translate-y-1 sm:p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.previous }}</p>
        <p class="mt-3 text-xl font-semibold text-pine sm:text-2xl">{{ previousItem.title }}</p>
        <p class="mt-2 line-clamp-3 text-sm leading-7 text-ink/65">{{ previousItem.summary }}</p>
      </NuxtLink>
      <NuxtLink :to="`/sounds/${nextItem.slug}`" class="rounded-[2rem] bg-white p-5 shadow-float transition hover:-translate-y-1 sm:p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.next }}</p>
        <p class="mt-3 text-xl font-semibold text-pine sm:text-2xl">{{ nextItem.title }}</p>
        <p class="mt-2 line-clamp-3 text-sm leading-7 text-ink/65">{{ nextItem.summary }}</p>
      </NuxtLink>
    </section>
    <section class="rounded-[2rem] bg-white p-5 shadow-float sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-pine sm:text-2xl">{{ copy.soundDetail.popularTags }}</h2>
          <p class="mt-1 text-sm leading-7 text-ink/65">{{ copy.soundDetail.popularTagsDescription }}</p>
        </div>
        <NuxtLink to="/sounds" class="text-sm font-semibold text-coral">{{ copy.soundDetail.backToLibrary }}</NuxtLink>
      </div>
      <div class="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
        <span
          v-for="tag in localizedPopularTags.slice(0, 6)"
          :key="tag"
          class="rounded-full border border-pine/10 bg-sand/45 px-3 py-1.5 text-sm text-ink/70 sm:px-4 sm:py-2"
        >
          {{ tag }}
        </span>
      </div>
    </section>
    <section class="rounded-[2rem] bg-white p-5 shadow-float sm:p-8">
      <h2 class="hidden text-2xl font-semibold text-pine sm:block">{{ copy.soundDetail.uploadTitle }}</h2>
      <ul class="mt-5 hidden grid gap-4 sm:grid">
        <li
          v-for="step in uploadSteps"
          :key="step"
          class="rounded-3xl border border-pine/10 bg-mint/35 px-5 py-4 text-sm leading-7 text-ink/75"
        >
          {{ step }}
        </li>
      </ul>
      <details class="sm:hidden">
        <summary class="cursor-pointer list-none text-sm font-semibold text-pine">
          {{ copy.soundDetail.uploadTitle }}
        </summary>
        <ul class="mt-4 grid gap-3">
          <li
            v-for="step in uploadSteps"
            :key="step"
            class="rounded-3xl border border-pine/10 bg-mint/35 px-4 py-3 text-sm leading-7 text-ink/75"
          >
            {{ step }}
          </li>
        </ul>
      </details>
    </section>
    <section class="space-y-4 sm:space-y-6">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-pine sm:text-2xl">{{ copy.soundDetail.relatedTitle }}</h2>
          <p class="mt-1 text-sm leading-7 text-ink/65">
            {{ copy.soundDetail.relatedDescription }}
          </p>
        </div>
        <NuxtLink to="/sounds" class="text-sm font-semibold text-coral">
          {{ copy.soundDetail.allSounds }}
        </NuxtLink>
      </div>
      <div class="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <SoundCard v-for="relatedItem in relatedSounds" :key="relatedItem.slug" :item="relatedItem" />
      </div>
    </section>
  </article>
</template>
