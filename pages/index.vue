<script setup lang="ts">
import SwiperWrapper from "~/components/ui/Swiper/Wrapper.vue";
import SwiperSlide from "~/components/ui/Swiper/Slide.vue";
const services = [
  {
    id: "9621a11a-87a5-4bfb-b937-d4e92fb2598f",
    title: "Vérification Juridique Rigoureuse",
    content:
      "Nous effectuons une vérification juridique exhaustive de chaque terrain. Nos experts s'assurent que tous les documents légaux sont en ordre et que le terrain est libre de tout litige, garantissant ainsi une transaction sans risque.",
  },
  {
    id: "920998b6-a6c1-4d06-be7c-250e7e543a77",
    title: "Vidéos et Photos Aériennes",
    content:
      "Nos drones capturent des images et vidéos aériennes de haute qualité de chaque terrain. Ces visuels immersifs vous aident à prendre des décisions éclairées à distance, en vous offrant une vue complète et détaillée de la propriété.",
  },
  {
    id: "7bc7e644-5250-4ab3-a1ce-48a25509431b",
    title: "Accompagnement Personnalisé",
    content:
      "Un conseiller personnel vous est attribué pour vous guider à chaque étape de votre achat. De la sélection du terrain à la signature finale, nous sommes à vos côtés pour répondre à toutes vos questions et vous fournir un soutien sur mesure.",
  },
  {
    id: "429c5fc5-7b8b-4c4e-bdb7-960b96f00c6c",
    title: "Analyse et Conseil en Développement",
    content:
      "Nos spécialistes analysent le potentiel de développement de votre terrain. Ils fournissent des conseils détaillés et des plans de développement personnalisés, vous aidant à maximiser la valeur de votre investissement.",
  },
  {
    id: "fe0d281a-abc2-483d-b817-51b0fb2fee0d",
    title: "Transparence et Sécurité",
    content:
      "Nous offrons un accès complet et sécurisé à tous les documents nécessaires sur notre plateforme. Vous bénéficiez d'une totale transparence tout au long du processus d'achat, renforçant votre confiance dans la transaction.",
  },
  {
    id: "6b3828e0-b3f0-4c8e-81d9-9e6444a6a507",
    title: "Service Après-Vente et Suivi",
    content:
      "Nous ne nous arrêtons pas à la vente. Notre service après-vente vous aide à gérer votre nouveau terrain, que ce soit pour des conseils en construction, des mises à jour régulières sur l'état du terrain ou une assistance continue pour toute question post-achat.",
  },
];

const projects = [
  {
    id: "67fdc786-33c2-4ab9-866d-caa6ed2a1e7a",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_10.jpg",
    name: "Résidence Horizon",
    status: "A venir",
  },
  {
    id: "e3e7897d-9ab8-4cd7-a297-4b7969a848a9",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_3.jpg",
    name: "Villas Brumes",
    status: "En cours",
    description:
      "Un programme immobilier qui réinvente l’intimité et le raffinement, au cœur de paysages sublimes et oubliés.",
  },
  {
    id: "9d802347-8d9a-4bd9-be22-9e1814308985",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_5.jpg",
  },
  {
    id: "eef29cc7-a32d-414f-9622-0b0eb2d0fdeb",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_1.jpg",
  },
  {
    id: "b4feae6c-29c6-4405-8701-13ab7eb754c0",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_12.jpg",
  },
  {
    id: "e3a65c33-b44d-4628-b937-73e084fd3400",
    image: "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/A_6.jpg",
  },
];

const carouselOptions = {
  slidesPerView: 1,
  slidesPerViewMdUp: 1,
  slidesPerViewLgUp: 1,
};

useHead({
  title:
    "Rock-Horizon | Architecture Minimaliste et Immobilier Visionnaire en Côte d'Ivoire",
  meta: [
    {
      name: "description",
      content:
        "Découvrez Rock-Horizon, expert en architecture minimaliste et conception de maisons modernes et élégantes dans des lieux inexplorés. Des projets immobiliers uniques, où innovation et raffinement se rencontrent.",
    },
    {
      name: "keywords",
      content:
        "architecture minimaliste, maisons élégantes, immobilier visionnaire, architecture Côte d'Ivoire, projets immobiliers exclusifs",
    },
    {
      property: "og:title",
      content:
        "Rock-Horizon | Architecture Minimaliste et Immobilier Visionnaire en Côte d'Ivoire",
    },
    {
      property: "og:description",
      content:
        "Rock-Horizon conçoit des maisons élégantes et modernes dans des lieux inexplorés. Découvrez nos projets immobiliers exclusifs.",
    },
    {
      property: "og:image",
      content: "https://rock-horizon.com/path-to-image.jpg",
    },
    {
      property: "og:url",
      content: "https://rock-horizon.com",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Rock-Horizon | Architecture Minimaliste et Immobilier Visionnaire en Côte d'Ivoire",
    },
    {
      name: "twitter:description",
      content:
        "Rock-Horizon conçoit des maisons élégantes et modernes dans des lieux inexplorés. Découvrez nos projets immobiliers exclusifs.",
    },
  ],
  link: [{ rel: "canonical", href: "https://rock-horizon.com" }],
});
</script>

<template>
  <div>
    <Hero />

    <SectionBlock
      class="bg-gradient-to-b from-white from-50% to-neutral-100 py-32"
    >
      <Container>
        <SectionIntro
          eyebrow="Notre vision"
          title="Repenser l'Architecture, Transformer l’Immobilier."
        >
        </SectionIntro>

        <div>
          <div
            class="grid max-w-xl grid-cols-1 gap-8 text-lg font-base font-extralight lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <p>
                Chez <span class="font-medium">Rock-Horizon</span>, nous ne
                faisons pas que construire des maisons, nous redéfinissons
                l'expérience de l'habitat. Nous croyons que le véritable art de
                bâtir consiste à anticiper les besoins de demain, en
                transformant des lieux inattendus en opportunités de valeur
                ajoutée. Là où d'autres voient des terres éloignées, nous voyons
                un potentiel inexploité, des projets d'envergure qui redessinent
                les contours du marché immobilier.
              </p>
              <p class="mt-8">
                Notre vision est audacieuse : investir dans des zones
                émergentes, loin des villes saturées, pour créer des propriétés
                iconiques qui allient élégance discrète, confort moderne, et
                durabilité. Nos projets se démarquent par leur capacité à se
                fondre harmonieusement dans leur environnement naturel, tout en
                offrant des prestations exclusives et innovantes.
              </p>
            </div>
            <div>
              <p>
                En apportant notre expertise et notre engagement pour des
                constructions raffinées, nous donnons vie à des espaces qui
                augmentent la valeur des territoires sous-estimés. Chaque projet
                Rock-Horizon est conçu pour attirer une clientèle exigeante, à
                la recherche d’une expérience résidentielle unique et accessible
                à la fois. Nous faisons le pari d’un immobilier qui ne se
                contente pas d’exister, mais qui transforme.
              </p>
              <p class="mt-8">
                Nous choisissons des terrains "loins" des centres urbains pour
                bâtir des sanctuaires modernes, où la rentabilité et la vision à
                long terme se conjuguent. Notre approche allie rigueur dans la
                gestion des coûts et innovation dans le design, pour offrir un
                produit final qui inspire et séduit.”
              </p>
            </div>
          </div>
          <div class="mt-10 flex">
            <Button as="NuxtLink" to="about" variant="outline">
              En savoir plus <span class="ml-1" aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </Container>
    </SectionBlock>

    <SectionBlock class="relative isolate">
      <Container>
        <SectionIntro
          eyebrow="Nos projets"
          title="Des projets qui changent l’horizon"
        >
        </SectionIntro>
      </Container>
      <div class="mx-auto max-w-[82rem] px-6">
        <div
          class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 sm:max-w-none lg:grid-cols-2"
        >
          <ProjectCard :project="projects[0]" />
          <ProjectCard :project="projects[1]" />
        </div>
      </div>
    </SectionBlock>
  </div>
</template>
