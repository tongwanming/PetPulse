<script setup lang="ts">
useSeoMeta({
  title: "免责声明",
  description: "查看 PetPulse 的内容使用边界、责任说明与风险提示。"
});
</script>

<template>
  <section class="mx-auto max-w-5xl space-y-8">
    <SectionHeading
      eyebrow="Disclaimer"
      title="免责声明"
      description="PetPulse 提供的是宠物声音和养宠内容参考，不构成医疗、诊断或其他专业结论。"
    />

    <div class="grid gap-6">
      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">内容参考性质</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">
          站内关于猫狗叫声、训练口令、养宠常识、成长阶段和注意事项的内容，仅用于一般信息参考和日常养宠辅助，不替代兽医诊断、线下检查、行为评估或法律建议。
        </p>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">音频使用提醒</h2>
        <ul class="mt-5 grid gap-4 text-sm leading-7 text-ink/75">
          <li class="rounded-3xl bg-sand/50 px-5 py-4">声音内容适合短时播放，不建议长时间循环刺激宠物。</li>
          <li class="rounded-3xl bg-sand/50 px-5 py-4">如果宠物出现明显紧张、烦躁、躲避、低鸣、吠叫升级等表现，应立即停止播放。</li>
          <li class="rounded-3xl bg-sand/50 px-5 py-4">训练口令音频仅作为辅助材料，训练效果仍取决于环境、节奏、奖励与个体差异。</li>
        </ul>
      </article>

      <article class="rounded-[2rem] bg-white p-8 shadow-float">
        <h2 class="text-2xl font-semibold text-pine">责任边界</h2>
        <p class="mt-4 text-sm leading-8 text-ink/75">
          对于因使用本站内容或音频所导致的直接或间接后果，包括但不限于宠物应激、误判、训练失败、误食或延误就诊等风险，用户应结合实际情况自行判断，并及时联系专业机构处理。
        </p>
      </article>
    </div>
  </section>
</template>
