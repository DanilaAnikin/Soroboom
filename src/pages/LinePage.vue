<script setup lang="ts">
import Phone from '../icons/Phone.vue';
</script>

<template>
  <div class="flex justify-between w-8/12 items-center">
    <img src="../assets/SoroboomLogo.png" >
    <div class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit">
      <Phone :size="14" color="white" />
      <div class="border-l border-white h-2"></div>
      <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">ЗАКАЗАТЬ ЗВОНОК</span>
      </div>
    </div>
  </div>
</template>
