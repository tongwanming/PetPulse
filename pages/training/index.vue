<script setup lang="ts">
import { trainingItems } from "~/data/site";

useSeoMeta({
  title: "训练口令音频",
  description: "查看常用宠物训练口令音频，包括过来、坐下、趴下、安静、握手等多种声音版本。"
});

const searchQuery = ref("");

const filteredTrainingItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return trainingItems;

  return trainingItems.filter((item) => {
    const haystack = [item.command, item.summary, item.goal, ...item.tags].join(" ").toLowerCase();
    return haystack.includes(query);
  });
});
</script>

<template>
  <section class="space-y-10">
    <SectionHeading
      eyebrow="Training"
      title="训练口令音频库"
      description="把常用训练口令按页面整理出来，便于试听不同声线版本，并和训练知识内容联动。"
    />

    <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">快速检索</p>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索：过来、安静、趣味训练、召回..."
          class="mt-5 w-full rounded-full border border-pine/10 bg-sand/45 px-5 py-3 text-sm text-ink outline-none placeholder:text-ink/35"
        >
        <p class="mt-4 text-sm leading-7 text-ink/65">
          当前展示 {{ filteredTrainingItems.length }} 条训练口令。每条口令都提供女声、童声和男声 3 个版本。
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">{{ trainingItems.length }}</p>
          <p class="mt-2 text-sm text-ink/60">训练口令</p>
        </div>
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">3</p>
          <p class="mt-2 text-sm text-ink/60">声音版本</p>
        </div>
        <div class="rounded-[1.75rem] border border-pine/10 bg-white p-5 shadow-float">
          <p class="text-3xl font-semibold text-pine">{{ trainingItems.length * 3 }}</p>
          <p class="mt-2 text-sm text-ink/60">总音频数</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <TrainingCard v-for="item in filteredTrainingItems" :key="item.slug" :item="item" />
    </div>
  </section>
</template>
