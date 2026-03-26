<script setup lang="ts">
import { popularSoundTags, soundItems, uploadSteps } from "~/data/site";

const route = useRoute();
const item = soundItems.find((entry) => entry.slug === route.params.slug);

if (!item) {
  throw createError({
    statusCode: 404,
    statusMessage: "Sound Not Found"
  });
}

useSeoMeta({
  title: item.title,
  description: item.summary
});

const relatedSounds = computed(() => {
  return soundItems
    .filter((entry) => entry.slug !== item.slug)
    .map((entry) => {
      const sharedTags = entry.tags.filter((tag) => item.tags.includes(tag)).length;
      const sameAnimal = entry.animal === item.animal ? 2 : 0;
      const sameCategory = entry.category === item.category ? 3 : 0;
      const score = sharedTags * 4 + sameAnimal + sameCategory;

      return { entry, score };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, 4)
    .map(({ entry }) => entry);
});

const itemIndex = soundItems.findIndex((entry) => entry.slug === item.slug);
const previousItem = computed(() => soundItems[(itemIndex - 1 + soundItems.length) % soundItems.length]);
const nextItem = computed(() => soundItems[(itemIndex + 1) % soundItems.length]);
</script>

<template>
  <article class="mx-auto max-w-4xl space-y-8">
    <NuxtLink to="/sounds" class="inline-flex rounded-full border border-pine/15 bg-white px-4 py-2 text-sm font-semibold text-pine">
      返回声音列表
    </NuxtLink>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-pine">{{ item.category }}</span>
        <span class="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-pine">{{ item.animal }}</span>
        <span class="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-pine">{{ item.mood }}</span>
        <span class="rounded-full border border-pine/10 px-3 py-1 text-xs font-semibold text-ink/60">{{ item.duration }}</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold tracking-tight text-pine">{{ item.title }}</h1>
      <p class="mt-4 text-lg leading-8 text-ink/70">{{ item.summary }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in item.tags"
          :key="tag"
          class="rounded-full border border-pine/10 bg-white px-3 py-1 text-xs text-ink/60"
        >
          {{ tag }}
        </span>
      </div>
      <div class="mt-8 rounded-[1.5rem] bg-sand/70 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">播放区</p>
        <div class="mt-4">
          <AudioPlayer :src="item.audio" :title="item.title" :duration="item.duration" />
        </div>
      </div>
    </section>
    <section class="grid gap-6 md:grid-cols-2">
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <h2 class="text-xl font-semibold text-pine">适用场景</h2>
        <p class="mt-3 text-sm leading-7 text-ink/70">{{ item.useCase }}</p>
      </div>
      <div class="rounded-[2rem] bg-white p-6 shadow-float">
        <h2 class="text-xl font-semibold text-pine">使用提醒</h2>
        <p class="mt-3 text-sm leading-7 text-ink/70">{{ item.caution }}</p>
      </div>
    </section>
    <section class="grid gap-6 md:grid-cols-2">
      <NuxtLink :to="`/sounds/${previousItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">上一条</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ previousItem.title }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ previousItem.summary }}</p>
      </NuxtLink>
      <NuxtLink :to="`/sounds/${nextItem.slug}`" class="rounded-[2rem] bg-white p-6 shadow-float transition hover:-translate-y-1">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-coral">下一条</p>
        <p class="mt-3 text-2xl font-semibold text-pine">{{ nextItem.title }}</p>
        <p class="mt-2 text-sm leading-7 text-ink/65">{{ nextItem.summary }}</p>
      </NuxtLink>
    </section>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-pine">热门标签</h2>
          <p class="mt-1 text-sm leading-7 text-ink/65">用标签继续探索同类声音。</p>
        </div>
        <NuxtLink to="/sounds" class="text-sm font-semibold text-coral">回到声音库</NuxtLink>
      </div>
      <div class="mt-5 flex flex-wrap gap-3">
        <span
          v-for="tag in popularSoundTags"
          :key="tag"
          class="rounded-full border border-pine/10 bg-sand/45 px-4 py-2 text-sm text-ink/70"
        >
          {{ tag }}
        </span>
      </div>
    </section>
    <section class="rounded-[2rem] bg-white p-8 shadow-float">
      <h2 class="text-2xl font-semibold text-pine">后续补真实音频的方法</h2>
      <ul class="mt-5 grid gap-4">
        <li
          v-for="step in uploadSteps"
          :key="step"
          class="rounded-3xl border border-pine/10 bg-mint/35 px-5 py-4 text-sm leading-7 text-ink/75"
        >
          {{ step }}
        </li>
      </ul>
    </section>
    <section class="space-y-6">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-pine">相关推荐</h2>
          <p class="mt-1 text-sm leading-7 text-ink/65">
            基于当前音频的动物类型、分类和标签，为你推荐更接近的声音内容。
          </p>
        </div>
        <NuxtLink to="/sounds" class="text-sm font-semibold text-coral">
          查看全部声音
        </NuxtLink>
      </div>
      <div class="grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="relatedItem in relatedSounds" :key="relatedItem.slug" :item="relatedItem" />
      </div>
    </section>
  </article>
</template>
