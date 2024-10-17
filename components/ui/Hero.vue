<template>
  <div class="relative isolate my-4 lg:my-28 xl:my-0">
    <Container>
      <div class="max-w-3xl py-6 lg:py-20">
        <div class="hidden lg:mb-8 lg:flex">
          <div
            class="relative font-base rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-sand hover:ring-sand"
          >
            Découvrez nos espaces inédits.
            <NuxtLink
              :to="{ name: 'about' }"
              class="ml-px font-bold text-sand-dark"
            >
              <span class="absolute inset-0" aria-hidden="true"></span>
              En savoir plus
              <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1
            class="font-base text-5xl font-light tracking-tight text-neutral-950 [text-wrap:balance] lg:text-8xl lg:max-w-2xl"
          >
            Redéfinir le Luxe dans des Horizons Inexplorés.
          </h1>
          <p class="mt-6 font-base text-xl font-extralight">
            Nous concevons des maisons en Côte d'Ivoire élégantes et
            minimalistes, offrant un confort moderne. Pour ceux qui cherchent à
            acheter une maison en Côte d'Ivoire, nos projets offrent une
            opportunité unique de vivre dans des espaces raffinés.
          </p>
          <div
            class="mt-10 col-start-1 row-start-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              :to="{
                name: 'projects-villas',
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
