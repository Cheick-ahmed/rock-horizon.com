<script setup lang="ts"></script>

<template>
  <Container>
    <GridPattern>
      <div
        v-for="x in 6"
        class="relative h-full w-full rounded-md bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] forced-colors:outline col-span-5"
      >
        <div class="text-center py-16">
          {{ x }}
        </div>
      </div>
    </GridPattern>
  </Container>
</template>
