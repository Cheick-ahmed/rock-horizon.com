<script setup lang="ts">
import { ref } from "vue";

import Swiper from "swiper";
import {
  Keyboard,
  Navigation,
  Autoplay,
  EffectFade,
  FreeMode,
} from "swiper/modules";
import type { SwiperOptions, Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/effect-fade";

export interface Props {
  pagination?: boolean;
  navigation?: boolean;
  slidesPerView?: number | "auto";
  slidesPerViewSmUp?: number | "auto";
  slidesPerViewMdUp?: number | "auto";
  slidesPerViewLgUp?: number | "auto";
  center?: boolean;
  autoplay?: boolean;
  effect?: boolean;
  spaceBetween?: number | string;
  freeMode?: boolean | "mobile";
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
  navigation: true,
  slidesPerView: 1,
  slidesPerViewSmUp: (props) => props.slidesPerView || 1,
  slidesPerViewMdUp: (props) =>
    props.slidesPerViewSmUp || props.slidesPerView || 1,
  slidesPerViewLgUp: (props) =>
    props.slidesPerViewMdUp || props.slidesPerView || 1,
  center: false,
  autoplay: false,
  freeMode: false,
});

const emit = defineEmits<{
  (event: "update:locked", value: boolean): void;
  (event: "update:activeSlide", index: number): void;
}>();

const CarouselWrapper = ref<HTMLElement | null>(null);
let swiper: SwiperType | null = null;
const isSwiperLocked = ref(false);

const prev = ref<HTMLElement | null>(null);
const next = ref<HTMLElement | null>(null);
const dots = ref<HTMLElement | null>(null);

const initSwiper = () => {
  const options = {
    modules: [Navigation, Keyboard, FreeMode],

    pagination: props.pagination
      ? {
          el: dots.value,
          clickable: true,
        }
      : undefined,

    navigation: {
      nextEl: next.value,
      prevEl: prev.value,
    },

    freeMode: props.freeMode === true || props.freeMode === "mobile",
    on: {
      init: (swiper: SwiperType) => {
        isSwiperLocked.value = swiper.isLocked;
      },
      resize: (swiper: SwiperType) => {
        isSwiperLocked.value = swiper.isLocked;
      },
      slideChange: (swiper: SwiperType) => {
        isSwiperLocked.value = swiper.isLocked;
        emit("update:activeSlide", swiper.activeIndex);
      },
      beforeSlideChangeStart: (swiper: SwiperType) => {
        swiper.el.classList.remove(
          "CarouselWrapper--start",
          "CarouselWrapper--end"
        );
      },
      reachBeginning: (swiper: SwiperType) => {
        swiper.el.classList.add("CarouselWrapper--start");
      },
      reachEnd: (swiper: SwiperType) => {
        swiper.el.classList.add("CarouselWrapper--end");
      },
    },

    slidesPerView: props.slidesPerView,
    spaceBetween: props.spaceBetween || 16,
    breakpoints: {
      640: {
        slidesPerView: props.slidesPerViewSmUp,
        spaceBetween: props.spaceBetween || 24,
      },
      768: {
        slidesPerView: props.slidesPerViewMdUp,
        spaceBetween: props.spaceBetween || 24,
      },
      1024: {
        slidesPerView: props.slidesPerViewLgUp,
        spaceBetween: props.spaceBetween || 24,
      },
    },
    watchOverflow: true,
    keyboard: {
      enabled: true,
    },
  } as SwiperOptions;

  if (props.autoplay) {
    options.modules?.push(Autoplay);

    options["autoplay"] = {
      delay: 5000,
    };
  }

  if (props.effect) {
    options.modules?.push(EffectFade);

    options["effect"] = "fade";
  }

  swiper = new Swiper(CarouselWrapper.value!, options);
};

const destroySwiper = () => {
  swiper?.destroy();
  swiper = null;
};

onBeforeUnmount(() => {
  destroySwiper();
});

onMounted(() => {
  initSwiper();
});
const onSlideChange = () => {
  console.log("Slide changed");
};
</script>

<template>
  <div
    ref="CarouselWrapper"
    class="CarouselWrapper CarouselWrapper--start overflow-hidden"
  >
    <div class="CarouselWrapper__wrapper swiper-wrapper">
      <slot />
    </div>

    <Container>
      <div class="flex items-center justify-between pb-2 mt-8">
        <div
          class="flex flex-wrap items-center gap-3 sm:flex-nowrap text-[10px] uppercase pt-2"
        >
          <h2 class="font-light leading-7 text-neutral-900">Images</h2>
          <div class="font-semibold sm:border-l sm:border-neutral-200 sm:pl-3">
            <span class="text-neutral-600"><slot name="legend" /></span>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button ref="prev" class="CarouselWrapper__prev">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="0.3"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="rotate-180 h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>

          <div class="w-px border-r border-neutral-300 mt-1 h-8"></div>

          <button ref="next" class="CarouselWrapper__next">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="0.3"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.CarouselWrapper {
  &__wrapper {
    will-change: transform;
  }

  &__prev,
  &__next {
    margin: 8px calc(24px / 2) 0;

    &--hidden {
      display: none;
    }
    &.swiper-button-disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
  &__prev {
    transform: rotate(180deg);
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 32px;

    &--hidden {
      display: none;
    }

    &:deep(.swiper-pagination-bullet) {
      background-color: white;
      border-radius: 100%;
      display: block;
      height: 10px;
      width: 10px;
      margin: 0 4px;
      overflow: hidden;
      position: relative;
      transition: color 0.3s ease;
    }

    &:deep(.swiper-pagination-bullet-active) {
      background-color: #d4af37;
    }
  }
}
</style>
