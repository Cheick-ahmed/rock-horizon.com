<script setup lang="ts">
defineProps<{
  invert?: boolean;
  title: String;
}>();
</script>

<template>
  <li
    role="list"
    class="text-base"
    :class="
      invert
        ? 'text-neutral-300 before:bg-white after:bg-white/10'
        : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100'
    "
  >
    <Border position="left" class="pl-8" :invert="invert">
      <strong
        class="font-semibold"
        :class="invert ? 'text-white' : 'text-neutral-950'"
      >
        {{ title }}.
      </strong>
      <slot />
    </Border>
  </li>
</template>
