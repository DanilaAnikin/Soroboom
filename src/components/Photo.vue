<script setup lang="ts">
import Thanking from './SecondPage/Thanking.vue';
</script>

<template>
  <div class="flex justify-center w-full mt-[10%] gap-[10%]">
    <div class="sm:w-7/12 w-9/12">
      <img v-if="$t('locale.language') == 'RU'" class="w-full" src="../assets/SkillsImageRU.png" >
      <img v-if="$t('locale.language') == 'CZ'" class="w-full" src="../assets/SkillsImageCZ.png" >
      <img v-if="$t('locale.language') == 'EN'" class="w-full" src="../assets/SkillsImageEN.png" >
    </div>
    <div class="sm:w-5/12 w-3/12">
      <Thanking />
    </div>
  </div>
</template>