<script setup lang="ts">
import SixthModules from '../components/SixthPage/SixthModules.vue';
</script>

<template>
  <div class="flex flex-col items-center text-center sm:text-start gap-8 font-montserrat ">
    <span class="text-3xl font-semibold">Как проходит обучение<span class="text-[#EC6A1F]"> в Soroboom?®</span> </span>
    <span class="sm:w-full w-11/12 text-center">посещать Soroboom<span class="font-semibold"> достаточно раз в неделю</span></span>
    <img class="w-9/12 sm:flex hidden" src="../assets/SixthPage.png">
    <img class="w-full sm:hidden" src="../assets/MobileSixthPage.png">
    <SixthModules />
  </div>
</template>