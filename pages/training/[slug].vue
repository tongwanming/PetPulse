<script setup lang="ts">
import { trainingItems } from "~/data/site";

const route = useRoute();
const item = trainingItems.find((entry) => entry.slug === route.params.slug);

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Training Not Found"
  });
}

const itemIndex = trainingItems.findIndex((entry) => entry.slug === item.slug);
const previousItem = computed(() => trainingItems[(itemIndex - 1 + trainingItems.length) % trainingItems.length]);
const nextItem = computed(() => trainingItems[(itemIndex + 1) % trainingItems.length]);

useSeoMeta({
  title: `${item.command} 训练口令`,
  description: item.summary
});
</script>

<template>
  <article class="mx-auto max-w-5xl space-y-8">
    <NuxtLink to="/training" class="inline-flex rounded-full border border-pine/15 bg-white px-4 py-2 text-sm font-semibold text-pine">
      返回训练口令库
    </NuxtLink>

    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">Training</span>
        <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">{{ item.variants.length }} 种声音</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold tracking-tight text-pine">{{ item.command }}</h1>
      <p class="mt-4 text-lg leading-8 text-ink/70">{{ item.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in item.tags"
          :key="tag"
          class="rounded-full border border-pine/10 px-3 py-1 text-xs text-ink/60"
        >
          {{ tag }}
        </span>
      </div>
      <div class="mt-8 rounded-[1.5rem] bg-sand/70 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">训练目标</p>
        <p class="mt-3 text-sm leading-7 text-ink/75">{{ item.goal }}</p>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <div
        v-for="variant in item.variants"
        :key="variant.voice"
        class="rounded-[2rem] bg-white p-6 shadow-float"
      >
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">{{ variant.voice }}</p>
        <h2 class="mt-2 text-xl font-semibold text-pine">{{ item.command }}</h2>
        <div class="mt-5">
          <AudioPlayer :src="variant.audio" :title="`${item.command} · ${variant.voice}`" />
        </div>
      </div>
    </section>

    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <h2 class="text-2xl font-semibold text-pine">训练提醒</h2>
      <ul class="mt-5 grid gap-4">
        <li
          v-for="tip in item.tips"
          :key="tip"
          class="rounded-3xl border border-pine/10 bg-mint/35 px-5 py-4 text-sm leading-7 text-ink/75"
        >
          {{ tip }}
        </li>
      </ul>
    </section>

    <section class="grid gap-6 md:grid-cols-2">
      <NuxtLink :to="`/training/${previousItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">上一条</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ previousItem.command }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ previousItem.summary }}</p>
      </NuxtLink>
      <NuxtLink :to="`/training/${nextItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">下一条</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ nextItem.command }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ nextItem.summary }}</p>
      </NuxtLink>
    </section>
  </article>
</template>
