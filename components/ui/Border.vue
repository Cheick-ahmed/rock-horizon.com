<script setup lang="ts">
interface Props<T> {
  as?: T;
  position?: "top" | "left";
  invert?: boolean;
}
const props = defineProps<Props<"div">>();

const resolvedStyle = computed(() => {
  const baseStyles = props.invert
    ? "before:bg-white after:bg-white/10"
    : "before:bg-neutral-950 after:bg-neutral-950/10";

  const positionStyles =
    props.position === "top"
      ? "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
      : "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px";

  return `${baseStyles} ${positionStyles}`;
});
</script>

<template>
  <component
    :is="as ?? 'div'"
    class="relative before:absolute after:absolute"
    :class="resolvedStyle"
  >
    <slot></slot>
  </component>
</template>
