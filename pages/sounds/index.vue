<script setup lang="ts">
import { soundCategories, soundItems } from "~/data/site";
import { localizeSoundItem, localizedSoundCategories } from "~/data/localized-content";

const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: locale.value === "zh" ? "宠物叫声与逗宠声音" : "Pet sounds and teaser audio",
  description:
    locale.value === "zh"
      ? "查看猫狗叫声、逗宠互动声音以及适用场景与注意事项。"
      : "Browse cat and dog sounds, teaser audio, and practical playback notes."
}));

const activeCategory = ref<(typeof soundCategories)[number]["value"]>("all");
const searchQuery = ref("");
const localizedSoundItems = computed(() => soundItems.map((item) => localizeSoundItem(item, locale.value)));
const localizedCategories = computed(() =>
  soundCategories.map((category, index) => ({ ...category, label: localizedSoundCategories[locale.value][index] ?? category.label }))
);

const filteredSounds = computed(() => {
  let items = localizedSoundItems.value;

  if (activeCategory.value === "cat-call") {
    items = localizedSoundItems.value.filter((item) => item.slug.startsWith("cat-") && item.category !== (locale.value === "zh" ? "逗宠声音" : "Teaser audio"));
  } else if (activeCategory.value === "dog-call") {
    items = localizedSoundItems.value.filter((item) => item.animal === (locale.value === "zh" ? "狗狗" : "Dog") && item.category !== (locale.value === "zh" ? "逗宠声音" : "Teaser audio"));
  } else if (activeCategory.value === "tease") {
    items = localizedSoundItems.value.filter((item) => item.category === (locale.value === "zh" ? "逗宠声音" : "Teaser audio"));
  }

  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return items;

  return items.filter((item) => {
    const haystack = [item.title, item.summary, item.mood, item.useCase, ...item.tags].join(" ").toLowerCase();

    return haystack.includes(query);
  });
});

const featuredSounds = computed(() => localizedSoundItems.value.slice(0, 4));

const groupedSounds = computed(() => [
  {
    title: copy.value.soundsIndex.groups.cats.title,
    description: copy.value.soundsIndex.groups.cats.description,
    items: filteredSounds.value.filter((item) => item.animal === (locale.value === "zh" ? "猫咪" : "Cat") && item.category !== (locale.value === "zh" ? "逗宠声音" : "Teaser audio"))
  },
  {
    title: copy.value.soundsIndex.groups.dogs.title,
    description: copy.value.soundsIndex.groups.dogs.description,
    items: filteredSounds.value.filter((item) => item.animal === (locale.value === "zh" ? "狗狗" : "Dog") && item.category !== (locale.value === "zh" ? "逗宠声音" : "Teaser audio"))
  },
  {
    title: copy.value.soundsIndex.groups.teaser.title,
    description: copy.value.soundsIndex.groups.teaser.description,
    items: filteredSounds.value.filter((item) => item.category === (locale.value === "zh" ? "逗宠声音" : "Teaser audio"))
  }
]);

const soundLibrarySummary = computed(() => {
  const catCount = soundItems.filter((item) => item.animal === "猫咪").length;
  const dogCount = soundItems.filter((item) => item.animal === "狗狗").length;
  const teaseCount = soundItems.filter((item) => item.category === "逗宠声音").length;

  return [
    { label: copy.value.soundsIndex.summaryLabels[0], value: `${soundItems.length}` },
    { label: copy.value.soundsIndex.summaryLabels[1], value: `${catCount}` },
    { label: copy.value.soundsIndex.summaryLabels[2], value: `${dogCount}` },
    { label: copy.value.soundsIndex.summaryLabels[3], value: `${teaseCount}` }
  ];
});
</script>

<template>
  <section class="space-y-10">
    <SectionHeading
      eyebrow="Sounds"
      :title="copy.soundsIndex.title"
      :description="copy.soundsIndex.description"
    />
    <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ copy.soundsIndex.searchTitle }}</p>
        <div class="mt-5 flex flex-col gap-4 sm:flex-row">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="copy.soundsIndex.searchPlaceholder"
            class="w-full rounded-full border border-pine/10 bg-sand/45 px-5 py-3 text-sm text-ink outline-none ring-0 placeholder:text-ink/35"
          >
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in localizedCategories"
              :key="category.value"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-semibold transition"
              :class="activeCategory === category.value ? 'bg-pine text-white' : 'bg-sand text-ink/70 hover:bg-peach/50'"
              @click="activeCategory = category.value"
            >
              {{ category.label }}
            </button>
          </div>
        </div>
        <p class="mt-4 text-sm leading-7 text-ink/65">
          {{ copy.soundsIndex.searchSummary(filteredSounds.length) }}
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="item in soundLibrarySummary"
          :key="item.label"
          class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float"
        >
          <p class="text-3xl font-semibold tracking-tight text-pine">{{ item.value }}</p>
          <p class="mt-2 text-sm text-ink/60">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <div class="rounded-[2rem] bg-pine p-8 text-white shadow-float">
      <SectionHeading
        eyebrow="Featured"
        :title="copy.soundsIndex.featuredTitle"
        :description="copy.soundsIndex.featuredDescription"
        light
      />
      <div class="mt-8 grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="item in featuredSounds" :key="item.slug" :item="item" />
      </div>
    </div>

    <div
      v-for="group in groupedSounds"
      :key="group.title"
      class="space-y-6"
    >
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-pine">{{ group.title }}</h2>
          <p class="mt-1 text-sm leading-7 text-ink/65">{{ group.description }}</p>
        </div>
        <p class="text-sm text-ink/45">{{ copy.soundsIndex.groupItems(group.items.length) }}</p>
      </div>
      <div v-if="group.items.length" class="grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="item in group.items" :key="item.slug" :item="item" />
      </div>
      <div
        v-else
        class="rounded-[1.75rem] border border-dashed border-pine/15 bg-white px-6 py-8 text-sm text-ink/55"
      >
        {{ copy.soundsIndex.emptyGroup }}
      </div>
    </div>
  </section>
</template>
