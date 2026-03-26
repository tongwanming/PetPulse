<script setup lang="ts">
useSeoMeta({
  title: "关于 PetPulse",
  description: "了解 PetPulse 的内容定位、适用范围与后续扩充建议。"
});
</script>

<template>
  <section class="mx-auto max-w-4xl space-y-8">
    <SectionHeading
      eyebrow="About"
      title="关于 PetPulse"
      description="PetPulse 不是单纯展示公司信息的落地页，而是一个围绕猫狗声音与养宠内容构建的宠物知识官网。"
    />
    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">适合继续扩充的内容方向</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li class="rounded-3xl bg-sand/50 px-5 py-4">增加更多猫狗叫声类型，并接入真实音频文件。</li>
          <li class="rounded-3xl bg-sand/50 px-5 py-4">把知识页继续细分为饮食、行为、训练、医疗、用品等专题。</li>
          <li class="rounded-3xl bg-sand/50 px-5 py-4">首页加入推荐文章、热门搜索和最新更新模块。</li>
          <li class="rounded-3xl bg-sand/50 px-5 py-4">后续接入真实 Logo、品牌插画与更完整的文案体系。</li>
        </ul>
      </article>
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">内容边界说明</h2>
        <p class="mt-4 text-sm leading-7 text-ink/75">
          网站内容可以作为日常养宠参考，但不替代兽医诊断。涉及疾病、误食、持续异常行为等情况，仍应尽快联系线下专业机构。
        </p>
      </article>
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">官网后续可以增加的通用模块</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li class="rounded-3xl bg-peach/30 px-5 py-4">热门文章、最新更新、专题推荐，让首页更像真正运营中的内容站。</li>
          <li class="rounded-3xl bg-peach/30 px-5 py-4">免责声明、隐私政策、联系我们等标准页面，完善通用官网信息。</li>
          <li class="rounded-3xl bg-peach/30 px-5 py-4">后续如果内容多到几十篇以上，再切到 Markdown 或 CMS，会比现在更合适。</li>
        </ul>
      </article>
    </div>
  </section>
</template>
