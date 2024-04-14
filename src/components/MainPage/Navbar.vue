<script setup lang="ts">
import SmallArrowDown from '../../icons/SmallArrowDown.vue';
import Location from '../../icons/Location.vue';
import World from '../../icons/World.vue';
import Phone from '../../icons/Phone.vue';
</script>

<template>
  <div class="flex justify-between py-4 font-medium">
    <div class="flex items-center justify-between ">
      <img class="w-1/2" src="../../assets/SoroboomLogo.png" alt="Soroboom">
      <div class="h-fit flex items-center pr-4 justify-between rounded-3xl bg-white w-fit shadow-sm shadow-slate-200">
        <div class="p-[15px] rounded-3xl bg-[#EC6A1F]">
          <Location color="white" :size="20" />
        </div>
        <span class="font-montserrat px-4 text-sm">ПРАГА</span>
      </div>
    </div>
    <div class="flex h-fit justify-between items-center w-1/3">
      <div class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#FFFFFF33] h-fit">
        <World :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm">RU</span>
          <SmallArrowDown :size="14" color="white" />
        </div>
      </div>
      <div class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit">
        <Phone :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm">ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
      </div>
  </div>
</template>