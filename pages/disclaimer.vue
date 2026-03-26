<script setup lang="ts">
const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: copy.value.disclaimer.title,
  description:
    locale.value === "zh"
      ? "查看 PetPulse 的内容使用边界、责任说明与风险提示。"
      : "Review PetPulse's content boundaries, liability notes, and risk reminders."
}));
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Disclaimer"
      :title="copy.disclaimer.title"
      :description="copy.disclaimer.description"
    />

    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.disclaimer.referenceTitle }}</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">{{ copy.disclaimer.referenceBody }}</p>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.disclaimer.audioTitle }}</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li v-for="item in copy.disclaimer.audioItems" :key="item" class="rounded-3xl bg-sand/50 px-5 py-4">{{ item }}</li>
        </ul>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.disclaimer.liabilityTitle }}</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">{{ copy.disclaimer.liabilityBody }}</p>
      </article>
    </div>
  </section>
</template>
