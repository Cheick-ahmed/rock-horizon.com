<script setup lang="ts">
const steps = [
  {
    id: "e63a8e99-4b59-4d08-9f94-8c8b7c42e8d1",
    name: "Signature du contrat de réservation",
    description:
      "<strong>10% à la signature du contrat de réservation (dépôt de garantie).</strong> Première étape pour sécuriser votre bien et entamer le processus d'achat.",
  },
  {
    id: "a9b7d5c2-bf61-4d32-bc84-dcc8777430f2",
    name: "Contrat d'engagement",
    description:
      "<strong>20% au contrat d'engagement.</strong> Formalisation de l'engagement avec un paiement supplémentaire qui garantit la poursuite du projet.",
  },
  {
    id: "bb5a731c-2b77-4f1d-bc57-bbb7c2e827d3",
    name: "Acte d'acquisition",
    description:
      "<strong>35% à l'acte d'acquisition.</strong> Paiement lors de l'acte d'acquisition, vous devenez officiellement propriétaire du bien en cours de construction.",
  },
  {
    id: "c6d4a9c5-70b4-42e4-b5a4-4f4d8c1a7bfc",
    name: "Achèvement des fondations",
    description:
      "<strong>45% à l'achèvement des fondations.</strong> À ce stade, les fondations sont terminées, garantissant une base solide pour la suite des travaux.",
  },
  {
    id: "e5d3f1b3-bdc5-4f7b-8f8a-57f1d2c4b5d6",
    name: "Achèvement des murs",
    description:
      "<strong>60% à l'achèvement des murs.</strong> Paiement qui coïncide avec la montée des murs, marquant une étape significative de la construction.",
  },
  {
    id: "fd2e3c7b-4b55-4e8e-8d97-2d8b9b4a6b8d",
    name: "Achèvement de la toiture",
    description:
      "<strong>80% à l'achèvement de la toiture.</strong> Une fois la toiture terminée, votre bien prend véritablement forme.",
  },
  {
    id: "ab9c0e2e-8c4d-4c2a-b7d5-1e4f9d7b6a5e",
    name: "Achèvement des peintures",
    description:
      "<strong>95% à l'achèvement des peintures.</strong> Le bien est presque prêt, avec les finitions intérieures en cours d'achèvement.",
  },
  {
    id: "d9e7a2b5-4b23-4a2d-9f58-9d4e5b7a8e6f",
    name: "Remise des clés",
    description:
      "<strong>100%</strong> à la remise des clés. Dernière étape, vous recevez les clés de votre bien prêt à être habité.",
  },
];
</script>

<template>
  <div class="mx-auto max-w-2xl lg:max-w-none">
    <dl class="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
      <div v-for="(step, stepIdx) in steps" class="flex flex-col">
        <dt
          class="flex items-center gap-x-2 text-base font-semibold leading-7 text-neutral-900"
        >
          <span class="font-thin items-center justify-center">
            {{ stepIdx + 1 > 9 ? stepIdx + 1 : `0${stepIdx + 1}` }}.
          </span>
          {{ step.name }}
        </dt>
        <dd class="text-base leading-7 text-neutral-600">
          <p>
            Commodo nec sagittis tortor mauris sed. Turpis tortor quis
            scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus
            volutpat eu. Phasellus praesent ligula sit faucibus.
          </p>
        </dd>
      </div>
    </dl>
  </div>

  <!-- <div class="">
    <dl
      class="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0"
    >
      <div v-for="(feature, idx) in steps" :key="feature.name" class="relative">
        <dt class="inline font-semibold text-gray-900">
          <span class="absolute left-1 top-1">{{ idx + 1 }}</span>
        </dt>
        <dd class="inline" v-html="feature.description"></dd>
      </div>
    </dl>
  </div> -->
  <!-- <nav aria-label="Progress">
    <div class="overflow-hidden">
      <div
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
      >
        <div
          v-if="stepIdx !== steps.length - 1"
          class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-neutral-300"
          aria-hidden="true"
        />
        <div class="group relative flex items-start text-[9px] font-light">
          <span class="flex h-9 items-center" aria-hidden="true">
            <span
              class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-white group-hover:border-neutral-400"
            >
              {{ stepIdx + 1 > 9 ? stepIdx + 1 : `0${stepIdx + 1}` }}
            </span>
          </span>
          <span class="ml-4 flex min-w-0 flex-col space-y-1">
            <span class="text-sm font-medium text-neutral-800">
              {{ step.name }}
            </span>
            <span
              class="text-sm text-neutral-500 prose"
              v-html="step.description"
            ></span>
          </span>
        </div>
      </div>
    </div>
  </nav> -->
</template>
