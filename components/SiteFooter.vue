<template>
  <footer class="relative z-10 border-t border-pine/10">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-ink/70 sm:px-8 md:flex-row md:items-start md:justify-between">
      <div class="max-w-md">
        <p class="font-semibold text-pine">PetPulse</p>
        <p>宠物叫声、逗宠声音、养宠知识与成长阶段指南。</p>
      </div>
      <div class="flex flex-wrap gap-4">
        <NuxtLink to="/about" class="hover:text-pine">关于</NuxtLink>
        <NuxtLink to="/guides" class="hover:text-pine">指南</NuxtLink>
        <NuxtLink to="/sounds" class="hover:text-pine">声音</NuxtLink>
        <NuxtLink to="/training" class="hover:text-pine">训练口令</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-pine">联系我们</NuxtLink>
        <NuxtLink to="/disclaimer" class="hover:text-pine">免责声明</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-pine">隐私政策</NuxtLink>
      </div>
    </div>
  </footer>
</template>
