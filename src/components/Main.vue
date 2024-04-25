<script setup lang="ts">
import MainPage from '../pages/MainPage.vue';
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="sm:w-8/12 w-full">
      <MainPage />
    </div>
    <div class="w-full h-screen absolute z-[-1]">
      <div class="mobile:left-[-121px] mobile:top-[-53px] mobile:w-[345px] mobile:h-[345px] sm:w-1/3 sm:h-1/2 sm:left-[-89px] sm:top-[-207px] bg-[#08FF00] opacity-5 sm:blur-3xl mobile:blur-[100px]"></div>
    </div>
    <div class="sm:absolute sm:w-7/12 sm:h-auto sm:right-0 div-with-image"></div>
  </div>
</template>

<style scoped>
.div-with-image {
  background-image: url('/src/assets/MainBackground.png');
}
@media screen and (max-width: 640px) {
  .div-with-image {
    background-image: url('/src/assets/MobileMainBg.png');
  }
}
</style>