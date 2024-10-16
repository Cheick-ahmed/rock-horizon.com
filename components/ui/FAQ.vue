<script setup lang="ts">
interface FAQModel {
  id: string;
  question: string;
  answer: string;
}

defineProps<{
  faqs: FAQModel[];
}>();
</script>

<template>
  <div>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-5">
        <h2
          class="text-2xl font-bold leading-10 tracking-tight text-neutral-900"
        >
          Questions Fréquentes : Tout ce que vous devez savoir
        </h2>
        <p class="mt-4 text-base leading-7 text-neutral-600">
          Trouvez des réponses claires à vos questions sur l'achat en VEFA avec
          RockHorizon.
          <NuxtLink
            :to="{ name: 'vefa' }"
            class="font-semibold text-sand hover:text-sand-dark"
          >
            En savoir plus
          </NuxtLink>
          sur la VEFA
        </p>
      </div>
      <div class="mt-10 lg:col-span-7 lg:mt-0">
        <dl class="space-y-10">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-base font-semibold leading-7 text-neutral-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-neutral-600">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
