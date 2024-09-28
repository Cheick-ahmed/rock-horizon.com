<script setup lang="ts"></script>
<template>
  <div>
    <div
      class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5"
    >
      <div className="relative h-80 shrink-0">
        <slot name="graphic" />
      </div>
    </div>
  </div>
</template>
