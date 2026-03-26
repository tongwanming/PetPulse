<script setup lang="ts">
import {
  commonNotes,
  featuredCollections,
  guideItems,
  heroHighlights,
  quickTopics,
  siteStats,
  soundItems,
  stageItems
} from "~/data/site";
import {
  localizeFeaturedCollection,
  localizeGuideItem,
  localizeHomeHighlight,
  localizeHomeNote,
  localizeHomeStatLabel,
  localizeQuickTopic,
  localizeSoundItem,
  localizeStageItem
} from "~/data/localized-content";

const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: "PetChat",
  description:
    locale.value === "zh"
      ? "猫狗叫声、逗宠声音、养宠常识、注意事项与成长阶段知识网站。"
      : "A pet website for cat and dog sounds, teaser audio, care basics, safety notes, and life-stage knowledge.",
  ogTitle: "PetChat",
  ogDescription:
    locale.value === "zh"
      ? "聚合猫狗声音与科学养宠内容的宠物网站。"
      : "A pet website that combines cat and dog audio with practical care knowledge.",
  ogType: "website"
}));

const featuredSounds = computed(() => soundItems.slice(0, 2).map((item) => localizeSoundItem(item, locale.value)));
const featuredGuides = computed(() => guideItems.slice(0, 2).map((item) => localizeGuideItem(item, locale.value)));
const featuredStages = computed(() => stageItems.slice(0, 2).map((item) => localizeStageItem(item, locale.value)));
const localizedStats = computed(() => siteStats.map((item, index) => ({ ...item, label: localizeHomeStatLabel(index, locale.value) ?? item.label })));
const localizedHighlights = computed(() => heroHighlights.map((item) => localizeHomeHighlight(item, locale.value)));
const localizedQuickTopics = computed(() => quickTopics.map((item) => ({ ...item, ...localizeQuickTopic(item.title, item.description, locale.value) })));
const localizedCollections = computed(() => featuredCollections.map((item) => ({ ...item, ...localizeFeaturedCollection(item.title, item.description, locale.value) })));
const localizedNotes = computed(() => commonNotes.map((item) => localizeHomeNote(item, locale.value)));
</script>

<template>
  <div class="space-y-14 sm:space-y-20">
    <section class="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
      <div class="space-y-5 sm:space-y-6">
        <div class="inline-flex rounded-full border border-coral/20 bg-white/70 px-4 py-2 text-sm font-semibold text-coral shadow-float">
          {{ copy.home.badge }}
        </div>
        <div class="space-y-4 sm:space-y-5">
          <h1 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-pine sm:text-5xl lg:text-6xl">
            {{ copy.home.titlePrefix }}
            <span class="text-coral">{{ copy.home.titleAccent }}</span>
          </h1>
          <p class="max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            {{ copy.home.description }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <NuxtLink to="/sounds" class="rounded-full bg-pine px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-coral">
            {{ copy.home.primaryCta }}
          </NuxtLink>
          <NuxtLink to="/guides" class="rounded-full border border-pine/15 px-6 py-3 text-center text-sm font-semibold text-pine transition hover:bg-white">
            {{ copy.home.secondaryCta }}
          </NuxtLink>
        </div>
        <div class="hidden flex-wrap gap-2 sm:flex">
          <span
            v-for="item in localizedHighlights"
            :key="item"
            class="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm text-ink/70 shadow-float"
          >
            {{ item }}
          </span>
        </div>
        <div class="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="item in localizedStats"
            :key="item.label"
            class="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-float"
          >
            <p class="text-2xl font-semibold text-pine">{{ item.value }}</p>
            <p class="mt-1 text-sm text-ink/65">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="hidden gap-4 lg:grid">
        <div class="overflow-hidden rounded-[2rem] bg-white shadow-float">
          <div class="bg-[radial-gradient(circle_at_top_left,_rgba(247,143,107,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(205,239,216,0.45),_transparent_36%),linear-gradient(135deg,_#ffffff,_#fff7ef)] p-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-coral">{{ copy.home.board }}</p>
              <span class="rounded-full bg-pine px-3 py-1 text-xs font-semibold text-white">{{ copy.home.cuteUseful }}</span>
            </div>
            <div class="mt-6 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div class="rounded-[1.75rem] bg-white/85 p-5">
                <p class="text-sm text-ink/60">{{ copy.home.priorityLabel }}</p>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-pine">{{ copy.home.priorityTitle }}</h2>
                <p class="mt-3 text-sm leading-7 text-ink/70">
                  {{ copy.home.priorityBody }}
                </p>
              </div>
              <div class="grid gap-3">
                <div class="rounded-[1.75rem] bg-pine p-5 text-white">
                  <p class="text-sm text-white/70">{{ copy.home.recommended }}</p>
                  <p class="mt-2 text-lg font-semibold">{{ copy.home.recommendedTitle }}</p>
                  <p class="mt-2 text-sm leading-6 text-white/75">{{ copy.home.recommendedBody }}</p>
                </div>
                <div class="rounded-[1.75rem] bg-peach/55 p-5">
                  <p class="text-sm text-ink/60">{{ copy.home.strategy }}</p>
                  <p class="mt-2 text-lg font-semibold text-pine">{{ copy.home.strategyTitle }}</p>
                  <p class="mt-2 text-sm leading-6 text-ink/70">{{ copy.home.strategyBody }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Collections"
        :title="copy.home.collectionsTitle"
        :description="copy.home.collectionsDescription"
      />
      <div class="grid gap-4 lg:grid-cols-3 lg:gap-5">
        <NuxtLink
          v-for="collection in localizedCollections"
          :key="collection.title"
          :to="collection.href"
          class="rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float transition hover:-translate-y-1 sm:p-6"
        >
          <div :class="collection.accent" class="inline-flex rounded-full px-4 py-2 text-sm font-semibold text-pine">
            {{ copy.home.collectionsTitle }}
          </div>
          <h3 class="mt-4 text-xl font-semibold tracking-tight text-pine sm:mt-5 sm:text-2xl">{{ collection.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-ink/70">{{ collection.description }}</p>
          <span class="mt-5 inline-flex rounded-full border border-pine/15 px-4 py-2 text-sm font-semibold text-pine sm:mt-6">
            {{ copy.home.enterCollection }}
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Sounds"
        :title="copy.home.soundsTitle"
        :description="copy.home.soundsDescription"
      />
      <div class="grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="item in featuredSounds" :key="item.slug" :item="item" />
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Explore"
        :title="copy.home.exploreTitle"
        :description="copy.home.exploreDescription"
      />
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="topic in localizedQuickTopics"
          :key="topic.title"
          :to="topic.href"
          class="rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float transition hover:-translate-y-1 sm:p-6"
        >
          <h3 class="text-lg font-semibold text-pine sm:text-xl">{{ topic.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-ink/70">{{ topic.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <div class="space-y-5 rounded-[2rem] bg-pine p-6 text-white shadow-float sm:p-8">
        <SectionHeading
          eyebrow="Guides"
          :title="copy.home.guidesTitle"
          :description="copy.home.guidesDescription"
          light
        />
        <div class="grid gap-4">
          <GuideCard v-for="item in featuredGuides" :key="item.slug" :item="item" prefix="/guides" />
        </div>
      </div>
      <div class="space-y-5 rounded-[2rem] bg-white p-6 shadow-float sm:p-8">
        <SectionHeading
          eyebrow="Stages"
          :title="copy.home.stagesTitle"
          :description="copy.home.stagesDescription"
        />
        <div class="grid gap-4">
          <GuideCard v-for="item in featuredStages" :key="item.slug" :item="item" prefix="/stages" />
        </div>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <div class="rounded-[2rem] bg-white p-6 shadow-float sm:p-8">
        <SectionHeading
          eyebrow="Notice"
          :title="copy.home.noticeTitle"
          :description="copy.home.noticeDescription"
        />
      </div>
      <div class="grid gap-3 sm:gap-4">
        <div
          v-for="note in localizedNotes"
          :key="note"
          class="rounded-[1.75rem] border border-pine/10 bg-white px-5 py-4 text-sm leading-7 text-ink/75 shadow-float sm:px-6 sm:py-5"
        >
          {{ note }}
        </div>
      </div>
    </section>
  </div>
</template>
