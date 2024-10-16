<script setup lang="ts">
import { useRoute } from "vue-router";

const mobileMenuOpened = ref(false);
const route = useRoute();

watch(
  () => route.path,
  () => {
    mobileMenuOpened.value = false;
  }
);
</script>

<template>
  <header class="ring-1 ring-neutral-950/5">
    <nav>
      <Container class="relative z-50 flex justify-between py-4">
        <div class="relative z-10 flex items-center gap-16">
          <NuxtLink
            :to="{ name: 'index' }"
            class="-m-1.5 p-1.5"
            aria-label="Home"
          >
            <span class="sr-only">Your Company</span>

            <Logo class="h-6 w-auto" />
          </NuxtLink>

          <div class="hidden lg:flex lg:gap-10">
            <NavLinks />
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="lg:hidden">
            <button
              @click.prevent="mobileMenuOpened = !mobileMenuOpened"
              class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-neutral-900 p-2 hover:bg-neutral-200/50 hover:stroke-neutral-600 active:stroke-neutral-900 [&:not(:focus-visible)]:focus:outline-none"
              aria-label="Toggle site navigation"
            >
              <template v-if="mobileMenuOpened">
                <svg
                  class="h-8 w-8"
                  data-slot="icon"
                  fill="none"
                  stroke-width="0.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  ></path>
                </svg>
              </template>
              <template v-else>
                <svg
                  class="h-8 w-8 mt-2"
                  data-slot="icon"
                  fill="none"
                  stroke-width="0.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </template>
            </button>
            <template v-if="mobileMenuOpened">
              <div
                @click.prevent="mobileMenuOpened = false"
                class="fixed inset-0 z-0 bg-neutral-300/60 backdrop-blur"
              />
              <div
                class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-neutral-50 px-4 pb-6 pt-24 shadow-2xl shadow-neutral-900/20"
              >
                <div class="space-y-4">
                  <NuxtLink
                    :to="{ name: 'projects' }"
                    class="block text-base leading-7 tracking-tight text-gray-700"
                  >
                    Nos projets
                  </NuxtLink>
                  <NuxtLink
                    :to="{ name: 'about' }"
                    class="block text-base leading-7 tracking-tight text-gray-700"
                  >
                    A propos
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
          <Button variant="solid" color="base" class="hidden lg:block">
            Nous contacter
          </Button>
        </div>
      </Container>
    </nav>
  </header>
</template>
