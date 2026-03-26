<script setup lang="ts">
import { soundCategories, soundItems } from "~/data/site";

useSeoMeta({
  title: "宠物叫声与逗宠声音",
  description: "查看猫狗叫声、逗宠互动声音以及适用场景与注意事项。"
});

const activeCategory = ref<(typeof soundCategories)[number]["value"]>("all");
const searchQuery = ref("");

const filteredSounds = computed(() => {
  let items = soundItems;

  if (activeCategory.value === "cat-call") {
    items = soundItems.filter((item) => item.animal === "猫咪" && item.category === "叫声");
  } else if (activeCategory.value === "dog-call") {
    items = soundItems.filter((item) => item.animal === "狗狗" && item.category === "叫声");
  } else if (activeCategory.value === "tease") {
    items = soundItems.filter((item) => item.category === "逗宠声音");
  }

  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return items;

  return items.filter((item) => {
    const haystack = [item.title, item.summary, item.mood, item.useCase, ...item.tags].join(" ").toLowerCase();

    return haystack.includes(query);
  });
});

const featuredSounds = computed(() => soundItems.slice(0, 4));

const groupedSounds = computed(() => [
  {
    title: "猫咪叫声",
    description: "更偏情绪表达和状态识别，适合和养猫知识页联动。",
    items: filteredSounds.value.filter((item) => item.animal === "猫咪" && item.category === "叫声")
  },
  {
    title: "狗狗叫声",
    description: "更适合做邀玩、警觉、陪伴等行为场景解读。",
    items: filteredSounds.value.filter((item) => item.animal === "狗狗" && item.category === "叫声")
  },
  {
    title: "互动与召唤音效",
    description: "更适合作为快速播放内容，适合逗宠和注意力唤回。",
    items: filteredSounds.value.filter((item) => item.category === "逗宠声音")
  }
]);

const soundLibrarySummary = computed(() => {
  const catCount = soundItems.filter((item) => item.animal === "猫咪").length;
  const dogCount = soundItems.filter((item) => item.animal === "狗狗").length;
  const teaseCount = soundItems.filter((item) => item.category === "逗宠声音").length;

  return [
    { label: "总音频", value: `${soundItems.length}` },
    { label: "猫咪相关", value: `${catCount}` },
    { label: "狗狗相关", value: `${dogCount}` },
    { label: "互动音效", value: `${teaseCount}` }
  ];
});
</script>

<template>
  <section class="space-y-10">
    <SectionHeading
      eyebrow="Sounds"
      title="宠物叫声与互动声音"
      description="这里集中放猫叫、狗叫、逗猫和逗狗声音。真实音频文件建议统一存放在 public/audio 目录。"
    />
    <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">声音库检索</p>
        <div class="mt-5 flex flex-col gap-4 sm:flex-row">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索：安抚、警觉、逗猫、饭点..."
            class="w-full rounded-full border border-pine/10 bg-sand/45 px-5 py-3 text-sm text-ink outline-none ring-0 placeholder:text-ink/35"
          >
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in soundCategories"
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
          当前展示 {{ filteredSounds.length }} 条声音内容。你可以按动物类型切换，也可以直接按关键词搜索情绪和用途。
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
        title="推荐试听"
        description="先从更有代表性的声音开始，适合首页推荐、用户第一次访问和内容联动。"
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
        <p class="text-sm text-ink/45">{{ group.items.length }} 条内容</p>
      </div>
      <div v-if="group.items.length" class="grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="item in group.items" :key="item.slug" :item="item" />
      </div>
      <div
        v-else
        class="rounded-[1.75rem] border border-dashed border-pine/15 bg-white px-6 py-8 text-sm text-ink/55"
      >
        当前筛选条件下，这个分组还没有匹配结果。可以切换分类或换个关键词。
      </div>
    </div>
  </section>
</template>
