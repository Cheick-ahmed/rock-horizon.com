<script setup lang="ts">
import SwiperWrapper from "~/components/ui/Swiper/Wrapper.vue";
import SwiperSlide from "~/components/ui/Swiper/Slide.vue";

const { isMobile } = useBreakpoints();

useHead({
  title: "Nos villas",
});

const projects = computed(() => {
  return [
    {
      id: "2f8cc85a-1c59-4335-bc98-4b1840274ef1",
      name: "Villa Brume",
      details: {
        total_area: "165.48 m²",
        bedrooms: 3,
        bathrooms: 3,
        kitchen_area: "21.08 m²",
        living_room_area: "36.85 m²",
        garage_area: "32.85 m²",
        type: "Single-story",
        features: ["Direct access", "Landscaped garden", "Swimming pool"],
      },
      image_url:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_77335AD3-C4F0-40BA-B7B1-2BBA421A78CA_10.jpg",
      slug: "villas-brumes",
    },
    {
      id: "30322413-bb50-4fb0-a14b-15b6c0b601d0",
      name: "",
      details: {
        total_area: "NC",
        bedrooms: "NC",
        bathrooms: "NC",
        kitchen_area: "NC",
        living_room_area: "NC",
        garage_area: "NC",
        type: "NC",
        features: [],
      },
      image_url: "",
      slug: "",
    },
    {
      id: "5cb03859-8e8a-4d03-8e61-727df15b357a",
      name: "",
      details: {
        total_area: "NC",
        bedrooms: "NC",
        bathrooms: "NC",
        kitchen_area: "NC",
        living_room_area: "NC",
        garage_area: "NC",
        type: "NC",
        features: [],
      },
      image_url: "",
      slug: "",
    },
  ];
});
</script>

<template>
  <div class="py-24">
    <Container>
      <SectionIntro eyebrow="Nos Villas">
        <template #title>
          <span
            class="mt-2 uppercase text-xl block [text-wrap:balance] sm:text-6xl font-thin"
          >
            Nos Villas : L’Équilibre entre Élégance et Fonctionnalité.
          </span>
        </template>
      </SectionIntro>
    </Container>
    <div class="py-8 space-y-16 px-2">
      <div v-if="!isMobile">
        <SwiperWrapper
          :slides-per-view-lg-up="2.5"
          :slides-per-view-md-up="2"
          :spaceBetween="16"
          :free-mode="true"
        >
          <SwiperSlide v-for="(project, index) in projects" :key="project.id">
            <article
              class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-[34rem]"
            >
              <Image
                v-if="project.image_url"
                class="cursor-grab absolute inset-0 -z-10 object-cover"
                :src="project.image_url"
              ></Image>
              <svg
                v-else
                width="550"
                height="550"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="cursor-grab absolute mx-auto inset-0 -z-10 object-cover stroke-neutral-500"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.5"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>

              <div
                class="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40"
              ></div>
              <div
                class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-black/10"
              ></div>
              <h3 class="text-3xl font-thin leading-6 text-white">
                <template v-if="project.name">
                  <NuxtLink :to="{ name: `projects-villas-${project.slug}` }">
                    <span class="absolute inset-0"></span>
                    {{ project.name }}
                  </NuxtLink>
                </template>

                <template v-else>
                  <NuxtLink :to="{ name: '' }">
                    <span class="absolute inset-0"></span>
                    A venir
                  </NuxtLink>
                </template>
              </h3>

              <div class="mt-5 flex items-center justify-between">
                <div
                  class="items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-100"
                >
                  <h3 class="uppercase font-thin space-y-1">
                    <span class="block">{{ project.details.total_area }}</span>
                    <span class="block">
                      {{ project.details.bedrooms }}
                      {{ project.details.bedrooms ? "" : "chambres" }}
                      / {{ project.details.bathrooms }}
                      {{
                        project.details.bathrooms === "NC"
                          ? ""
                          : "salles de bain"
                      }}
                    </span>
                    <span class="block">
                      {{
                        project.details.type === "Single-story"
                          ? "De plain-pied"
                          : project.details.type === "NC"
                          ? "NC"
                          : `${project.details.type} étage`
                      }}
                    </span>
                  </h3>
                </div>

                <p class="hidden text-white font-thin lg:flex">
                  {{ index + 1 < 9 ? `0${index + 1}` : `${index + 1}` }}
                </p>
              </div>
            </article>
          </SwiperSlide>
        </SwiperWrapper>
      </div>
      <div v-else class="space-y-2">
        <article
          v-for="project in projects"
          :key="project.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-[34rem]"
        >
          <Image
            v-if="project.image_url"
            class="cursor-grab absolute inset-0 -z-10 object-cover"
            :src="project.image_url"
          ></Image>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="cursor-grab absolute inset-0 -z-10 object-cover stroke-neutral-500"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40"
          ></div>
          <div
            class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-black/10"
          ></div>

          <h3 class="text-3xl font-thin leading-6 text-white">
            <template v-if="project.name">
              <NuxtLink :to="{ name: `projects-villas-${project.slug}` }">
                <span class="absolute inset-0"></span>
                {{ project.name }}
              </NuxtLink>
            </template>

            <template v-else>
              <NuxtLink :to="{ name: '' }">
                <span class="absolute inset-0"></span>
                A venir
              </NuxtLink>
            </template>
          </h3>

          <div class="mt-5 flex items-center justify-between">
            <div
              class="items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-100"
            >
              <h3 class="uppercase font-thin space-y-1">
                <span class="block">{{ project.details.total_area }}</span>
                <span class="block">
                  {{ project.details.bedrooms }}
                  {{ project.details.bedrooms ? "" : "chambres" }}
                  / {{ project.details.bathrooms }}
                  {{
                    project.details.bathrooms === "NC" ? "" : "salles de bain"
                  }}
                </span>
                <span class="block">
                  {{
                    project.details.type === "Single-story"
                      ? "De plain-pied"
                      : project.details.type === "NC"
                      ? "NC"
                      : `${project.details.type} étage`
                  }}
                </span>
              </h3>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
