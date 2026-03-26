<script setup lang="ts">
const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: copy.value.privacy.title,
  description:
    locale.value === "zh"
      ? "查看 PetChat 对访问数据、联系信息和第三方托管服务的说明。"
      : "Review PetChat's explanation of access data, contact information, and third-party hosting."
}));
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Privacy"
      :title="copy.privacy.title"
      :description="copy.privacy.description"
    />

    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.privacy.infoTitle }}</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">{{ copy.privacy.infoBody }}</p>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.privacy.usageTitle }}</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li v-for="item in copy.privacy.usageItems" :key="item" class="rounded-3xl bg-mint/35 px-5 py-4">{{ item }}</li>
        </ul>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.privacy.thirdPartyTitle }}</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">{{ copy.privacy.thirdPartyBody }}</p>
      </article>
    </div>
  </section>
</template>
