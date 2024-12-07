<script setup lang="ts">
interface ProjectModel {
  id: string;
  image: string;
  name?: string;
  status?: string;
  description?: string;
}

const props = defineProps<{
  project: ProjectModel;
  to: string | { name: string; params?: Record<string, any> };
}>();

const resolveRoutePath = computed(() => {
  if (props.to && typeof props.to === "object") {
    return { to: { name: props.to.name, params: props.to.params || {} } };
  }
  return { to: props.to };
});
</script>

<template>
  <article
    class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl font-base bg-neutral-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-[30rem]"
  >
    <Image
      :src="project.image"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
    ></Image>
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40"
    ></div>
    <div
      class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-black"
    ></div>

    <div
      class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-neutral-300"
    >
      <div v-if="project.status" class="-ml-4 flex items-center gap-x-4">
        <svg
          viewBox="0 0 2 2"
          class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
        >
          <circle cx="1" cy="1" r="1" />
        </svg>
        <span
          class="relative z-10 rounded-full bg-neutral-50 px-3 py-1 font-medium text-neutral-600 hover:bg-neutral-100"
        >
          {{ project.status }}
        </span>
      </div>
    </div>
    <h3 class="mt-3 text-4xl font-light text-white">
      <NuxtLink v-bind="resolveRoutePath">
        <span class="absolute inset-0"></span>
        {{ project.name }}
      </NuxtLink>
    </h3>
    <p v-if="project.description" class="mt-2 text-neutral-300">
      {{ project.description }}
    </p>
  </article>
</template>
