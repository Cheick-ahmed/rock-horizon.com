<script setup lang="ts">
interface RouteObject {
  name: string;
  params?: Record<string, any>;
}

interface ButtonProps {
  as?: string;
  to?: string | RouteObject;
  variant?: "solid" | "outline";
  color?: "neutral" | "base";
  className?: string;
  href?: string;
}

const buttonRef = ref<HTMLButtonElement>();

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "solid",
  color: "neutral",
});

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.3)-1px)] px-[calc(theme(spacing.4)-1px)] text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
};

const variantStyles = {
  solid: {
    cyan: "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    neutral:
      "bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80 focus-visible:outline-neutral-900",
    base: "bg-[#D4AF37] text-white hover:bg-[#D4AF37] active:bg-[#D4AF37] active:text-white/80 focus-visible:outline-[#D4AF37]",
  },
  outline: {
    neutral:
      "border-neutral-300 text-neutral-700 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-700/80 focus-visible:outline-neutral-300",
    base: "border-[#D4AF37] text-neutral-700 hover:border-[#D4AF37] active:bg-[#D4AF37] active:text-neutral-700/80",
  },
};

const isLink = computed(() => {
  return props.to !== undefined;
});

const computedClass = computed(() => {
  return [
    baseStyles[props.variant],
    variantStyles[props.variant]?.[props.color],
  ];
});

const resolveRoutePath = computed(() => {
  if (props.to && typeof props.to === "object") {
    return { to: { name: props.to.name, params: props.to.params || {} } };
  }
  return { to: props.to };
});

function clicked() {
  console.log("🚀 ~ clicked ~ ():");
}
</script>

<template>
  <template v-if="isLink">
    <NuxtLink v-bind="resolveRoutePath" :class="computedClass">
      <slot />
    </NuxtLink>
  </template>
  <template v-else>
    <button ref="buttonRef" @click.prevent="clicked" :class="computedClass">
      <slot />
    </button>
  </template>
</template>
