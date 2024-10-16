<script setup lang="ts">
import { cn } from "~/utils/cn";

defineProps<{
  src?: string;
  alt?: string;
}>();
</script>

<template>
  <div :class="cn('w-full overflow-hidden')">
    <slot>
      <NuxtImg
        v-if="src"
        format="webp"
        loading="lazy"
        :alt="alt"
        :src="src"
        :class="cn('h-full w-full object-cover object-center')"
      />
    </slot>
  </div>
</template>
