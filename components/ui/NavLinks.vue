<script setup lang="ts">
const Links = [
  { label: "Nos projets", name: "projects" },
  { label: "A propos", name: "about" },
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
    active-class="bg-neutral-200"
    @mouseenter="setHoveredIndex(index)"
    @mouseleave="setHoveredIndex"
    class="relative -mx-3 -my-4 transform translate-y-1 rounded-lg px-3 py-2 text-sm text-neutral-900 font-medium transition-colors delay-150 hover:text-neutral-900 hover:delay-[0ms]"
  >
    <div
      v-if="hoveredIndex === index"
      class="absolute inset-0 rounded-lg bg-neutral-100"
    ></div>
    <span class="relative z-10">{{ link.label }} </span>
  </NuxtLink>
</template>
