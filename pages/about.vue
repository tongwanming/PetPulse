<script setup lang="ts">
const { locale, copy } = useSiteLocale();

useSeoMeta(() => ({
  title: copy.value.about.title,
  description:
    locale.value === "zh"
      ? "了解 PetChat 的内容定位、适用范围与后续扩充建议。"
      : "Understand PetChat's content position, intended use, and expansion directions."
}));
</script>

<template>
  <section class="mx-auto max-w-4xl space-y-8">
    <SectionHeading
      eyebrow="About"
      :title="copy.about.title"
      :description="copy.about.description"
    />
    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.about.expandTitle }}</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li v-for="item in copy.about.expandItems" :key="item" class="rounded-3xl bg-sand/50 px-5 py-4">{{ item }}</li>
        </ul>
      </article>
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.about.boundaryTitle }}</h2>
        <p class="mt-4 text-sm leading-7 text-ink/75">{{ copy.about.boundaryBody }}</p>
      </article>
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.about.modulesTitle }}</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li v-for="item in copy.about.modulesItems" :key="item" class="rounded-3xl bg-peach/30 px-5 py-4">{{ item }}</li>
        </ul>
      </article>
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">{{ copy.about.pagesTitle }}</h2>
        <div class="mt-5 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="rounded-full bg-pine px-4 py-2 text-sm font-semibold text-white transition hover:bg-coral">
            {{ copy.footer.contact }}
          </NuxtLink>
          <NuxtLink to="/disclaimer" class="rounded-full border border-pine/15 px-4 py-2 text-sm font-semibold text-pine transition hover:bg-sand/40">
            {{ copy.footer.disclaimer }}
          </NuxtLink>
          <NuxtLink to="/privacy" class="rounded-full border border-pine/15 px-4 py-2 text-sm font-semibold text-pine transition hover:bg-sand/40">
            {{ copy.footer.privacy }}
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
