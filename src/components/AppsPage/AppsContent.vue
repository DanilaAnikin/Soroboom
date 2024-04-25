<script setup lang="ts">
import Downloaders from '../Downloaders.vue';
</script>

<template>
  <div class="w-11/12 flex justify-center">
    <div class="flex justify-between">
      <div class="flex flex-col w-5/12 gap-4 items-center">
        <img src="../../assets/App1.png">
        <span class="text-xl font-medium">Soroboom AR</span>
        <Downloaders />
      </div>
      <div class="flex flex-col w-5/12 gap-4 items-center">
        <img src="../../assets/App2.png">
        <span class="text-xl font-medium">Soroboom Lite</span>
        <Downloaders />
      </div>
    </div>
  </div>
</template>