<script setup lang="ts">
import type { Project } from "~/models/project.models";

import SwiperWrapper from "~/components/ui/Swiper/Wrapper.vue";
import SwiperSlide from "~/components/ui/Swiper/Slide.vue";
const { isMobile } = useBreakpoints();

const { getProject } = useProjects();
const route = useRoute();

const slug = ref(route.params.slug as string);

const project = computed<Project.Root | undefined>(() =>
  getProject(slug.value)
);

const resolvedProjectSlug = computed(() => {
  if (!project.value) {
    return "villas-brumes";
  }
});

const details: Project.Detail[] = [
  {
    id: "326ca596-824d-4caa-837f-232cc3d4f2f6",
    name: "Lieu",
    value: "Toumodi",
  },
  {
    id: "b903af02-6f1a-4ee6-8a29-9548cc63b851",
    name: "Superficie totale (m²)",
    value: "1200",
  },
  { id: "a9008906-a2df-4211-9610-19716d4cbd69", name: "Villas", value: "3" },
  {
    id: "6ef31cc1-acfd-488c-92b0-574485627faa",
    name: "Prix à partir de",
    value: "47.000.000 FCFA",
  },
];

const villas: Project.Item[] = [
  {
    id: "23355433-d9c9-4802-989e-711708a21e89",
    name: "Villa B360",
    size: "358m²",
    features: [
      {
        id: "8f9a009a-d9b0-414d-9efa-8d4ff2a6dd63",
        name: "3 chambres",
        available: true,
      },
      {
        id: "513fe7c5-f75b-474d-bdd7-90f650d9eb84",
        name: "Jardin privé",
        available: true,
      },
      {
        id: "59a207d0-c571-4294-ae47-af6b7a9992ed",
        name: "Piscine",
        available: false,
      },
    ],
    price: "47.000.000",
    currency: "FCFA",
  },
  {
    id: "9f6cd613-8614-429b-a65e-fabaa0437347",
    name: "Villa B330-P",
    size: "328m²",
    features: [
      {
        id: "247cc737-9b53-46f6-a164-3ffda235a324",
        name: "3 chambres",
        available: true,
      },
      {
        id: "7dd89b8b-f078-4993-a386-3f6dd9731033",
        name: "Jardin privé",
        available: true,
      },
      {
        id: "fc3b0e64-2ae9-4498-bb6c-358cc4d38798",
        name: "Piscine",
        available: true,
      },
    ],
    price: "60.000.000",
    currency: "FCFA",
  },
];

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug as string;
  }
);

useHead({
  title: "Villas Brumes : Villas Exclusives et Modernes en Côte d'Ivoire",
  titleTemplate: "",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les Villas Brumes, un projet exclusif de trois villas modernes et élégantes, nichées dans un cadre naturel préservé. Investissez dans l'immobilier raffiné en Côte d'Ivoire.",
    },
    {
      name: "keywords",
      content:
        "villas modernes Côte d'Ivoire, villas minimalistes, villas de luxe, immobilier exclusif, architecture raffinée",
    },
    {
      property: "og:title",
      content: "Villas Brumes | Villas Modernes et Exclusives en Côte d'Ivoire",
    },
    {
      property: "og:description",
      content:
        "Découvrez les Villas Brumes, un projet de trois villas modernes et élégantes nichées dans un cadre naturel préservé.",
    },
    {
      property: "og:image",
      content:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/4.jpg",
    },
    {
      property: "og:url",
      content:
        "https://rockhorizon.com/projects/ff361243-30f7-4935-b750-10ea1a7bd583",
    },
    {
      name: "twitter:title",
      content: "Villas Brumes | Villas Modernes et Exclusives en Côte d'Ivoire",
    },
    {
      name: "twitter:description",
      content:
        "Découvrez les Villas Brumes, un projet de trois villas modernes et élégantes nichées dans un cadre naturel préservé.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://rockhorizon.com/projects/ff361243-30f7-4935-b750-10ea1a7bd583",
    },
  ],
});
</script>

<template>
  <div>
    <Container>
      <GridPattern>
        <SectionIntro
          v-if="project"
          class="py-20 col-span-full max-w-3xl font-base"
          eyebrow="Projet"
          as="h1"
        >
          <template #title>
            <span
              class="block [text-wrap:balance] text-4xl font-medium sm:text-7xl"
            >
              Villas Brumes
            </span>
          </template>
          <p class="text-lg font-extralight">
            Une enclave privée de trois villas élégantes et minimalistes,
            nichées dans un cadre naturel inexploré. Chaque villa combine
            confort moderne et design intemporel, avec une attention
            particulière aux détails et à la lumière naturelle. Ces sanctuaires
            offrent une expérience résidentielle unique, où l’intimité et le
            raffinement se rencontrent.
          </p>
        </SectionIntro>
      </GridPattern>
    </Container>

    <div v-if="project" class="mb-16 sm:mb-0">
      <div class="sm:hidden">
        <Image
          class="aspect-video"
          src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_10.jpg"
        ></Image>
      </div>

      <Image
        class="aspect-video hidden sm:block"
        src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/3_16-9.jpg"
      ></Image>
    </div>

    <template v-if="project">
      <Container class="sm:mb-20">
        <SectionBlock class="py-0 sm:pb-16">
          <SectionIntro class="max-w-5xl">
            <template #title>
              <span
                class="block font-base font-light [text-wrap:balance] text-5xl"
              >
                Avec ses terrasses et ses espaces inondés de lumière, chaque
                villa offre une sensation de liberté absolue, alliant luxe
                discret et confort total.
              </span>
            </template>
          </SectionIntro>

          <div class="mt-12">
            <div
              class="grid grid-cols-1 gap-8 text-lg font-base font-light text-neutral-700 lg:grid-cols-2"
            >
              <div>
                <p>
                  Les villas brumes sont conçues pour ceux qui recherchent la
                  simplicité raffinée et un espace de vie baigné de lumière
                  naturelle. Ces villas de plain-pied offrent un grand espace
                  salon-salle à manger avec double orientation, permettant de
                  profiter des terrasses tout au long de l’année.
                </p>
                <p class="mt-8">
                  Chaque villa maximise l’utilisation de l’espace grâce à une
                  conception astucieuse qui réduit au minimum les zones de
                  circulation. Les espaces de jour bénéficient d’une ventilation
                  croisée et d’un accès direct aux terrasses opposées, tandis
                  que les chambres, parfaitement disposées, donnent toutes sur
                  le jardin pour plus d'intimité.
                </p>
              </div>
              <div>
                <p>
                  Le design des villas divise les espaces de manière intuitive :
                  les chambres et la cuisine sont isolées du salon, permettant
                  une fonctionnalité optimale. Chaque villa comprend trois
                  chambres : deux chambres doubles avec salle de bain en suite,
                  et une troisième chambre, adaptable en bureau selon vos
                  besoins."
                </p>
              </div>
            </div>
          </div>
        </SectionBlock>

        <div class="my-16 sm:mb-32">
          <h3>Détails</h3>
          <Border position="top" class="mt-2">
            <div class="pt-6">
              <Stats :details="details"></Stats>
            </div>
          </Border>
        </div>
      </Container>

      <SwiperWrapper
        v-if="!isMobile"
        :slides-per-view="1"
        :autoplay="true"
        :effect="true"
      >
        <SwiperSlide>
          <Image
            class="aspect-video"
            src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/3_16-9.jpg"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            class="aspect-video"
            src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/2_16-9.jpg"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            class="aspect-video"
            src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/8_16-9.jpg"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            class="aspect-video"
            src="https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/1_16-9.jpg"
          ></Image>
        </SwiperSlide>
      </SwiperWrapper>

      <Container>
        <div>
          <h3>Présentation des Villas</h3>
          <Border position="top" class="mt-2">
            <div class="pt-6 space-y-4">
              <ProjectItem v-for="item in villas" :item="item" />
            </div>
          </Border>
        </div>

        <Gallerie class="my-20" />

        <SectionBlock class="py-0 px-4 sm:px-0">
          <SectionIntro>
            <template #title>
              <span class="text-4xl [text-wrap:balance] sm:text-7xl font-[100]">
                Votre villa, étape par étape: <br />
                une vision réalisée avec précision.
              </span>
            </template>
          </SectionIntro>

          <Timeline class="mt-16"></Timeline>
        </SectionBlock>
      </Container>
    </template>

    <template v-else>
      <Container class="min-h-screen py-16 pt-32">
        <div class="text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 class="mt-2 text-sm font-semibold text-gray-900">
            Aucun projet correspondant à votre recherche n'a été trouvé.
          </h3>

          <div class="mt-6">
            <Button
              variant="solid"
              :to="{
                name: 'index',
              }"
            >
              Revenir à l'accueil
            </Button>
          </div>
        </div>
      </Container>
    </template>
  </div>
</template>
