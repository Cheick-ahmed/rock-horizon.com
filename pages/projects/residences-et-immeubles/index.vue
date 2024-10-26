<script setup lang="ts">
useHead({
  title: "Résidences Modernes & Immeubles de Luxe en Côte d'Ivoire",
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content:
        "Découvrez nos résidences modernes et immeubles de luxe en Côte d'Ivoire. Rock Horizon allie confort, innovation architecturale et cadre de vie exceptionnel.",
    },
    {
      property: "og:title",
      content: "Résidences et Immeubles Modernes en Côte d'Ivoire",
    },
    {
      property: "og:description",
      content:
        "Rock Horizon propose des résidences et immeubles modernes en Côte d'Ivoire, alliant luxe discret, innovation et cadre de vie exceptionnel.",
    },
    {
      property: "og:url",
      content: "https://rockhorizon.com/residences-et-immeubles",
    },
  ],
});

useSchemaOrg([
  {
    "@type": "WebPage",
    name: "Résidences et Immeubles de Luxe en Côte d'Ivoire - Rock Horizon",
    description:
      "Découvrez nos résidences modernes et immeubles de luxe en Côte d'Ivoire, alliant confort, élégance et qualité de vie exceptionnelle. Explorez les projets Rock Horizon.",
    url: "https://rockhorizon.com/residences-immeubles",
    publisher: {
      "@type": "Organization",
      name: "Rock Horizon",
      url: "https://rockhorizon.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rockhorizon.com/logo.png",
        width: 200,
        height: 60,
      },
    },
  },
  {
    "@type": "Organization",
    name: "Rock Horizon",
    url: "https://rockhorizon.com",
    logo: {
      "@type": "ImageObject",
      url: "https://rockhorizon.com/logo.png",
      width: 500,
      height: 200,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-59-02-23-57",
      contactType: "customer service",
      areaServed: "CI",
      availableLanguage: ["French"],
    },
  },
]);
</script>

<template>
  <div class="overflow-hidden bg-white">
    <Container class="py-16 space-y-20">
      <SectionIntro as="h1" class="max-w-3xl">
        <template #title>
          <span
            class="text-4xl font-medium tracking-tight text-neutral-900 sm:text-6xl [text-wrap:balance]"
          >
            Nos résidences et immeubles en Côte d'Ivoire
          </span>
        </template>

        <p class="mt-6 text-lg leading-8 text-neutral-600 font-light">
          Chez Rock Horizon, nous transformons chaque espace en un lieu de vie
          qui allie simplicité et confort. Nos résidences et immeubles
          modernisent l'élégance pour créer des environnements où il fait bon
          vivre.
        </p>
      </SectionIntro>

      <div>
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:ml-auto lg:pl-4 lg:pt-2">
            <div class="lg:max-w-lg">
              <h2 class="text-sm font-thin">01</h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
              >
                Résidence Horizon Prima
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
      </div>
    </Container>
  </div>
</template>
