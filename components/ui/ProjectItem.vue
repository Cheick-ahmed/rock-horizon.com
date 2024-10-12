<script setup lang="ts">
import type { Project } from "~/models/project.models";

defineProps<{
  item: Project.Item;
}>();
</script>

<template>
  <div class="font-base">
    <div class="space-y-8 group">
      <div
        class="relative block cursor-pointer transition-all group-hover:shadow-md rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:items-center sm:justify-between"
      >
        <span class="flex items-center space-y-4">
          <span class="flex flex-col text-sm">
            <span class="text-3xl font-extralight lg:text-6xl text-slate-900">
              {{ item.name }}
            </span>
            <span class="font-thin">
              <span class="block sm:inline">{{ item.size }}</span>
              <span
                v-if="item.features.length > 0"
                class="hidden sm:mx-2 sm:inline"
                aria-hidden="true"
                >&middot;</span
              >

              <span
                v-for="(feature, index) in item.features"
                :key="feature.id"
                class="block sm:inline"
              >
                <span
                  :class="{
                    'line-through decoration-[#333333]': !feature.available,
                  }"
                >
                  {{ feature.name }}
                </span>
                <span
                  v-if="index < item.features.length - 1"
                  class="hidden sm:mx-2 sm:inline"
                  aria-hidden="true"
                >
                  &middot;
                </span>
              </span>
            </span>
          </span>
        </span>
        <span
          class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
        >
          <span class="font-medium text-neutral-900">{{ item.price }}</span>
          <span class="ml-1 text-neutral-500 sm:ml-0">FCFA</span>
        </span>

        <span
          class="pointer-events-none absolute -inset-px rounded-lg border"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  </div>
</template>
