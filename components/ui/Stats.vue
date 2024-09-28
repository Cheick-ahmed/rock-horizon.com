<script setup lang="ts">
import type { Project } from "~/models/project.models";

defineProps<{
  details: Project.Detail[];
}>();
</script>

<template>
  <dl class="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-16">
    <div
      v-for="detail in details"
      :key="detail.id"
      class="flex flex-col gap-y-1"
    >
      <dt class="text-xs leading-7 uppercase text-neutral-600 font-extralight">
        {{ detail.name }}
      </dt>
      <dd class="text-lg font-light tracking-tight text-neutral-900 sm:text-xl">
        {{ detail.value }}
      </dd>
    </div>
  </dl>
</template>
