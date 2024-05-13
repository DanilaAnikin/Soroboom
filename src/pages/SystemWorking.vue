<script setup lang="ts">
import MobileSystemWorkingContent from '../components/MobileSystemWorkingContent.vue';
</script>

<template>
  <div class="w-full flex flex-col">
    <img v-if="$t('locale.language') == 'RU'" class="sm:flex hidden w-11/12" src="../assets/SystemWorkingRU.png" >
    <img v-if="$t('locale.language') == 'CZ'" class="sm:flex hidden w-11/12" src="../assets/SystemWorkingCZ.png" >
    <img v-if="$t('locale.language') == 'EN'" class="sm:flex hidden w-11/12" src="../assets/SystemWorkingEN.png" >
    <img v-if="$t('locale.language') == 'RU'" class="sm:hidden mt-[-20%]" src="../assets/MobileSystemWorkingRU.png" >
    <img v-if="$t('locale.language') == 'CZ'" class="sm:hidden mt-[-20%]" src="../assets/MobileSystemWorkingCZ.png" >
    <img v-if="$t('locale.language') == 'EN'" class="sm:hidden mt-[-20%]" src="../assets/MobileSystemWorkingEN.png" >
    <MobileSystemWorkingContent class="sm:hidden" />
  </div>
</template>