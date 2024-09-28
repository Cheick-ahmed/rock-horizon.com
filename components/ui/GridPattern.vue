<script setup lang="ts">
defineProps<{
  withVerticalLines?: boolean;
}>();
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="relative grid gap-[17px] sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-2 ml-[calc(50%-50vw)] h-px w-screen"
          fill="none"
        >
          <defs>
            <pattern
              id=":S1:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S1:)"></rect>
        </svg>
        <svg
          v-if="withVerticalLines"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-3 ml-[calc(50%-50vw)] h-px w-screen"
          fill="none"
        >
          <defs>
            <pattern
              id=":S2:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
        </svg>
        <svg
          v-if="withVerticalLines"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-4 ml-[calc(50%-50vw)] h-px w-screen xl:top-2"
          fill="none"
        >
          <defs>
            <pattern
              id=":S3:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S3:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-5 ml-[calc(50%-50vw)] h-px w-screen xl:hidden"
          fill="none"
        >
          <defs>
            <pattern
              id=":S4:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S4:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-6 ml-[calc(50%-50vw)] h-px w-screen md:top-2 xl:hidden"
          fill="none"
        >
          <defs>
            <pattern
              id=":S5:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S5:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -top-[9px] left-0 right-0 row-start-7 ml-[calc(50%-50vw)] h-px w-screen sm:top-2 md:hidden"
          fill="none"
        >
          <defs>
            <pattern
              id=":S6:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S6:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 right-0 top-2 row-start-8 ml-[calc(50%-50vw)] h-px w-screen sm:hidden"
          fill="none"
        >
          <defs>
            <pattern
              id=":S7:"
              patternUnits="userSpaceOnUse"
              width="16"
              height="1"
            >
              <line
                class="stroke-zinc-950"
                x1="0"
                x2="16"
                y1="0.5"
                y2="0.5"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S7:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -left-[9px] top-[-112px] col-start-1 h-[calc(100%+112px+160px)] w-px"
          fill="none"
        >
          <defs>
            <pattern
              id=":S8:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S8:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -left-[9px] top-[-112px] hidden h-[calc(100%+112px+160px)] w-px sm:col-start-2 sm:block xl:col-start-6"
          fill="none"
        >
          <defs>
            <pattern
              id=":S9:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S9:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -left-[9px] top-[-112px] col-start-7 hidden h-[calc(100%+112px+160px)] w-px xl:block"
          fill="none"
        >
          <defs>
            <pattern
              id=":Sa:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Sa:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -left-[9px] top-[-112px] col-start-10 hidden h-[calc(100%+112px+160px)] w-px xl:block"
          fill="none"
        >
          <defs>
            <pattern
              id=":Sb:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Sb:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -left-[9px] top-[-112px] col-start-11 hidden h-[calc(100%+112px+160px)] w-px xl:block"
          fill="none"
        >
          <defs>
            <pattern
              id=":Sc:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Sc:)"></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -right-2 top-[-112px] col-start-3 h-[calc(100%+112px+160px)] w-px translate-x-1/2 sm:col-start-4 xl:col-start-[16]"
          fill="none"
        >
          <defs>
            <pattern
              id=":Sd:"
              patternUnits="userSpaceOnUse"
              width="1"
              height="16"
            >
              <line
                class="stroke-zinc-950"
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="16"
                stroke-dasharray="2 2"
                stroke-width="1.5"
                stroke-opacity="0.1"
                stroke-linejoin="round"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:Sd:)"></rect>
        </svg>
        <slot />
      </div>
    </div>
  </div>
</template>
