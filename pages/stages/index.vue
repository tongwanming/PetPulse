<script setup lang="ts">
import { stageItems } from "~/data/site";

useSeoMeta({
  title: "猫狗成长阶段知识",
  description: "查看猫咪和狗狗在幼年、成年、老年阶段的养护重点。"
});
</script>

<template>
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Stages"
      title="猫狗各阶段养护知识"
      description="按阶段划分内容，更适合覆盖搜索意图，也更方便你继续扩展专题。"
    />
    <div class="grid gap-6 lg:grid-cols-2">
      <GuideCard v-for="item in stageItems" :key="item.slug" :item="item" prefix="/stages" />
    </div>
  </section>
</template>
