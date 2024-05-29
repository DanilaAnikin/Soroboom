<script setup lang="ts">
import SixthModules from '../components/SixthPage/SixthModules.vue';
</script>

<template>
  <div class="flex flex-col items-center text-center sm:text-start gap-8 font-montserrat ">
    <span class="text-3xl font-semibold">{{ $t('locale.sixth.how_the_training_works') }} <span class="text-[#EC6A1F]"> {{ $t('locale.sixth.in_soroboom') }}</span> </span>
    <span class="sm:w-full w-11/12 text-center">{{ $t('locale.sixth.visit') }} Soroboom <span class="font-semibold"> {{ $t('locale.sixth.at_least_once_a_week') }}</span></span>
    <img v-if="$t('locale.language') == 'RU'" class="w-9/12 sm:flex hidden" src="../assets/SixthPageRU.png">
    <img v-if="$t('locale.language') == 'CZ'" class="w-9/12 sm:flex hidden" src="../assets/SixthPageCZ.png">
    <img v-if="$t('locale.language') == 'EN'" class="w-9/12 sm:flex hidden" src="../assets/SixthPageEN.png">
    <img v-if="$t('locale.language') == 'UA'" class="w-9/12 sm:flex hidden" src="../assets/SixthPageUA.png">
    <img v-if="$t('locale.language') == 'RU'" class="w-full sm:hidden" src="../assets/MobileSixthPageRU.png">
    <img v-if="$t('locale.language') == 'CZ'" class="w-full sm:hidden" src="../assets/MobileSixthPageCZ.png">
    <img v-if="$t('locale.language') == 'EN'" class="w-full sm:hidden" src="../assets/MobileSixthPageEN.png">
    <img v-if="$t('locale.language') == 'UA'" class="w-full sm:hidden" src="../assets/MobileSixthPageUA.png">
    <SixthModules />
  </div>
</template>
