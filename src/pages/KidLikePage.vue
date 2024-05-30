<script setup lang="ts">

</script>

<template>
  <div class="justify-between flex gap-6 sm:flex-row flex-col w-full items-center">
    <div class="hidden sm:flex h-fit w-full">
      <img v-if="$t('locale.language') == 'RU'" src="../assets/TenRU.png" >
      <img v-if="$t('locale.language') == 'EN'" src="../assets/TenEN.png" >
      <img v-if="$t('locale.language') == 'CZ'" src="../assets/TenCZ.png" >
      <img v-if="$t('locale.language') == 'UA'" src="../assets/TenUA.png" >
    </div>
    <div class="sm:hidden flex w-full justify-center">
      <img v-if="$t('locale.language') == 'RU'" src="../assets/MobileTenRU.png" >
      <img v-if="$t('locale.language') == 'EN'" src="../assets/MobileTenEN.png" >
      <img v-if="$t('locale.language') == 'CZ'" src="../assets/MobileTenCZ.png" >
      <img v-if="$t('locale.language') == 'UA'" src="../assets/MobileTenUA.png" >
    </div>
    <div class="flex flex-col items-center gap-4 justify-center text-lg sm:w-full w-11/12">
      <span class="text-[#EC6A1F] font-semibold">{{ $t('locale.kid_like.ten_years') }} <span class="text-black font-normal"> {{ $t('locale.kid_like.ukraine') }}.</span></span>
      <span>{{ $t('locale.kid_like.results') }} <span class="font-semibold"> {{ $t('locale.kid_like.our_trainings') }}.</span></span>
    </div>
    <img src="../assets/KidLike.png" >
  </div>
</template>