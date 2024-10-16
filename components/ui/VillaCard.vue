<script setup lang="ts">
defineProps<{
  project: any;
}>();
</script>

<template>
  <article
    class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-[34rem]"
  >
    <Image
      v-if="project.image_url"
      class="cursor-grab absolute inset-0 -z-10 object-cover"
      :src="project.image_url"
    ></Image>
    <svg
      v-else
      width="550"
      height="550"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="cursor-grab absolute mx-auto inset-0 -z-10 object-cover stroke-neutral-500"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>

    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40"
    ></div>
    <div
      class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-black/10"
    ></div>

    <div class="mt-5 flex items-center justify-between">
      <div
        class="items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-100"
      >
        <h3 class="uppercase font-thin space-y-1">
          <span class="block">{{ project.details.total_area }}</span>
          <span class="block">
            {{ project.details.bedrooms }}
            {{ project.details.bedrooms ? "" : "chambres" }}
            / {{ project.details.bathrooms }}
            {{ project.details.bathrooms === "NC" ? "" : "salles de bain" }}
          </span>
          <span class="block">
            {{
              project.details.type === "Single-story"
                ? "De plain-pied"
                : project.details.type === "NC"
                ? "NC"
                : `${project.details.type} étage`
            }}
          </span>
        </h3>
      </div>
    </div>
  </article>
</template>
