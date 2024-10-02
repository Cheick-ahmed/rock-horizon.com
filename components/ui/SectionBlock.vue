<script setup lang="ts">
import { cn } from "~/utils/cn";
</script>

<template>
  <section :class="cn('py-28 sm:py-32', $props?.class as string | undefined)">
    <slot />
  </section>
</template>
