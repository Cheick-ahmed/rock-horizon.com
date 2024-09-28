import { ref, onMounted, onUnmounted, computed } from "vue";

export function useBreakpoints() {
  const isClient = typeof window !== "undefined";
  const currentBreakpoint = ref("desktop");

  const getCurrentBreakpoint = () => {
    const width = isClient ? window.innerWidth : 1024;
    if (width < 480) {
      return "mobile";
    } else if (width >= 480 && width <= 768) {
      return "tablet";
    } else if (width > 768 && width <= 1024) {
      return "desktop";
    } else if (width > 1024 && width <= 1440) {
      return "widescreen";
    } else {
      return "ultraWide";
    }
  };

  const updateBreakpoint = () => {
    currentBreakpoint.value = getCurrentBreakpoint();
  };

  // Only execute on client-side
  if (isClient) {
    // Initial setting on component mount
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener("resize", updateBreakpoint);
    });

    // Cleanup the event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener("resize", updateBreakpoint);
    });
  }

  return {
    currentBreakpoint,
    isMobile: computed(() => currentBreakpoint.value === "mobile"),
    isTablet: computed(() => currentBreakpoint.value === "tablet"),
    isDesktop: computed(() => currentBreakpoint.value === "desktop"),
    isWidescreen: computed(() => currentBreakpoint.value === "widescreen"),
    isUltraWide: computed(() => currentBreakpoint.value === "ultraWide"),
  };
}
