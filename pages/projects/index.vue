<script setup lang="ts">
useHead({
  title: "Projets Immobiliers | Résidences, Immeubles & Villas",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les projets immobiliers de Rock Horizon : résidences, immeubles et villas. Des espaces uniques, alliant design minimaliste et confort moderne.",
    },
    {
      property: "og:title",
      content:
        "Rock Horizon | Projets Immobiliers | Résidences, Immeubles & Villas",
    },
    {
      property: "og:description",
      content:
        "Explorez les résidences, immeubles et villas de RockHorizon, conçus pour offrir un cadre de vie élégant, moderne et fonctionnel.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://rockhorizon.com/projects",
    },
  ],
});

defineWebPage({
  "@type": "WebPage",
});
</script>

<template>
  <div class="overflow-hidden bg-white">
    <Container class="py-16 space-y-20">
      <SectionIntro class="max-w-3xl">
        <template #title>
          <span
            class="text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl [text-wrap:balance]"
          >
            Nos projets : Résidences, Immeubles et Villas.
          </span>
        </template>

        <p class="mt-6 text-lg leading-8 text-neutral-600 font-light">
          Explorez l’ensemble des projets Rock Horizon, comprenant des
          résidences, immeubles et villas, conçus pour offrir un cadre de vie
          élégant, moderne et fonctionnel. Que ce soit nos résidences comme
          <NuxtLink
            :to="{ name: 'projects-residences-et-immeubles-horizon-prima' }"
            class="italic underline"
          >
            Horizon Prima
          </NuxtLink>
          et Horizon Nova, ou nos
          <NuxtLink
            :to="{ name: 'projects-villas-villas-brumes' }"
            class="italic underline"
          >
            Villas Brumes</NuxtLink
          >, chaque projet est pensé pour sublimer l’architecture tout en
          répondant aux besoins de confort et de bien-être.
        </p>
      </SectionIntro>

      <div class="space-y-32 sm:space-y-48">
        <!-- First project -->
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:ml-auto lg:pl-4 lg:pt-2">
            <div class="lg:max-w-lg">
              <h2 class="text-sm font-thin">01</h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
              >
                Résidence Horizon
              </p>
              <p class="mt-4 text-md leading-8 text-neutral-600">
                Résidence Horizon vous offre un cadre paisible où modernité et
                confort se rencontrent, avec des espaces lumineux pensés pour un
                bien-être absolu.
              </p>
              <dl
                class="mt-6 max-w-xl space-y-4 text-base leading-7 text-neutral-600 lg:max-w-none"
              >
                <div>
                  <dt class="inline font-semibold text-neutral-900">
                    De grands appartements baignés de lumière naturelle.
                  </dt>
                  <dd>
                    Grâce aux larges baies vitrées, offrant une vue imprenable
                    et une atmosphère sereine.
                  </dd>
                </div>
                <div>
                  <dt class="inline font-semibold text-neutral-900">
                    Espaces verts soigneusement aménagés.
                  </dt>
                  <dd>
                    Parfaits pour se détendre et se ressourcer, loin du tumulte
                    urbain.
                  </dd>
                </div>
                <div>
                  <dt class="font-semibold text-neutral-900">
                    Un design moderne alliant élégance et confort.
                  </dt>
                  <dd>
                    Pensé pour offrir une qualité de vie exceptionnelle à chaque
                    résident.
                  </dd>
                </div>
              </dl>
              <p class="mt-8">
                <NuxtLink
                  :to="{
                    name: 'projects-residences-et-immeubles-horizon-prima',
                  }"
                  class="inline-flex items-center gap-x-1.5 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                >
                  Découvrir en détail
                  <svg
                    class="-mr-0.5 h-5 w-5"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </p>
            </div>
          </div>
          <div class="flex items-start justify-end lg:order-first">
            <img
              loading="lazy"
              src="https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_12_309DB2A7-1169-4619-A0B5-67BD508AA29E.jpg"
              alt="Product screenshot"
              class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem]"
              width="2432"
              height="1442"
            />
          </div>
        </div>

        <!-- Second Project -->

        <div class="relative">
          <div
            class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
          >
            <div
              class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16"
            >
              <div class="lg:max-w-lg">
                <h2 class="text-sm font-thin">02</h2>
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
                >
                  Villas Brumes
                </p>
                <p class="mt-4 text-md leading-8 text-neutral-600">
                  Résidence Horizon vous offre un cadre paisible où modernité et
                  confort se rencontrent, avec des espaces lumineux pensés pour
                  un bien-être absolu.
                </p>
                <dl
                  class="mt-6 max-w-xl space-y-4 text-base leading-7 text-neutral-600 lg:max-w-none"
                >
                  <div>
                    <dt class="inline font-semibold text-neutral-900">
                      De grands appartements baignés de lumière naturelle.
                    </dt>
                    <dd>
                      Grâce aux larges baies vitrées, offrant une vue imprenable
                      et une atmosphère sereine.
                    </dd>
                  </div>
                  <div>
                    <dt class="inline font-semibold text-neutral-900">
                      Espaces verts soigneusement aménagés.
                    </dt>
                    <dd>
                      Parfaits pour se détendre et se ressourcer, loin du
                      tumulte urbain.
                    </dd>
                  </div>
                  <div>
                    <dt class="font-semibold text-neutral-900">
                      Un design moderne alliant élégance et confort.
                    </dt>
                    <dd>
                      Pensé pour offrir une qualité de vie exceptionnelle à
                      chaque résident.
                    </dd>
                  </div>
                </dl>
                <p class="mt-8">
                  <NuxtLink
                    :to="{
                      name: 'projects-villas-villas-brumes',
                    }"
                    class="inline-flex items-center gap-x-1.5 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                  >
                    Découvrir en détail
                    <svg
                      class="-mr-0.5 h-5 w-5"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </NuxtLink>
                </p>
              </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
              <div
                class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
              >
                <img
                  class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://d1tch7ntjva6lz.cloudfront.net/villas_brumes/ext/FACADE/EXT_E980A702-DEBE-4D14-9C10-A21639D3C43A_2.jpg"
                  alt="Façade Villas Brumes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
