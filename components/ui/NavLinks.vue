<script setup lang="ts">
const Links = [
  { label: "A propos", name: "" },
  { label: "Programmes", name: "" },
];

const hoveredIndex = ref<number | null>(null);

function setHoveredIndex(index: number | null) {
  hoveredIndex.value = index;
}
</script>

<template>
  <NuxtLink
    v-for="(link, index) in Links"
    :to="{ name: link.name }"
    :key="link.name"
    @mouseenter="setHoveredIndex(index)"
    @mouseleave="setHoveredIndex"
    class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors delay-150 hover:text-neutral-900 hover:delay-[0ms]"
  >
    <div
      v-if="hoveredIndex === index"
      class="absolute inset-0 rounded-lg bg-neutral-100"
    ></div>
    <span class="relative z-10">{{ link.label }}</span>
  </NuxtLink>
</template>
