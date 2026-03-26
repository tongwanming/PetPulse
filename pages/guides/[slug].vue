<script setup lang="ts">
import { guideItems } from "~/data/site";
import { localizeGuideItem } from "~/data/localized-content";

const route = useRoute();
const item = guideItems.find((entry) => entry.slug === route.params.slug);
const { locale, copy } = useSiteLocale();

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Guide Not Found"
  });
}

const localizedItem = computed(() => localizeGuideItem(item, locale.value));

useSeoMeta(() => ({
  title: localizedItem.value.title,
  description: localizedItem.value.summary
}));
</script>

<template>
  <article class="mx-auto max-w-4xl space-y-8">
    <NuxtLink to="/guides" class="inline-flex rounded-full border border-pine/15 bg-white px-4 py-2 text-sm font-semibold text-pine">
      {{ copy.common.backToGuides }}
    </NuxtLink>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">{{ localizedItem.category }}</span>
        <span class="text-sm text-ink/50">{{ localizedItem.readTime }}</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold tracking-tight text-pine">{{ localizedItem.title }}</h1>
      <p class="mt-4 text-lg leading-8 text-ink/70">{{ localizedItem.summary }}</p>
      <div class="mt-8 rounded-[1.5rem] bg-mint/45 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.common.audience }}</p>
        <p class="mt-3 text-sm leading-7 text-ink/75">{{ localizedItem.audience }}</p>
      </div>
    </section>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <h2 class="text-2xl font-semibold text-pine">{{ copy.common.intro }}</h2>
      <p class="mt-4 text-base leading-8 text-ink/75">{{ localizedItem.intro }}</p>
    </section>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <h2 class="text-2xl font-semibold text-pine">{{ copy.common.keyPoints }}</h2>
      <ul class="mt-5 grid gap-4">
        <li
          v-for="point in localizedItem.bullets"
          :key="point"
          class="rounded-3xl border border-pine/10 bg-sand/40 px-5 py-4 text-sm leading-7 text-ink/75"
        >
          {{ point }}
        </li>
      </ul>
    </section>
    <section class="grid gap-6">
      <article v-for="section in localizedItem.sections" :key="section.heading" class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ section.heading }}</h2>
        <p class="mt-4 text-base leading-8 text-ink/75">{{ section.body }}</p>
        <ul v-if="section.tips?.length" class="mt-5 grid gap-4">
          <li
            v-for="tip in section.tips"
            :key="tip"
            class="rounded-3xl border border-pine/10 bg-peach/25 px-5 py-4 text-sm leading-7 text-ink/75"
          >
            {{ tip }}
          </li>
        </ul>
      </article>
    </section>
  </article>
</template>
