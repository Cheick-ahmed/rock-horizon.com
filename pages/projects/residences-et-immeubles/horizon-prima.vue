<script setup lang="ts">
import SwiperWrapper from "~/components/ui/Swiper/Wrapper.vue";
import SwiperSlide from "~/components/ui/Swiper/Slide.vue";

import type { Project } from "~/models/project.models";

const { isMobile } = useBreakpoints();

const facadeImages = {
  group: "Façade",
  pictures: [
    {
      id: "64642cf7-1ffb-433d-874b-f64bd33699c9",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_10_E3AA60B7-15AF-4521-9909-B082EAC21DE1.jpg",
    },
    {
      id: "22a171ff-3a92-40bc-89d3-85f46f191d97",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_12_309DB2A7-1169-4619-A0B5-67BD508AA29E.jpg",
    },
    {
      id: "4e89a09d-8d91-4223-9257-aac4282b6290",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_15_819DDDA7-F64B-40D1-993B-6FD940F1FCD7.jpg",
    },
    {
      id: "3afb4249-1e74-4322-8044-5ef28232ed07",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_16_934BE48E-84C7-471C-82E9-93B7F05EACD5.jpg",
    },
    {
      id: "6a2ec32a-8aad-4ee5-b1e0-055a56489675",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_14_4E4AFFD4-6F9B-44A5-8EE4-1CE019A3C30A.jpg",
    },
    {
      id: "6c5c869b-7e88-4f09-b31b-533aa9e0528b",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_19_C18C22D1-7E3A-4E18-839B-81B8F7FFCF86.jpg",
    },
    {
      id: "0c2f9bdb-28a7-411c-abf1-f743d07b069a",
      imageUrl:
        "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_18_3802B1C7-CD45-40AA-8ACD-53DD14630C01.jpg",
    },
  ],
};

const details: Project.Detail[] = [
  {
    id: "fc635adf-4d41-4245-aeac-27638d5de35a",
    name: "Localisation",
    value: "Toumodi, Côte d'Ivoire",
  },
  {
    id: "195314a2-b155-49cd-ae63-82c3512de16e",
    name: "Type de Bien",
    value: "Appartements",
  },
  {
    id: "40817bda-0170-4ac2-a5c8-85a18893960b",
    name: "Surface Habitable",
    value: "Entre 30 m² et 130 m² selon l'appartement choisi.",
  },
];

const resolvedImages = [
  {
    categorie: "Extérieurs",
    images: [
      {
        id: "edf6bf84-ea18-4505-9297-d03e12803899",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_11_B56227B6-FCE2-4D94-9161-DA5BF3A52276.jpg",
        alt: "",
      },
      {
        id: "31169b56-668f-4ab1-9fb9-bc5faab22c30",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_8_1B4DFF27-18B0-426E-BB11-858366F3FCEA.jpg",
        alt: "",
      },
      {
        id: "69cac5e8-ad08-4c85-9cfb-40653a4d9ac1",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_5_4E198C06-1999-4C45-8A49-E8543B2D6DC9.jpg",
        alt: "",
      },
      {
        id: "174cd89d-0a40-4e1d-b1dc-ff272199abe9",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_17_9A91799A-F630-40B7-A971-B58147469C6D.jpg",
        alt: "",
      },
      {
        id: "2aeb139f-c9e7-4851-a625-864c60cfdff6",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_9_5571C922-8AE0-4C6E-94BA-268777E5AF5E.jpg",
        alt: "",
      },
      {
        id: "b811cf60-4339-498a-8f5a-8f887124ca52",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_2_313B81CA-B2F2-4A20-B50F-99A545D8BBA7.jpg",
        alt: "",
      },
      {
        id: "2a79b267-8a62-4e70-90f5-241ac4fedd83",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_3_463A331C-721D-49C8-9743-4E06CAB2294C.jpg",
        alt: "",
      },
      {
        id: "a3e90b58-515e-4a1e-a493-8ae3b1bd6bb6",
        imageUrl:
          "https://d1tch7ntjva6lz.cloudfront.net/residence_horizon/V1/V1_RESIDENCE-HORIZON_6_AF572389-D0DA-4410-BED8-E752C8FFBD3A.jpg",
        alt: "",
      },
    ],
  },
];

const features = [
  {
    id: "dfe0e732-e48e-42f9-b130-045d8eb248f1",
    name: "Sécurité 24h/24",
    description:
      "Bénéficiez d'une surveillance moderne et d'un accès sécurisé 24h/24 pour garantir la tranquillité d'esprit des résidents.",
  },
  {
    id: "6456ee08-464c-4b7e-8692-78f3f0d4f9db",
    name: "Connexion Internet Haut Débit",
    description:
      "Une connexion Wi-Fi rapide et fiable pour rester connecté à tout moment, que ce soit pour le travail ou les loisirs.",
  },
  {
    id: "a616edba-88b8-4a99-980e-99dd7bb0d223",
    name: "Flat Manager dédié",
    description:
      "Un Flat Manager à votre service pour un accueil personnalisé et un accompagnement sur mesure tout au long de votre séjour.",
  },
  {
    id: "84051965-2b14-48e4-a2ed-6e78b0d9491b",
    name: "Réception digitale 24/7",
    description:
      "Une assistance digitale disponible en permanence pour répondre à vos questions et organiser vos services, à tout moment.",
  },
  {
    id: "94e6361c-b520-40be-8660-6e6ff3125005",
    name: "Espaces de détente en plein air",
    description:
      "Profitez de jardins aménagés et de terrasses pour vous relaxer ou partager des moments conviviaux en plein air.",
  },
  {
    id: "6f5828e9-f761-4e22-ae1d-16acae4514eb",
    name: "Cuisine moderne et pratique",
    description:
      "Une cuisine fonctionnelle et élégante pour vos moments de convivialité, conçue pour un usage quotidien simple et agréable.",
  },
  {
    id: "bad344e3-9b7c-4691-b79b-f2b5ed6af426",
    name: "Design raffiné et ambiance élégante",
    description:
      "Vivez dans un espace pensé par des architectes d’intérieur, où chaque détail reflète le luxe discret et un style unique.",
  },
  {
    id: "4f6ffa4c-3ca7-4b37-994b-edbe0e962380",
    name: "Literie premium",
    description:
      "Profitez d'une literie de qualité supérieure, avec des matelas confortables et du linge de maison haut de gamme, pour des nuits exceptionnelles.",
  },
  {
    id: "e4a30ee7-1621-48da-abcf-0722fb221477",
    name: "Service d’entretien flexible",
    description:
      "Bénéficiez d'un service de ménage à la demande ou hebdomadaire, pour un confort optimal sans contrainte.",
  },
];

useHead({
  title: "Appartements Haut de Gamme avec Services Premium ",
  titleTemplate: "Résidence Horizon Prima à Toumodi |",
  meta: [
    {
      name: "description",
      content:
        "Découvrez la Résidence Horizon Prima à Toumodi, Côte d'Ivoire. Des appartements de luxe et modernes avec des services premium : sécurité 24h/24, flat manager, et internet haut débit.",
    },
    {
      name: "keywords",
      content:
        "résidence de luxe, Toumodi, appartements modernes, Côte d'Ivoire, sécurité 24h/24, flat manager, immobilier premium, résidence élégante",
    },
    {
      property: "og:title",
      content:
        "Résidence Horizon Prima | Appartements de Luxe et Modernes à Toumodi, Côte d'Ivoire",
    },
    {
      property: "og:description",
      content:
        "La Résidence Horizon Prima offre des appartements spacieux, élégants et modernes avec des services haut de gamme à Toumodi.",
    },
    {
      property: "og:url",
      content:
        "https://www.rockhorizon.com/projects/residences-et-immeubles/horizon-prima",
    },
    {
      name: "twitter:title",
      content:
        "Résidence Horizon Prima | Appartements de Luxe et Modernes à Toumodi, Côte d'Ivoire",
    },
    {
      name: "twitter:description",
      content:
        "Découvrez des appartements modernes et luxueux à Toumodi avec des services premium : sécurité 24h/24, flat manager dédié, et internet haut débit.",
    },
  ],
});

defineWebPage([
  {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Résidence Horizon Prima",
    description:
      "Appartements de luxe et modernes situés à Toumodi, Côte d'Ivoire, offrant des services premium tels que la sécurité 24h/24 et un flat manager dédié.",
    url: "https://www.rockhorizon.com/projects/residences-et-immeubles/horizon-prima",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toumodi",
      addressCountry: "CI",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Sécurité 24h/24",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Flat Manager dédié",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Internet haut débit",
        value: true,
      },
    ],
  },
]);
</script>

<template>
  <div class="overflow-hidden">
    <Container>
      <SectionIntro
        eyebrow="Horizon Prima"
        class="py-20 col-span-full max-w-none font-base"
        as="h1"
      >
        <template #title>
          <span
            class="block [text-wrap:balance] max-w-4xl text-3xl font-medium sm:text-6xl"
          >
            Horizon Prima - Vivre l’élégance et le confort en Côte d'Ivoire.
          </span>
        </template>
        <p class="text-lg max-w-3xl font-extralight">
          Découvrez Résidence Horizon Prima : un projet immobilier innovant en
          Côte d’Ivoire, alliant design moderne, confort haut de gamme et cadre
          de vie exceptionnel. Plongez dans un espace pensé pour redéfinir votre
          quotidien.
        </p>
      </SectionIntro>
    </Container>

    <div class="lg:my-12">
      <div class="grid grid-cols-1 gap-y-1 sm:hidden">
        <Image
          v-for="image in facadeImages.pictures"
          :key="image.id"
          :src="image.imageUrl"
          class="aspect-square"
        ></Image>
      </div>

      <SwiperWrapper
        class="hidden sm:block"
        :slides-per-view="1"
        :autoplay="true"
        :effect="true"
      >
        <SwiperSlide v-for="image in facadeImages.pictures" :key="image.id">
          <Image class="aspect-h-9 aspect-w-16" :src="image.imageUrl"></Image>
        </SwiperSlide>

        <template #legend> {{ facadeImages.group }} </template>
      </SwiperWrapper>
    </div>

    <Container class="my-20 lg:my-28">
      <div>
        <h2>Caractéristiques Techniques</h2>
        <Border position="top" class="mt-2">
          <div class="pt-6">
            <Stats :details="details"></Stats>
          </div>
        </Border>
      </div>

      <SectionBlock class="py-16">
        <SectionIntro class="max-w-none">
          <template #title>
            <span
              class="block text-4xl font-base font-light [text-wrap:balance] lg:text-7xl"
            >
              Des espaces pensés pour votre bien-être et votre confort
              quotidien.
            </span>
          </template>
        </SectionIntro>

        <div class="mt-6 lg:mt-16">
          <div
            class="grid grid-cols-1 gap-8 text-lg font-base font-extralight text-neutral-700 lg:grid-cols-2"
          >
            <div class="prose prose-sm lg:prose-lg">
              <p>
                <strong>Appartements Baignés de Lumière.</strong> Chaque
                appartement est doté de larges baies vitrées, permettant à la
                lumière naturelle d'inonder les pièces, créant ainsi une
                atmosphère sereine et accueillante. Les espaces de vie sont
                pensés pour maximiser la luminosité, vous apportant énergie et
                bien-être tout au long de la journée.
              </p>
              <p class="mt-8">
                <strong>Espaces Extérieurs.</strong> Des jardins privés et des
                terrasses aménagées offrent des espaces de détente parfaits pour
                se ressourcer en famille ou entre amis, tout en profitant de la
                nature environnante. Ces espaces verts ont été soigneusement
                conçus pour favoriser la relaxation et offrir des moments de
                convivialité en plein air.
              </p>
            </div>
            <div class="prose prose-sm lg:prose-lg">
              <p>
                <strong>Design Élégant et Fonctionnel.</strong> Le design
                moderne et épuré maximise l'utilisation de chaque espace,
                offrant une fonctionnalité optimale tout en reflétant une
                élégance discrète. Les matériaux choisis sont à la fois durables
                et esthétiques, créant une harmonie parfaite entre style et
                praticité.
              </p>
              <p class="mt-8">
                <strong>Confort et Intimité.</strong> Les chambres sont
                disposées de manière à garantir l'intimité des résidents, tandis
                que les espaces de jour bénéficient d'une organisation fluide et
                agréable. Chaque détail a été pensé pour créer des espaces où
                chacun peut se sentir à l'aise, avec une séparation claire entre
                les espaces privés et les espaces partagés.
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>
    </Container>

    <div class="lg:my-16">
      <Gallerie v-if="isMobile" :items="resolvedImages" class="px-2" />

      <SwiperWrapper
        v-else
        :slides-per-view="3"
        :space-between="6"
        :autoplay="true"
      >
        <template #legend>
          {{ resolvedImages[0].categorie }}
        </template>

        <SwiperSlide
          v-for="picture in resolvedImages[0].images"
          :key="picture.id"
        >
          <Image
            :src="picture.imageUrl"
            :alt="picture.alt"
            class="aspect-h-3 aspect-w-2"
          ></Image>
        </SwiperSlide>
      </SwiperWrapper>
    </div>

    <Container>
      <SectionBlock class="py-8 sm:py-20">
        <div>
          <SectionIntro
            as="h2"
            eyebrow="Des fonctionnalités qui font la différence."
            class="max-w-4xl"
          >
            <p class="block [text-wrap:balance] text-4xl font-normal">
              Découvrez les fonctionnalités qui font de la Résidence Horizon
              Prima un choix incomparable pour un séjour confortable et sans
              souci, adapté à vos besoins.
            </p>
          </SectionIntro>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div
              v-for="(feature, featureIdx) in features"
              :key="feature.id"
              class="flex flex-col"
            >
              <dt class="text-base font-normal leading-7 text-gray-900">
                <div class="mb-6 flex text-xs font-thin">
                  {{
                    featureIdx + 1 < 10 ? `0${featureIdx + 1}` : featureIdx + 1
                  }}
                </div>
                {{ feature.name }}.
              </dt>
              <dd
                class="mt-1 flex flex-auto flex-col font-light text-base leading-7 text-gray-600"
              >
                <p class="flex-auto">{{ feature.description }}</p>
              </dd>
            </div>
          </dl>
        </div>
      </SectionBlock>
    </Container>

    <Container class="my-24 sm:my-16 sm:mb-32">
      <ContactSection></ContactSection>
    </Container>
  </div>
</template>
