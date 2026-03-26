<script setup lang="ts">
import { guideItems } from "~/data/site";

useSeoMeta({
  title: "养宠常识与注意事项",
  description: "浏览养猫养狗的基础常识、风险提醒和家庭养宠建议。"
});
</script>

<template>
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Guides"
      title="养宠常识与注意事项"
      description="内容以搜索友好的专题页来组织，适合继续扩充成长为一个完整的宠物知识网站。"
    />
    <div class="grid gap-6 lg:grid-cols-3">
      <GuideCard v-for="item in guideItems" :key="item.slug" :item="item" prefix="/guides" />
    </div>
  </section>
</template>
