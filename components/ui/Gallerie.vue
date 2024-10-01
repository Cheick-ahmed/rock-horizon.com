<script setup>
const images = [
  {
    id: "34e1e302-5a26-41d2-9d4e-cb04e859950e",
    imageUrl:
      "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/5.jpg",
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
  {
    id: "58c7bf42-af24-4808-85fb-441d91af3f42",
    imageUrl:
      "https://s3.eu-west-3.amazonaws.com/front.rockhorizons.com/toumodi/8.jpg",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 gap-y-4 sm:hidden">
    <NuxtLink
      v-for="image in images"
      :key="image.id"
      :to="{ name: '' }"
      class="group"
    >
      <div
        class="aspect-h-3 aspect-w-2 w-full overflow-hidden sm:aspect-h-1 sm:aspect-w-1"
      >
        <img
          :src="image.imageUrl"
          alt=""
          class="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
    </NuxtLink>
  </div>
</template>
