<script lang="ts" setup>
import { cn } from "@/utils/cn";

defineProps<{
  title?: String;
  eyebrow?: Boolean | String;
  smaller?: Boolean;
  centered?: Boolean;
  as?: HtmlElement;
}>();
</script>

<template>
  <div
    :class="cn(centered && 'lg:mx-auto lg:text-center', 'max-w-3xl',$attrs?.class as string | undefined)"
  >
    <component :is="as || 'h2'">
      <template v-if="eyebrow">
        <span class="mb-6 text-xs uppercase font-light text-sand-dark">
          {{ eyebrow }}
        </span>
        <span class="sr-only"> - </span>
      </template>
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
