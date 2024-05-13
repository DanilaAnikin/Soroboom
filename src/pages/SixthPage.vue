<script setup lang="ts">
import SixthModules from '../components/SixthPage/SixthModules.vue';
</script>

<template>
  <div class="flex flex-col items-center text-center sm:text-start gap-8 font-montserrat ">
    <span class="text-3xl font-semibold">{{ $t('sixth.how_the_training_works') }} <span class="text-[#EC6A1F]"> {{ $t('sixth.in_soroboom') }}</span> </span>
    <span class="sm:w-full w-11/12 text-center">{{ $t('sixth.visit') }} Soroboom <span class="font-semibold"> {{ $t('sixth.at_least_once_a_week') }}</span></span>
    <img class="w-9/12 sm:flex hidden" src="../assets/SixthPage.png">
    <img class="w-full sm:hidden" src="../assets/MobileSixthPage.png">
    <SixthModules />
  </div>
</template>
