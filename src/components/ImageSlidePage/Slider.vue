<script setup lang="ts">
import Arrow from '../../icons/Arrow.vue';


</script>

<template>
  <div class="sm:w-1/2 items-center w-11/12 sm:mt-0 sm:mb-0 mt-20 mb-40">
  <div class="flex items-center justify-center sm:justify-start">
    <img class="sm:w-[30%] w-9/12 absolute opacity-100 z-[1000] sm:ml-20" src="../../assets/SlideImage3.png">
    <div class="flex sm:w-7/12 justify-between">
      <img class="opacity-30 sm:w-auto w-5/12" src="../../assets/SlideImage1.png">
      <img class="rounded-3xl opacity-30 sm:w-auto w-5/12" src="../../assets/SlideImage2.png">
    </div>
  </div>

  <div class="flex justify-between w-[108%] -ml-4 -mt-[20%] sm:-mt-40 sm:w-full sm:ml-2">
    <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] w-fit absolute">
      <Arrow color="white" :size="14" side="left" />
    </div>
    <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] w-fit absolute sm:ml-[580px] ml-96">
      <Arrow color="white" :size="14" side="right" />
    </div>
  </div>
  </div>
</template>