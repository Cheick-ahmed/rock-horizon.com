<script setup lang="ts">
import { cn } from "~/utils/cn";

defineProps<{
  src: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}>();
</script>

<template>
  <div
    :style="{ '--width': width, '--height': height }"
    class="relative isolate aspect-[var(--width)/var(--height)] h-[var(--height)]"
    :class="rounded ? '[--radius:8px]' : null"
  >
    <NuxtImg
      format="webp"
      loading="lazy"
      alt=""
      :src="src"
      :class="cn('h-full', rounded && 'rounded-[var(--radius)]', $attrs?.class as string)"
    />
  </div>
</template>
