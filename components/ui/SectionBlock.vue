<script setup lang="ts">
import { cn } from "~/utils/cn";
const props = defineProps<{
  class?: string;
}>();

const resolvedStyle = computed(() => cn("py-28 sm:py-32", props?.class));
</script>

<template>
  <section :class="resolvedStyle">
    <slot />
  </section>
</template>
