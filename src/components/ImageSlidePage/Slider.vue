<script setup lang="ts">
import Arrow from '../../icons/Arrow.vue';


</script>

<template>
  <div class="w-1/2 items-center">
  <div class="flex items-center">
    <img class="w-[30%] absolute opacity-100 z-[1000] ml-20" src="../../assets/SlideImage3.png">
    <div class="flex w-7/12">
      <img class="opacity-30" src="../../assets/SlideImage1.png">
      <img class="rounded-3xl opacity-30" src="../../assets/SlideImage2.png">
    </div>
  </div>

  <div class="flex justify-between -mt-40 w-[110%]">
    <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] w-fit absolute">
      <Arrow color="white" :size="14" side="left" />
    </div>
    <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] w-fit absolute ml-[624px]">
      <Arrow color="white" :size="14" side="right" />
    </div>
  </div>
  </div>
</template>