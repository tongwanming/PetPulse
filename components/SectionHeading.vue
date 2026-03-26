<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}>();
</script>

<template>
  <div class="max-w-2xl space-y-3">
    <p
      class="text-sm font-semibold uppercase tracking-[0.28em]"
      :class="light ? 'text-peach' : 'text-coral'"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl" :class="light ? 'text-white' : 'text-pine'">
      {{ title }}
    </h2>
    <p v-if="description" class="text-base leading-7" :class="light ? 'text-white/75' : 'text-ink/70'">
      {{ description }}
    </p>
  </div>
</template>
