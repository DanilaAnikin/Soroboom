<script setup lang="ts">
import LinePage from '../pages/LinePage.vue';
</script>

<template>
  <div class="w-full flex justify-center mt-24">
    <div class="w-full justify-center flex">
      <LinePage />
    </div>
  </div>
  <div class="absolute z-[-1] mt-[-100px]">
    <img class="sm:flex hidden" src="../assets/Line.png">
  </div>
</template>
