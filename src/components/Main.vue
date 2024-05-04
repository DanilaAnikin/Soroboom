<script setup lang="ts">
import MainPage from '../pages/MainPage.vue';
</script>
<template>
  <div class="w-full flex justify-center">
    <div class="sm:w-8/12 w-full">
      <MainPage />
    </div>
    <div class="absolute w-auto h-auto z-[-1] top-0 right-0">
      <img class="sm:flex hidden" src="/src/assets/MainBackground.png">
      <img class="sm:hidden w-11/12" src="/src/assets/MobileMainBg.png">
      <div class="mobile:left-[-121px] mobile:top-[-53px] mobile:w-[345px] mobile:h-[345px] sm:w-1/3 sm:h-1/2 sm:left-[-89px] sm:top-[-207px] bg-[#08FF00] opacity-5 sm:blur-3xl mobile:blur-[100px]"></div>
    </div>
  </div>
</template>
