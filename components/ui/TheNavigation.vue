<script setup></script>

<template>
  <TheHeader />
  <div class="relative isolate mt-32">
    <!-- <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-black to-red-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div> -->
    <Container>
      <div class="max-w-3xl sm:py-32">
        <div class="hidden sm:mb-8 sm:flex">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Découvrez nos nouvelles opportunités de terrain.
            <NuxtLink
              :to="{ name: 'lands' }"
              class="font-semibold text-red-600"
            >
              <span class="absolute inset-0" aria-hidden="true"></span>
              En savoir plus
              <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1
            class="text-9xl font-base font-medium tracking-tight text-neutral-950 [text-wrap:balance]"
          >
            Des terrains fiables à votre portée
          </h1>
          <p class="mt-6 font-base text-xl font-extralight text-neutral-600">
            Découvrez des terrains vérifiés et sécurisés en Côte d'Ivoire avec
            des services transparents et professionnels pour un achat en toute
            sérénité.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <NuxtLink
              :to="{ name: 'lands' }"
              class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-black transition-all duration-500 hover:bg-transparent hover:text-gray-900"
            >
              Découvrez Nos Terrains
            </NuxtLink>
            <NuxtLink
              :to="{ name: 'about' }"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              En savoir plus <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
