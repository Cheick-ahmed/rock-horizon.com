<script setup lang="ts">
import { cn } from "~/utils/cn";

type Image = {
  id: string;
  imageUrl: string;
  ratio?: string;
  alt: string;
};

type ImageModel = {
  categorie: string;
  images: Image[];
};

defineProps<{
  items: ImageModel[];
}>();
</script>

<template>
  <div class="space-y-8 sm:hidden">
    <div
      v-for="(columnGroup, columnGroupIdx) in items"
      :key="columnGroupIdx"
      class="space-y-2 xl:contents"
    >
      <h6
        v-if="columnGroup.categorie"
        class="font-base font-light text-[10px] uppercase mx-4 mb-3"
      >
        <strong>{{ columnGroup.categorie }}</strong>
      </h6>
      <div v-for="(column, columnIdx) in columnGroup.images" :key="columnIdx">
        <NuxtLink :key="column.id" :to="{ name: '' }">
          <div
            :class="
              cn(
                'w-full overflow-hidden',
                column.ratio || 'aspect-h-3 aspect-w-2'
              )
            "
          >
            <img
              :src="column.imageUrl"
              :alt="column.alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
