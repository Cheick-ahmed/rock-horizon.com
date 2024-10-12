<script setup lang="ts">
useSeoMeta({
  title: "Nos projets",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});

const features = [
  {
    name: "Adventure-ready",
    description:
      "The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-04-detail-03.jpg",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    name: "Minimal and clean",
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-04-detail-01.jpg",
    imageAlt: "Double stitched black canvas hook loop.",
  },
  {
    name: "Organized",
    description:
      "Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-04-detail-02.jpg",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];
</script>

<template>
  <Container>
    <GridPattern>
      <!-- <div
        v-for="x in 6"
        class="relative h-full w-full rounded-md bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] forced-colors:outline col-span-5"
      >
        <div class="text-center py-16">
          {{ x }}
        </div>
      </div> -->
      <div class="col-span-full py-32">
        <div class="max-w-2xl">
          <h1 class="font-semibold text-gray-500">Drawstring Canister</h1>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Use it your way
          </p>
          <p class="mt-4 text-gray-500">
            The Drawstring Canister comes with multiple strap and handle options
            to adapt throughout your day. Shoulder sling it, backpack it, or
            handy carry it.
          </p>
        </div>

        <div
          class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col-reverse lg:grid lg:grid-cols-[repeat(15,_minmax(0,_1fr))] lg:items-center lg:gap-x-8"
          >
            <div
              class="mt-6 lg:mt-0 relative sm:col-span-2 md:col-span-1 lg:col-span-5"
            >
              <h3 class="text-lg font-medium text-gray-900">
                {{ feature.name }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ feature.description }}
              </p>
            </div>
            <div class="flex-auto sm:col-span-2 lg:col-span-10">
              <div
                class="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg bg-gray-100"
              >
                <img
                  :src="feature.imageSrc"
                  :alt="feature.imageAlt"
                  class="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridPattern>

    <div class="py-16">Holla</div>
  </Container>
</template>
