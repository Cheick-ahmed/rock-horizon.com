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
  <!-- <div>
    <div class="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
        <div
          v-for="image in images"
          class="pt-8 sm:inline-block sm:w-full sm:px-4"
        >
          <Image :key="image.id" :src="image.imageUrl" />
        </div>
      </div>
    </div>
  </div> -->

  <div
    class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
  >
    <NuxtLink
      v-for="image in images"
      :key="image.id"
      :to="{ name: '' }"
      class="group"
    >
      <div
        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md sm:aspect-h-3 sm:aspect-w-2"
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
