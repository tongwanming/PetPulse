<script setup lang="ts">
import {
  petChatAnalyticsEvents,
  petChatFeatureMindMap,
  petChatRemoteParameters,
  petChatSdkMindMap,
  petChatSourceRoot,
  petChatStats
} from "~/data/petchat";
import { petChatSyncInfo } from "~/data/petchat-sync";

useSeoMeta({
  title: "PetChat 功能分析",
  description: "PetChat iOS 项目的功能、SDK、参数下发和埋点分析总览。"
});

const selectedAnalyticsModule = ref("全部");
const analyticsModules = computed(() => ["全部", ...Array.from(new Set(petChatAnalyticsEvents.map((item) => item.module)))]);
const visibleAnalyticsEvents = computed(() =>
  selectedAnalyticsModule.value === "全部"
    ? petChatAnalyticsEvents
    : petChatAnalyticsEvents.filter((item) => item.module === selectedAnalyticsModule.value)
);

const selectedParameterModule = ref("全部");
const parameterModules = computed(() => ["全部", ...Array.from(new Set(petChatRemoteParameters.map((item) => item.module)))]);
const visibleRemoteParameters = computed(() =>
  selectedParameterModule.value === "全部"
    ? petChatRemoteParameters
    : petChatRemoteParameters.filter((item) => item.module === selectedParameterModule.value)
);
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-6">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="PetChat Source Map"
          title="PetChat 功能、SDK、参数下发与埋点总览"
          :description="`以下内容只读取 ${petChatSourceRoot} 的代码和文档，并展示在当前官网项目中。`"
        />
        <div class="grid gap-3 sm:grid-cols-4 lg:min-w-[560px]">
          <div
            v-for="item in petChatStats"
            :key="item.label"
            class="rounded-[1.5rem] border border-pine/10 bg-white px-5 py-4 shadow-float"
          >
            <p class="text-2xl font-semibold text-pine">{{ item.value }}</p>
            <p class="mt-1 text-sm text-ink/60">{{ item.label }}</p>
          </div>
        </div>
      </div>
      <div class="grid gap-3 rounded-[1.5rem] border border-pine/10 bg-white/80 p-4 text-sm text-ink/65 shadow-float sm:grid-cols-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-coral">PetChat Branch</p>
          <p class="mt-1 font-semibold text-pine">{{ petChatSyncInfo.branch }}</p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Commit</p>
          <p class="mt-1 font-semibold text-pine">{{ petChatSyncInfo.shortCommit }}</p>
        </div>
        <div class="sm:col-span-2">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Last PetChat Change</p>
          <p class="mt-1 truncate font-semibold text-pine">{{ petChatSyncInfo.subject }}</p>
          <p class="mt-1 text-xs text-ink/50">{{ petChatSyncInfo.committedAt }}</p>
        </div>
      </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-2 xl:items-start">
      <MindMapExplorer :root="petChatFeatureMindMap" />
      <MindMapExplorer :root="petChatSdkMindMap" tone="coral" />
    </section>

    <section id="petchat-remote-config" class="scroll-mt-28 rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float sm:p-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.26em] text-coral">Remote Config</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-pine sm:text-3xl">参数下发默认值、功能与触发位置</h3>
          <p class="mt-2 max-w-3xl text-sm leading-7 text-ink/65">
            基于 `PCRemoteConfigKeys`、`PCAppRemoteConfig` 和实际业务调用点整理，覆盖 Firebase Remote Config 与友盟 RemoteConfig 的统一读取层。
          </p>
        </div>
        <select
          v-model="selectedParameterModule"
          class="h-11 rounded-full border border-pine/15 bg-cream px-4 text-sm font-semibold text-pine outline-none focus:border-coral"
          aria-label="筛选下发参数模块"
        >
          <option v-for="moduleName in parameterModules" :key="moduleName" :value="moduleName">
            {{ moduleName }}
          </option>
        </select>
      </div>

      <div class="mt-5 overflow-hidden rounded-[1.5rem] border border-pine/10">
        <div class="max-h-[520px] overflow-auto">
          <table class="min-w-[1080px] w-full border-collapse text-left text-sm">
            <thead class="sticky top-0 z-10 bg-pine text-white">
              <tr>
                <th class="px-4 py-3 font-semibold">参数 Key</th>
                <th class="px-4 py-3 font-semibold">模块</th>
                <th class="px-4 py-3 font-semibold">默认值</th>
                <th class="px-4 py-3 font-semibold">对应功能</th>
                <th class="px-4 py-3 font-semibold">触发代码位置</th>
                <th class="px-4 py-3 font-semibold">解析位置</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in visibleRemoteParameters"
                :key="item.key"
                class="border-t border-pine/10 odd:bg-cream/45"
              >
                <td class="px-4 py-3 align-top font-semibold text-pine">{{ item.key }}</td>
                <td class="px-4 py-3 align-top text-ink/70">{{ item.module }}</td>
                <td class="px-4 py-3 align-top text-xs leading-5 text-ink/65">{{ item.defaultValue }}</td>
                <td class="px-4 py-3 align-top leading-6 text-ink/75">{{ item.feature }}</td>
                <td class="px-4 py-3 align-top text-xs leading-5 text-ink/55">{{ item.triggerLocation }}</td>
                <td class="px-4 py-3 align-top text-xs leading-5 text-ink/55">{{ item.parseLocation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="rounded-[2rem] border border-pine/10 bg-white p-5 shadow-float sm:p-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.26em] text-coral">Analytics</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-pine sm:text-3xl">埋点触发逻辑与代码位置</h3>
          <p class="mt-2 max-w-3xl text-sm leading-7 text-ink/65">
            基于 `PCReport.report` 扫描和 PetChat 埋点实现清单整理，包含 Thinking/Firebase 与 Adjust 两类上报目标。
          </p>
        </div>
        <select
          v-model="selectedAnalyticsModule"
          class="h-11 rounded-full border border-pine/15 bg-cream px-4 text-sm font-semibold text-pine outline-none focus:border-coral"
          aria-label="筛选埋点模块"
        >
          <option v-for="moduleName in analyticsModules" :key="moduleName" :value="moduleName">
            {{ moduleName }}
          </option>
        </select>
      </div>

      <div class="mt-5 overflow-hidden rounded-[1.5rem] border border-pine/10">
        <div class="max-h-[520px] overflow-auto">
          <table class="min-w-[980px] w-full border-collapse text-left text-sm">
            <thead class="sticky top-0 z-10 bg-pine text-white">
              <tr>
                <th class="px-4 py-3 font-semibold">事件 ID</th>
                <th class="px-4 py-3 font-semibold">模块</th>
                <th class="px-4 py-3 font-semibold">触发逻辑</th>
                <th class="px-4 py-3 font-semibold">位置</th>
                <th class="px-4 py-3 font-semibold">参数</th>
                <th class="px-4 py-3 font-semibold">目标</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="event in visibleAnalyticsEvents"
                :key="`${event.id}-${event.location}`"
                class="border-t border-pine/10 odd:bg-cream/45"
              >
                <td class="px-4 py-3 align-top font-semibold text-pine">{{ event.id }}</td>
                <td class="px-4 py-3 align-top text-ink/70">{{ event.module }}</td>
                <td class="px-4 py-3 align-top leading-6 text-ink/75">{{ event.trigger }}</td>
                <td class="px-4 py-3 align-top text-xs leading-5 text-ink/55">{{ event.location }}</td>
                <td class="px-4 py-3 align-top text-xs leading-5 text-ink/60">{{ event.params }}</td>
                <td class="px-4 py-3 align-top">
                  <span class="rounded-full bg-mint/65 px-3 py-1 text-xs font-semibold text-pine">
                    {{ event.target }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
