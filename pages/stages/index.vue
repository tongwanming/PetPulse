<script setup lang="ts">
import { stageItems } from "~/data/site";
import { localizeStageItem } from "~/data/localized-content";

const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: locale.value === "zh" ? "猫狗成长阶段知识" : "Pet life-stage knowledge",
  description:
    locale.value === "zh"
      ? "查看猫咪和狗狗在幼年、成年、老年阶段的养护重点。"
      : "Review core care priorities for cats and dogs across kitten/puppy, adult, and senior stages."
}));

const localizedStageItems = computed(() => stageItems.map((item) => localizeStageItem(item, locale.value)));
</script>

<template>
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Stages"
      :title="copy.stagesIndex.title"
      :description="copy.stagesIndex.description"
    />
    <div class="grid gap-6 lg:grid-cols-2">
      <GuideCard v-for="item in localizedStageItems" :key="item.slug" :item="item" prefix="/stages" />
    </div>
  </section>
</template>
