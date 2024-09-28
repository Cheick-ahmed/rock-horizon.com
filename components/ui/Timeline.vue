<script setup lang="ts">
const timeline = [
  {
    name: "Réservation",
    description:
      "Réservez votre villa en versant un acompte. Un contrat vous sera fourni pour sécuriser votre investissement en VEFA.",
    step: "Etape 1",
  },
  {
    name: "Signature du contrat",
    description:
      "Signature officielle du contrat VEFA. Vous recevrez un calendrier des travaux et les options de personnalisation.",
    step: "Etape 2",
  },
  {
    name: "Début des travaux",
    description:
      "Lancement des travaux : préparation du terrain, fondations et élévation de la structure. Suivi régulier par rapport et visites privées.",
    step: "Etape 3",
  },
  {
    name: "Livraison",
    description:
      "Remise des clés et livraison de votre villa. Derniers ajustements si nécessaires.",
    step: "Etape 4",
  },
];
</script>

<template>
  <div class="w-full">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <div v-for="item in timeline" :key="item.name">
        <span
          class="flex items-center text-sm font-semibold leading-6 text-sand-dark"
        >
          <svg
            viewBox="0 0 4 4"
            class="mr-4 h-1 w-1 flex-none"
            aria-hidden="true"
          >
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          {{ item.step }}
          <div
            class="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
            aria-hidden="true"
          />
        </span>
        <p
          class="mt-6 text-lg font-base leading-8 tracking-tight text-neutral-900"
        >
          {{ item.name }}
        </p>
        <p
          class="mt-1 font-base text-base font-light leading-7 text-neutral-600"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
