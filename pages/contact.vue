<script setup lang="ts">
const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: copy.value.contact.title,
  description:
    locale.value === "zh"
      ? "联系 PetChat，提交合作、内容建议或站点反馈。"
      : "Contact PetChat for collaboration, content suggestions, or site feedback."
}));
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Contact"
      :title="copy.contact.title"
      :description="copy.contact.description"
    />

    <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.contact.infoTitle }}</h2>
        <div class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">{{ copy.contact.email }}</p>
            <p class="mt-1">359209162@qq.com</p>
          </div>
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">{{ copy.contact.siteUrl }}</p>
            <p class="mt-1 break-all">https://pet-pulse.lovecqming.workers.dev</p>
          </div>
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">{{ copy.contact.fitContent }}</p>
            <p class="mt-1">{{ copy.contact.fitBody }}</p>
          </div>
        </div>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.contact.beforeTitle }}</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li v-for="item in copy.contact.beforeItems" :key="item" class="rounded-3xl bg-mint/35 px-5 py-4">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
