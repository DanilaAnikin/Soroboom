<script setup lang="ts">
import Downloaders from '../Downloaders.vue';
</script>

<template>
  <div class="w-11/12 flex justify-center">
    <div class="flex xl:justify-between items-center xl:flex-row flex-col xl:gap-0 gap-8">
      <div class="flex flex-col xl:w-5/12 w-11/12 gap-4 items-center">
        <img src="../../assets/App1.png">
        <span class="text-xl font-medium">{{ $t('locale.apps.content.soroboom_ar') }}</span>
        <Downloaders />
      </div>
      <div class="flex flex-col xl:w-5/12 w-11/12 gap-4 items-center">
        <img src="../../assets/App2.png">
        <span class="text-xl font-medium">{{ $t('locale.apps.content.soroboom_lite') }}</span>
        <Downloaders />
      </div>
    </div>
  </div>
</template>