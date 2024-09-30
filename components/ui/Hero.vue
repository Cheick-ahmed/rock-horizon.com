<script setup lang="ts">
const { getLastProject } = useProjects();

const lastProject = getLastProject();
</script>

<template>
  <div class="relative isolate my-4 sm:my-28 lg:my-0">
    <Container>
      <div class="max-w-3xl sm:py-20">
        <div class="hidden sm:mb-8 sm:flex">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-sand hover:ring-sand"
          >
            Découvrez nos espaces inédits
            <NuxtLink
              :to="{ name: '' }"
              class="font-sans font-bold text-sand-dark"
            >
              <span class="absolute inset-0" aria-hidden="true"></span>
              En savoir plus
              <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1
            class="font-base text-6xl font-light tracking-tight text-neutral-950 [text-wrap:balance] sm:text-8xl"
          >
            Redéfinir le Luxe dans des Horizons Inexplorés.
          </h1>
          <p class="mt-6 font-base text-xl font-extralight">
            Nous concevons des maisons élégantes et minimalistes, qui capturent
            l’essence de l’espace, de la sérénité et de l’innovation. Ancrées
            dans des paysages oubliés, nos créations offrent un luxe subtil, un
            confort audacieux, loin de l’extravagance urbaine.
          </p>
          <div
            class="mt-10 col-start-1 row-start-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              :to="{
                name: 'projects-slug',
                params: { slug: lastProject?.id },
              }"
              color="base"
            >
              Explorez Nos Projets
            </Button>
            <Button variant="outline" to="about">En savoir plus</Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
