<script setup lang="ts">
const props = defineProps<{
  src?: string;
  title: string;
  duration?: string;
  compact?: boolean;
}>();

const audioRef = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const progress = ref(0);
const currentTimeLabel = ref("00:00");
const durationLabel = ref(props.duration ?? "00:00");

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "00:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function syncFromAudio() {
  const audio = audioRef.value;

  if (!audio) return;

  currentTimeLabel.value = formatTime(audio.currentTime);
  durationLabel.value = audio.duration ? formatTime(audio.duration) : props.duration ?? "00:00";
  progress.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
}

function togglePlayback() {
  const audio = audioRef.value;

  if (!audio || !props.src) return;

  if (audio.paused) {
    void audio.play();
    return;
  }

  audio.pause();
}

function handleSeek(event: Event) {
  const audio = audioRef.value;
  const target = event.target as HTMLInputElement;

  if (!audio || !audio.duration) return;

  const nextProgress = Number(target.value);
  audio.currentTime = (nextProgress / 100) * audio.duration;
  progress.value = nextProgress;
}

function handlePlay() {
  isPlaying.value = true;
}

function handlePause() {
  isPlaying.value = false;
}

function handleLoaded() {
  syncFromAudio();
}

function handleTime() {
  syncFromAudio();
}

function handleEnded() {
  isPlaying.value = false;
  progress.value = 0;
  currentTimeLabel.value = "00:00";
}

onMounted(() => {
  const audio = audioRef.value;

  if (!audio) return;

  audio.addEventListener("play", handlePlay);
  audio.addEventListener("pause", handlePause);
  audio.addEventListener("loadedmetadata", handleLoaded);
  audio.addEventListener("timeupdate", handleTime);
  audio.addEventListener("ended", handleEnded);
});

onBeforeUnmount(() => {
  const audio = audioRef.value;

  if (!audio) return;

  audio.removeEventListener("play", handlePlay);
  audio.removeEventListener("pause", handlePause);
  audio.removeEventListener("loadedmetadata", handleLoaded);
  audio.removeEventListener("timeupdate", handleTime);
  audio.removeEventListener("ended", handleEnded);
});
</script>

<template>
  <div class="rounded-[1.75rem] border border-pine/10 bg-white" :class="compact ? 'p-4' : 'p-6'">
    <audio ref="audioRef" :src="src" preload="metadata" />
    <div class="flex items-center gap-4">
      <button
        type="button"
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-semibold text-white transition hover:bg-coral disabled:cursor-not-allowed disabled:bg-pine/35"
        :disabled="!src"
        @click="togglePlayback"
      >
        {{ isPlaying ? "暂停" : "播放" }}
      </button>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-pine">{{ title }}</p>
        <p class="mt-1 text-xs text-ink/55">
          {{ src ? "已连接音频文件" : "等待上传真实音频文件" }}
        </p>
      </div>
      <div class="text-right text-xs text-ink/55">
        <p>{{ currentTimeLabel }}</p>
        <p>{{ durationLabel }}</p>
      </div>
    </div>
    <div class="mt-4">
      <input
        :value="progress"
        type="range"
        min="0"
        max="100"
        step="0.1"
        class="h-2 w-full cursor-pointer appearance-none rounded-full bg-sand accent-coral"
        :disabled="!src"
        @input="handleSeek"
      >
    </div>
  </div>
</template>
