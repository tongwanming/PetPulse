<script setup lang="ts">
import type { MindMapNode } from "~/data/petchat";

const props = defineProps<{
  root: MindMapNode;
  tone?: "green" | "coral";
}>();

const path = ref<MindMapNode[]>([props.root]);

const currentNode = computed(() => path.value[path.value.length - 1]);
const hasChildren = computed(() => (currentNode.value.children?.length ?? 0) > 0);

watch(
  () => props.root,
  (root) => {
    path.value = [root];
  }
);

function openNode(node: MindMapNode) {
  path.value = [...path.value, node];
}

function jumpTo(index: number) {
  path.value = path.value.slice(0, index + 1);
}
</script>

<template>
  <div class="rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float sm:p-6">
    <div class="flex flex-wrap items-center gap-2">
      <button
        v-for="(item, index) in path"
        :key="`${item.id}-${index}`"
        type="button"
        class="rounded-full px-3 py-1.5 text-xs font-semibold"
        :class="[
          index === path.length - 1
            ? tone === 'coral'
              ? 'bg-coral text-white'
              : 'bg-pine text-white'
            : 'bg-cream text-ink/65 hover:bg-mint/60'
        ]"
        @click="jumpTo(index)"
      >
        {{ item.title }}
      </button>
    </div>

    <div class="mt-5 rounded-[1.5rem] bg-cream p-5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-coral">Current layer</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-pine">{{ currentNode.title }}</h3>
        </div>
        <span class="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink/60">
          {{ hasChildren ? `${currentNode.children?.length} 个下层节点` : "末级节点" }}
        </span>
      </div>
      <p class="mt-3 text-sm leading-7 text-ink/70">{{ currentNode.summary }}</p>
      <p v-if="currentNode.source" class="mt-3 text-xs leading-6 text-ink/50">来源：{{ currentNode.source }}</p>
    </div>

    <div v-if="hasChildren" class="mt-5 grid gap-3 md:grid-cols-2">
      <button
        v-for="child in currentNode.children"
        :key="child.id"
        type="button"
        class="group min-h-[118px] rounded-[1.5rem] border border-pine/10 bg-white p-4 text-left hover:-translate-y-0.5 hover:border-coral/35 hover:bg-peach/20"
        @click="openNode(child)"
      >
        <div class="flex items-start justify-between gap-3">
          <h4 class="text-base font-semibold text-pine">{{ child.title }}</h4>
          <span class="shrink-0 rounded-full bg-mint/60 px-2.5 py-1 text-xs font-semibold text-pine">
            进入
          </span>
        </div>
        <p class="mt-2 line-clamp-3 text-sm leading-6 text-ink/65">{{ child.summary }}</p>
        <p v-if="child.source" class="mt-3 truncate text-xs text-ink/45">{{ child.source }}</p>
      </button>
    </div>

    <div v-else class="mt-5 rounded-[1.5rem] border border-dashed border-pine/20 bg-mint/25 p-4 text-sm leading-7 text-ink/70">
      已到达该分支的最后一层，可通过上方路径返回任意上级。
    </div>
  </div>
</template>
