<script lang="ts" setup>
import { cn } from "@/utils/cn";

defineProps<{
  title?: String;
  eyebrow?: Boolean | String;
  smaller?: Boolean;
  centered?: Boolean;
  as?: string;
}>();
</script>

<template>
  <div
    :class="cn(centered && 'lg:mx-auto lg:text-center', 'font-base max-w-3xl', $attrs?.class as string | undefined)"
  >
    <template v-if="eyebrow">
      <span class="mb-6 text-[11px] uppercase font-light text-[#28242B]">
        {{ eyebrow }}
      </span>
      <span class="sr-only"> - </span>
    </template>
    <component :is="as || 'h2'">
      <slot name="title">
        <span
          v-html="title"
          class="block font-base tracking-tight [text-wrap:balance]"
          :class="
            smaller
              ? 'text-2xl font-semibold'
              : 'text-4xl font-medium sm:text-5xl'
          "
        >
        </span>
      </slot>
    </component>
    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>
