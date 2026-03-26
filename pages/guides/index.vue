<script setup lang="ts">
import { guideItems } from "~/data/site";
import { localizeGuideItem } from "~/data/localized-content";

const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: locale.value === "zh" ? "养宠常识与注意事项" : "Pet care basics and safety",
  description:
    locale.value === "zh"
      ? "浏览养猫养狗的基础常识、风险提醒和家庭养宠建议。"
      : "Browse cat and dog care basics, risk reminders, and practical home-care advice."
}));

const localizedGuideItems = computed(() => guideItems.map((item) => localizeGuideItem(item, locale.value)));
</script>

<template>
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Guides"
      :title="copy.guidesIndex.title"
      :description="copy.guidesIndex.description"
    />
    <div class="grid gap-6 lg:grid-cols-3">
      <GuideCard v-for="item in localizedGuideItems" :key="item.slug" :item="item" prefix="/guides" />
    </div>
  </section>
</template>
