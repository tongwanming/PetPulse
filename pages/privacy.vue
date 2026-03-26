<script setup lang="ts">
useSeoMeta({
  title: "隐私政策",
  description: "查看 PetPulse 对访问数据、联系信息和第三方托管服务的说明。"
});
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Privacy"
      title="隐私政策"
      description="PetPulse 当前为内容展示型网站，隐私政策重点说明访问数据、联系方式和第三方托管服务。"
    />

    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">我们可能收集的信息</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">
          当前站点不提供账号注册、评论和表单提交等复杂功能。若你通过邮箱联系站点，可能会提供你的邮箱地址、昵称和消息内容；此外，Cloudflare 等托管服务可能会生成基础访问日志和匿名统计数据。
        </p>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">这些信息如何被使用</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li class="rounded-3xl bg-mint/35 px-5 py-4">用于回复你的站点反馈、内容建议和合作沟通。</li>
          <li class="rounded-3xl bg-mint/35 px-5 py-4">用于排查页面异常、优化音频内容和改进站点结构。</li>
          <li class="rounded-3xl bg-mint/35 px-5 py-4">不会主动将你的联系信息出售或用于无关营销。</li>
        </ul>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">第三方服务</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">
          本站使用 GitHub 管理代码，使用 Cloudflare Pages/Workers 提供托管和访问服务。第三方平台可能根据其自身条款处理必要的技术数据，具体请以对应平台官方政策为准。
        </p>
      </article>
    </div>
  </section>
</template>
