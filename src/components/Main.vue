<script setup lang="ts">
import MainPage from '../pages/MainPage.vue';
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-8/12">
      <MainPage />
    </div>
    <div class="w-full h-screen absolute z-[-1]">
      <div class="w-1/3 h-1/2 left-[-89px] top-[-207px] bg-[#08FF00] opacity-5 blur-3xl"></div>
    </div>
    <div class="absolute w-7/12 h-auto right-0 z-[-1]">
      <img src="/src/assets//MainBackground.png">
    </div>
  </div>
</template>
