<script setup lang="ts"></script>

<template>
  <div class="CarouselSlide swiper-slide">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  align-self: stretch;
  height: auto;
}
</style>
