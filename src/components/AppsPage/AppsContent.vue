<script setup lang="ts">
import Downloaders from '../Downloaders.vue';
</script>

<template>
  <div class="w-11/12 flex justify-center">
    <div class="flex sm:justify-between items-center sm:flex-row flex-col sm:gap-0 gap-8">
      <div class="flex flex-col sm:w-5/12 w-11/12 gap-4 items-center">
        <img src="../../assets/App1.png">
        <span class="text-xl font-medium">Soroboom AR</span>
        <Downloaders />
      </div>
      <div class="flex flex-col sm:w-5/12 w-11/12 gap-4 items-center">
        <img src="../../assets/App2.png">
        <span class="text-xl font-medium">Soroboom Lite</span>
        <Downloaders />
      </div>
    </div>
  </div>
</template>