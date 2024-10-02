<script setup lang="ts">
import { cn } from "~/utils/cn";

const resolvedImages = [
  {
    images: [
      {
        id: "e79173f5-1d4c-4b9d-b722-ac2d36629113",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/2_16-9.jpg",
        ratio: "aspect-video",
      },
      {
        id: "8b8b121f-4700-495a-a98f-3161550175ae",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/16-9/1_16-9.jpg",
        ratio: "aspect-square",
      },
    ],
  },
  {
    categorie: "Extérieur",
    images: [
      {
        id: "1ae96742-eb3c-45d2-97b0-03b8e1df8166",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/4.jpg",
        ratio: "aspect-h-3 aspect-w-2",
      },
      {
        id: "a1ea7ef6-c5c1-4fbb-ac96-7b0f08387a70",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/9.jpg",
      },
      {
        id: "d131444b-d6a9-4d98-a0fc-6b63ebc2c987",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/6.jpg",
      },
      {
        id: "4632a4db-44e4-4451-b0a3-69f5f8a14886",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/7.jpg",
      },
    ],
  },
  {
    categorie: "Jardin",
    images: [
      {
        id: "34e1e302-5a26-41d2-9d4e-cb04e859950e",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/5.jpg",
      },

      {
        id: "58c7bf42-af24-4808-85fb-441d91af3f42",
        imageUrl:
          "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/8.jpg",
      },
    ],
  },
];
</script>

<template>
  <div class="space-y-8 sm:hidden">
    <div
      v-for="(columnGroup, columnGroupIdx) in resolvedImages"
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
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
