<script setup lang="ts">
import {
  commonNotes,
  featuredCollections,
  guideItems,
  heroHighlights,
  quickTopics,
  siteStats,
  soundItems,
  stageItems
} from "~/data/site";

useSeoMeta({
  title: "PetPulse",
  description: "猫狗叫声、逗宠声音、养宠常识、注意事项与成长阶段知识网站。",
  ogTitle: "PetPulse",
  ogDescription: "聚合猫狗声音与科学养宠内容的宠物网站。",
  ogType: "website"
});

const featuredSounds = soundItems.slice(0, 2);
const featuredGuides = guideItems.slice(0, 2);
const featuredStages = stageItems.slice(0, 2);
</script>

<template>
  <div class="space-y-20">
    <section class="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div class="space-y-6">
        <div class="inline-flex rounded-full border border-coral/20 bg-white/70 px-4 py-2 text-sm font-semibold text-coral shadow-float">
          PetPulse · 宠物声音与养宠知识站
        </div>
        <div class="space-y-5">
          <h1 class="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-pine sm:text-6xl">
            一个更好看、也更好用的
            <span class="text-coral">猫狗内容官网</span>
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-ink/70">
            把猫狗叫声、逗宠互动声音、养宠常识、风险提醒和成长阶段知识，整理成更容易查找、浏览和继续扩充的内容网站。
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/sounds" class="rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral">
            先看声音内容
          </NuxtLink>
          <NuxtLink to="/guides" class="rounded-full border border-pine/15 px-6 py-3 text-sm font-semibold text-pine transition hover:bg-white">
            浏览养宠知识
          </NuxtLink>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in heroHighlights"
            :key="item"
            class="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm text-ink/70 shadow-float"
          >
            {{ item }}
          </span>
        </div>
        <div class="grid max-w-2xl gap-3 sm:grid-cols-3">
          <div
            v-for="item in siteStats"
            :key="item.label"
            class="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-float"
          >
            <p class="text-2xl font-semibold text-pine">{{ item.value }}</p>
            <p class="mt-1 text-sm text-ink/65">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="grid gap-4">
        <div class="overflow-hidden rounded-[2rem] bg-white shadow-float">
          <div class="bg-[radial-gradient(circle_at_top_left,_rgba(247,143,107,0.25),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(205,239,216,0.45),_transparent_36%),linear-gradient(135deg,_#ffffff,_#fff7ef)] p-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold uppercase tracking-[0.26em] text-coral">品牌看板</p>
              <span class="rounded-full bg-pine px-3 py-1 text-xs font-semibold text-white">Cute + Useful</span>
            </div>
            <div class="mt-6 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div class="rounded-[1.75rem] bg-white/85 p-5">
                <p class="text-sm text-ink/60">本周优先模块</p>
                <h2 class="mt-2 text-2xl font-semibold tracking-tight text-pine">先把声音内容做好，再往知识页扩</h2>
                <p class="mt-3 text-sm leading-7 text-ink/70">
                  这个结构适合持续增长。首页负责导流，列表页负责聚合，详情页负责承接搜索和后续补内容。
                </p>
              </div>
              <div class="grid gap-3">
                <div class="rounded-[1.75rem] bg-pine p-5 text-white">
                  <p class="text-sm text-white/70">推荐做法</p>
                  <p class="mt-2 text-lg font-semibold">真实音频放 `public/audio`</p>
                  <p class="mt-2 text-sm leading-6 text-white/75">页面数据与文件路径分离，后续维护最省事。</p>
                </div>
                <div class="rounded-[1.75rem] bg-peach/55 p-5">
                  <p class="text-sm text-ink/60">内容策略</p>
                  <p class="mt-2 text-lg font-semibold text-pine">以猫狗高频搜索问题做专题</p>
                  <p class="mt-2 text-sm leading-6 text-ink/70">更适合 SEO，也更容易持续补文章。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Collections"
        title="首页推荐专题"
        description="这些模块让首页更像一个内容产品，而不是简单的链接集合。"
      />
      <div class="grid gap-5 lg:grid-cols-3">
        <NuxtLink
          v-for="collection in featuredCollections"
          :key="collection.title"
          :to="collection.href"
          class="rounded-[2rem] border border-pine/10 bg-white p-6 shadow-float transition hover:-translate-y-1"
        >
          <div :class="collection.accent" class="inline-flex rounded-full px-4 py-2 text-sm font-semibold text-pine">
            推荐专题
          </div>
          <h3 class="mt-5 text-2xl font-semibold tracking-tight text-pine">{{ collection.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-ink/70">{{ collection.description }}</p>
          <span class="mt-6 inline-flex rounded-full border border-pine/15 px-4 py-2 text-sm font-semibold text-pine">
            进入专题
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Sounds"
        title="猫狗声音与逗宠内容"
        description="先把声音内容做成结构化页面，后续你只需要往 public/audio 里放入真实音频文件并补上链接。"
      />
      <div class="grid gap-6 lg:grid-cols-2">
        <SoundCard v-for="item in featuredSounds" :key="item.slug" :item="item" />
      </div>
    </section>

    <section class="space-y-8">
      <SectionHeading
        eyebrow="Explore"
        title="常用内容入口"
        description="把官网最核心的几个方向做成显眼入口，首页负责引导，列表页和详情页承接搜索需求。"
      />
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="topic in quickTopics"
          :key="topic.title"
          :to="topic.href"
          class="rounded-[2rem] border border-pine/10 bg-white p-6 shadow-float transition hover:-translate-y-1"
        >
          <h3 class="text-xl font-semibold text-pine">{{ topic.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-ink/70">{{ topic.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="grid gap-8 lg:grid-cols-2">
      <div class="space-y-6 rounded-[2rem] bg-pine p-8 text-white shadow-float">
        <SectionHeading
          eyebrow="Guides"
          title="养宠常识与注意事项"
          description="把新手高频会搜的问题放在前面，首页承担导流，详情页承接搜索流量。"
          light
        />
        <div class="grid gap-4">
          <GuideCard v-for="item in featuredGuides" :key="item.slug" :item="item" prefix="/guides" />
        </div>
      </div>
      <div class="space-y-6 rounded-[2rem] bg-white p-8 shadow-float">
        <SectionHeading
          eyebrow="Stages"
          title="按成长阶段整理内容"
          description="把猫狗不同年龄段拆开，避免所有知识都堆在一个列表里。"
        />
        <div class="grid gap-4">
          <GuideCard v-for="item in featuredStages" :key="item.slug" :item="item" prefix="/stages" />
        </div>
      </div>
    </section>

    <section class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-[2rem] bg-white p-8 shadow-float">
        <SectionHeading
          eyebrow="Notice"
          title="养宠内容使用提醒"
          description="声音和知识页都建议保留边界说明，这类内容站更容易建立可信度。"
        />
      </div>
      <div class="grid gap-4">
        <div
          v-for="note in commonNotes"
          :key="note"
          class="rounded-[1.75rem] border border-pine/10 bg-white px-6 py-5 text-sm leading-7 text-ink/75 shadow-float"
        >
          {{ note }}
        </div>
      </div>
    </section>
  </div>
</template>
