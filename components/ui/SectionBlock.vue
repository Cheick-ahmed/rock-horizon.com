<script setup lang="ts">
import { cn } from "~/utils/cn";
</script>

<template>
  <section :class="cn($props?.class as string | undefined, 'py-28 sm:py-32')">
    <slot />
  </section>
</template>
