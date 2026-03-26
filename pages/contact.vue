<script setup lang="ts">
useSeoMeta({
  title: "联系我们",
  description: "联系 PetPulse，提交合作、内容建议或站点反馈。"
});
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Contact"
      title="联系我们"
      description="如果你想反馈站点问题、提交宠物内容建议，或者讨论宠物相关合作，可以通过下面的信息联系。"
    />

    <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">联系方式</h2>
        <div class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">邮箱</p>
            <p class="mt-1">359209162@qq.com</p>
          </div>
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">站点地址</p>
            <p class="mt-1 break-all">https://pet-pulse.lovecqming.workers.dev</p>
          </div>
          <div class="rounded-3xl bg-sand/50 px-5 py-4">
            <p class="font-semibold text-pine">适合联系的内容</p>
            <p class="mt-1">内容纠错、功能建议、宠物声音补充、合作沟通。</p>
          </div>
        </div>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">联系前建议</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li class="rounded-3xl bg-mint/35 px-5 py-4">如果是页面错误，请尽量附上页面链接和截图。</li>
          <li class="rounded-3xl bg-mint/35 px-5 py-4">如果是音频建议，尽量说明适用的宠物类型和使用场景。</li>
          <li class="rounded-3xl bg-mint/35 px-5 py-4">如果涉及医疗判断，请直接咨询线下兽医，本站不提供诊疗结论。</li>
        </ul>
      </article>
    </div>
  </section>
</template>
