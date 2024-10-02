<script setup lang="ts">
import { cn } from "~/utils/cn";

defineProps<{
  src: string;
}>();
</script>

<template>
  <div :class="cn('w-full overflow-hidden')">
    <NuxtImg
      format="webp"
      loading="lazy"
      alt=""
      :src="src"
      :class="cn('h-full w-full object-cover object-center')"
    />
  </div>
</template>
