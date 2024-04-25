<script setup lang="ts">
import SmallArrowDown from '../../icons/SmallArrowDown.vue';
import Location from '../../icons/Location.vue';
import World from '../../icons/World.vue';
import Phone from '../../icons/Phone.vue';
import Menu from '../../icons/Menu.vue';
</script>

<template>
  <div class="flex justify-between py-4 font-medium items-center">
    <div class="flex items-center justify-between px-4 sm:px-0 sm:gap-0 gap-16">
      <div class="sm:hidden bg-white p-3 rounded-3xl shadow-sm shadow-slate-300">
        <Menu />
      </div>
      <img class="sm:w-1/2 w-8/12" src="../../assets/SoroboomLogo.png" alt="Soroboom">
      <div class="mobile:hidden sm:flex h-fit items-center pr-4 justify-between rounded-3xl bg-white w-fit shadow-sm shadow-slate-200">
        <div class="p-[15px] rounded-3xl bg-[#EC6A1F]">
          <Location color="white" :size="20" />
        </div>
        <span class="font-montserrat px-4 text-sm">ПРАГА</span>
      </div>
    </div>
    <div class="flex h-fit justify-between items-center w-1/3">
      <div class="mobile:hidden sm:flex text-white items-center gap-4 p-4 rounded-3xl bg-[#FFFFFF33] h-fit">
        <World :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm">RU</span>
          <SmallArrowDown :size="14" color="white" />
        </div>
      </div>
      <div class="sm:m-0 ml-14 flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit">
        <Phone :size="14" color="white" />
        <div class="mobile:hidden sm:flex border-l border-white h-2"></div>
        <div class="mobile:hidden sm:flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
      </div>
  </div>
</template>