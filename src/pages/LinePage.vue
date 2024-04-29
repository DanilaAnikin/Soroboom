<script setup lang="ts">
import Phone from '../icons/Phone.vue';
</script>

<template>
  <div class="flex justify-between sm:hidden w-full sm:flex-row flex-col items-center">
    <div class="sm:hidden w-full flex items-center flex-col gap-10 py-6 bg-gradient-to-b from-[#065803] from-[36.33%] to-[#27D45D] to-[100%]">
      <img src="../assets/SoroboomLogo.png" >
      <div class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit">
        <Phone :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:flex hidden w-full justify-center items-center py-12 bg-gradient-to-l from-[#27D45D] from-[7.98%] to-[#065803] to-[75.62%]">
    <div class="w-8/12 flex justify-between items-center">
      <img src="../assets/SoroboomLogo.png" >
      <div class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit">
        <Phone :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
    </div>
  </div>
</template>
