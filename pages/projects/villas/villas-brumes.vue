<script setup lang="ts">
import type { Project } from "~/models/project.models";

import SwiperWrapper from "~/components/ui/Swiper/Wrapper.vue";
import SwiperSlide from "~/components/ui/Swiper/Slide.vue";
const { isMobile } = useBreakpoints();

const details: Project.Detail[] = [
  {
    id: "81f880b2-7e69-407f-b845-a86a2de9749f",
    name: "Lieu",
    value: "Toumodi",
  },
  {
    id: "8277724a-fb52-4bf5-a07c-d8d877216b89",
    name: "Superficie habitable (m²)",
    value: "168.5 / 400m²",
  },
  {
    id: "67e66332-f137-4f68-8f34-860a52cbb913",
    name: "Prix à partir de",
    value: "47.000.000 FCFA",
  },
];

const villas: Project.Item[] = [
  {
    id: "87272073-5dc6-45c4-993d-36cb3527421c",
    name: "Villa B165",
    size: "165,28m²",
    features: [
      {
        id: "e51a8876-6e9c-4d84-93fd-0f0ef8e3f882",
        name: "3 chambres",
        available: true,
      },
      {
        id: "3b09e251-232b-435f-abbd-4fba298a2c12",
        name: "Jardin privé",
        available: true,
      },
      {
        id: "cca4f617-b3c1-488f-9805-af6251c166cf",
        name: "Piscine",
        available: false,
      },
    ],
    price: "47.000.000",
    currency: "FCFA",
  },
  {
    id: "d6f0f8ce-c2c5-449c-9f9f-1a84f5c29161",
    name: "Villa B165-P",
    size: "165,28m²",
    features: [
      {
        id: "02124a82-3d59-4d26-9dfc-0d25129b1158",
        name: "3 chambres",
        available: true,
      },
      {
        id: "1901fd02-f6a7-481d-890e-66809a6de4f2",
        name: "Jardin privé",
        available: true,
      },
      {
        id: "0bc51464-f3ec-4878-ab24-7edbf3068e44",
        name: "Piscine",
        available: true,
      },
    ],
    price: "64.000.000",
    currency: "FCFA",
  },
];

const facadeImages = {
  group: "Façade",
  pictures: [
    {
      id: "4a6b25e8-d3a4-45af-8ecb-bfcc69702d3d",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/FACADE/EXT_CD770CF7-548B-40E4-9AC8-A9886C2DE493_7.jpg",
    },
    {
      id: "961d63f5-a97a-4db7-b7db-b73f43ce1cf8",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/FACADE/EXT_E980A702-DEBE-4D14-9C10-A21639D3C43A_2.jpg",
    },
  ],
};

const exteriorImages = {
  group: "Extérieur",
  pictures: [
    {
      id: "92919bb0-3b4e-4972-9128-33dda53556c2",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_77335AD3-C4F0-40BA-B7B1-2BBA421A78CA_10.jpg",
      alt: "Façade extérieure avec jardin",
    },
    {
      id: "3df9c8c8-1fd9-4128-a7ca-082e224b1993",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_4C0DAFC6-6607-46AC-A681-C15B1CC94B87_4.jpg",
      alt: "Vue extérieure de la villa avec terrasse",
    },
    {
      id: "48efc34b-7c22-4aeb-af12-9548c426d21c",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_BA134CB2-515A-4EC4-BED9-10B700DDC271_1.jpg",
      alt: "Extérieur de la maison avec allée pavée",
    },
    {
      id: "1a66dca4-1a2b-40c3-aa23-c69330474fbb",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_748551CF-6E65-4D9C-82F5-FA3A2E6F491C_3.jpg",
      alt: "Transat en face de la piscine",
    },
    {
      id: "1a66dca4-1a2b-40c3-aa23-c69330474fbb",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_BE65490C-2BD0-4FE6-9F94-E4A322788817_12.jpg",
      alt: "",
    },
    {
      id: "1a66dca4-1a2b-40c3-aa23-c69330474fbb",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_53049B23-45AF-437D-9FC8-6FB45A682870_11.jpg",
      alt: "Transat en face de la piscine",
    },
    {
      id: "1a66dca4-1a2b-40c3-aa23-c69330474fbb",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/ext/EXT_D1130699-6176-4760-B6CD-1ADC1CE01D1B_6.jpg",
      alt: "",
    },
  ],
};

const interiorImages = {
  group: "Intérieurs",
  pictures: [
    {
      id: "95b51c05-7f48-4545-b62a-1b7067c03bee",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_4CF0506B-1AAF-4396-9EFA-88D5B057277C_1.jpg",
      ratio: "aspect-square",
      alt: "Vue du salon avec aménagement moderne",
    },
    {
      id: "0a04191b-84fa-4d57-bebe-5de5275da202",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_3AD45F24-4162-4C58-B194-96E2A15C8377_7.jpg",
      ratio: "aspect-square",
      alt: "Salon spacieux avec mobilier minimaliste",
    },
    {
      id: "ee7a90f2-a7d1-4775-a77a-be37c2ee37a6",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_370809BB-2355-4E11-A86A-EEA05E82E800_8.jpg",
      alt: "Salon spacieux avec mobilier minimaliste",
    },
    {
      id: "8e193e8b-21aa-43f2-a041-1ae4c30024d6",
      imageUrl:
        "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/villas_brumes/int/V1/SALON_CUISINE_V1/V1_SC_D7C3C12B-AD8F-4ED7-B102-7784EB143041_9.jpg",
      alt: "Cuisine équipée avec îlot central",
    },
  ],
};

const faqList = [
  {
    id: "53070946-6c9e-4267-b599-041c3f90995b",
    question: "Comment puis-je suivre l'évolution du projet ?",
    answer:
      "Rock Horizon met à disposition une plateforme en ligne où les acquéreurs peuvent accéder aux différents comptes rendus de chantier, visualiser des photos et obtenir des mises à jour sur l'avancement des travaux.",
  },
  {
    id: "c4cc1959-0216-4ca2-9533-2200a5c18b38",
    question: "Quels sont les délais de livraison pour les projets VEFA ?",
    answer:
      "Nos projets sont rigoureusement planifiés pour respecter les délais de livraison annoncés. En cas de retard, des garanties contractuelles sont prévues pour protéger les acquéreurs.",
  },
  {
    id: "a5e956b3-29b5-4e3e-99c0-7401d084b681",
    question: "Quelles garanties offre Rock Horizon pour un achat en VEFA ?",
    answer:
      "Rock Horizon offre plusieurs garanties, telles que la Garantie d'Achèvement, la Garantie de Parfait Achèvement et la Garantie Décennale, pour assurer la qualité et la livraison du bien.",
  },
  {
    id: "36b6c8a7-c543-4263-bf8b-2bdd1efa5d15",
    question: "Comment est assurée la sécurité de mon investissement ?",
    answer:
      "La sécurité de votre investissement est garantie par des contrats solides et des garanties d'achèvement, ainsi que par des partenariats avec des entreprises de construction reconnues.",
  },
  {
    id: "2e1df541-4bf5-45c9-b291-28af3793f40b",
    question: "Puis-je personnaliser ma villa pendant la construction ?",
    answer:
      "Oui, vous pouvez personnaliser certains aspects de votre villa, comme les finitions intérieures, pour qu'elle corresponde à vos goûts et préférences.",
  },
  {
    id: "12bb148f-ce07-4612-8a07-f114a45b4e54",
    question: "Quelles sont les étapes d'achat en VEFA avec Rock Horizon ?",
    answer:
      "Les étapes incluent la réservation, la signature du contrat, le suivi des travaux, et enfin la remise des clés avec un accompagnement à chaque étape pour une transparence totale.",
  },
];

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
      href: "https://www.rockhorizon.com/projects/villas/villas-brumes",
    },
  ],
});

useSchemaOrg([
  {
    "@type": "WebPage",
    name: "Villas Brumes - Un Refuge d'Élégance et de Sérénité",
    description:
      "Découvrez les Villas Brumes de Rock Horizon, trois villas minimalistes nichées dans une zone calme à Toumodi, alliant luxe discret, confort, et lumière naturelle.",
    url: "https://rockhorizon.com/villas-brumes",
    inLanguage: "fr",
    publisher: {
      "@type": "Organization",
      name: "Rock Horizon",
      url: "https://rockhorizon.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rockhorizon.com/logo.png",
        width: 500,
        height: 200,
      },
    },
  },
  {
    "@type": "Product",
    name: "Villa B165",
    description:
      "Villa B165 de 165 m² située à Toumodi, offrant luxe discret et espaces inondés de lumière. Prix : 47.000.000 FCFA.",
    image: "https://rockhorizon.com/images/villa-b165.jpg",
    brand: {
      "@type": "Brand",
      name: "Rock Horizon",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "XOF",
      price: "47000000",
      availability: "https://schema.org/InStock",
      url: "https://rockhorizon.com/villas-brumes/villa-b165",
    },
  },
  {
    "@type": "Product",
    name: "Villa B165-P",
    description:
      "Villa B165-P de 165 m² avec piscine, située à Toumodi. Luxe et confort pour un prix de 84.000.000 FCFA.",
    image: "https://rockhorizon.com/images/villa-b165-p.jpg",
    brand: {
      "@type": "Brand",
      name: "Rock Horizon",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "XOF",
      price: "64000000",
      availability: "https://schema.org/InStock",
      url: "https://rockhorizon.com/villas-brumes/villa-b165-p",
    },
  },
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment puis-je suivre l'évolution du projet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RockHorizon met à disposition une plateforme en ligne où les acquéreurs peuvent accéder aux différents comptes rendus de chantier, visualiser des photos et obtenir des mises à jour sur l'avancement des travaux.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les délais de livraison pour les projets VEFA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos projets sont rigoureusement planifiés pour respecter les délais de livraison annoncés. En cas de retard, des garanties contractuelles sont prévues pour protéger les acquéreurs.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles garanties offre RockHorizon pour un achat en VEFA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RockHorizon offre plusieurs garanties, telles que la Garantie d'Achèvement, la Garantie de Parfait Achèvement et la Garantie Décennale, pour assurer la qualité et la livraison du bien.",
        },
      },
      {
        "@type": "Question",
        name: "Comment est assurée la sécurité de mon investissement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La sécurité de votre investissement est garantie par des contrats solides et des garanties d'achèvement, ainsi que par des partenariats avec des entreprises de construction reconnues.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je personnaliser ma villa pendant la construction ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, vous pouvez personnaliser certains aspects de votre villa, comme les finitions intérieures, pour qu'elle corresponde à vos goûts et préférences.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles sont les étapes d'achat en VEFA avec RockHorizon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les étapes incluent la réservation, la signature du contrat, le suivi des travaux, et enfin la remise des clés avec un accompagnement à chaque étape pour une transparence totale.",
        },
      },
    ],
  },
]);
</script>

<template>
  <div class="overflow-hidden">
    <Container>
      <GridPattern>
        <SectionIntro
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
            Située dans la ville paisible de Toumodi, au cœur de la Côte
            d'Ivoire, Rock Horizon vous présente les Villas Brumes, des
            résidences de luxe au design minimaliste, pensées pour transformer
            chaque instant en une expérience exceptionnelle. Ces villas
            incarnent une vision moderne du confort, où chaque détail est conçu
            pour allier élégance, lumière naturelle et fonctionnalité, offrant
            ainsi une opportunité rare d'investir dans un art de vivre qui
            redéfinit le luxe immobilier en Côte d'Ivoire.
          </p>
        </SectionIntro>
      </GridPattern>
    </Container>

    <div class="mb-16 sm:mb-0">
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
    <Container class="sm:mb-20">
      <SectionBlock class="py-0 sm:pb-16">
        <SectionIntro class="max-w-none">
          <template #title>
            <span
              class="block font-base font-light [text-wrap:balance] text-5xl"
            >
              Avec ses terrasses et ses espaces inondés de lumière, chaque villa
              offre une sensation de liberté absolue, alliant simplicité et
              confort total.
            </span>
          </template>
        </SectionIntro>

        <div class="mt-12">
          <div
            class="grid grid-cols-1 gap-8 text-lg font-base font-light text-neutral-700 lg:grid-cols-2"
          >
            <div>
              <p>
                Les Villas Brumes sont conçues pour offrir une expérience de vie
                qui inspire et connecte, en parfaite harmonie avec la nature et
                la lumière. Ces villas de plain-pied, pensées pour ceux qui
                recherchent l'équilibre entre simplicité et sophistication,
                proposent un vaste espace salon / salle à manger avec une double
                orientation, permettant de vivre chaque instant pleinement, en
                profitant des terrasses.
              </p>
              <p class="mt-8">
                Grâce à une conception intelligente, chaque villa maximise
                l'utilisation de l'espace en réduisant les zones de circulation
                au minimum, garantissant ainsi une fluidité naturelle dans
                chaque déplacement. Les espaces de jour, baignés de lumière et
                bénéficiant d'une ventilation croisée, créent une atmosphère
                lumineuse et ouverte, tandis que les chambres, judicieusement
                orientées vers le jardin, offrent une intimité totale pour un
                cadre de vie serein et revitalisant.
              </p>
            </div>
            <div>
              <p>
                Chaque détail est pensé pour transformer l'ordinaire en une
                expérience exceptionnelle, parfaitement adaptée aux besoins de
                ceux qui aspirent à un art de vivre authentique et sans
                compromis.
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
      :effect="true"
      :autoplay="true"
    >
      <template #legend>
        {{ interiorImages.group }}
      </template>

      <SwiperSlide v-for="picture in interiorImages.pictures" :key="picture.id">
        <Image
          :src="picture.imageUrl"
          :alt="picture.alt"
          class="aspect-h-8 aspect-w-16"
        ></Image>
      </SwiperSlide>
    </SwiperWrapper>

    <Container>
      <div class="mt-0 sm:mt-16">
        <h3>Présentation des Villas</h3>
        <Border position="top" class="mt-2">
          <div class="pt-6 space-y-4">
            <ProjectItem v-for="item in villas" :item="item" />
          </div>
        </Border>
      </div>

      <Gallerie v-if="isMobile" class="my-20 -mx-2" />

      <SectionBlock class="py-0 px-4 sm:px-0">
        <SectionIntro class="max-w-none">
          <template #title>
            <span class="text-4xl [text-wrap:balance] sm:text-7xl font-[100]">
              Construction de votre Villa : <br />
              Chaque étape réalisée avec soin et précision
            </span>
          </template>

          <p class="font-light">
            Avec Rock Horizon, vous achetez votre villa en VEFA (Vente en l'État
            Futur d'Achèvement) en toute tranquillité. Nous vous garantissons un
            processus d'achat transparent, avec des mises à jour régulières et
            un accompagnement tout au long de la construction. Nos garanties
            telles que la Garantie d'Achèvement et la Garantie Décennale vous
            protègent et assurent que votre investissement est entre de bonnes
            mains.
          </p>
        </SectionIntro>

        <Timeline class="mt-16"></Timeline>
      </SectionBlock>
    </Container>

    <div v-if="!isMobile" class="mb-20">
      <SwiperWrapper
        :slides-per-view-md-up="3"
        :space-between="6"
        :autoplay="true"
      >
        <template #legend>
          {{ exteriorImages.group }}
        </template>

        <SwiperSlide
          v-for="picture in exteriorImages.pictures"
          :key="picture.id"
        >
          <Image :src="picture.imageUrl" class="aspect-h-3 aspect-w-2"></Image>
        </SwiperSlide>
      </SwiperWrapper>
    </div>

    <Container class="mb-16 mt-20 sm:mb-32">
      <FAQ :faqs="faqList"></FAQ>
    </Container>
  </div>
</template>
