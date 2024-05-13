<script setup lang="ts">
import Modules from '../components/SecondPage/Modules.vue';
</script>

<template>
  <div class="flex justify-center">
    <span class="text-3xl font-semibold sm:text-start text-center">{{ $t('locale.second.give_your_child') }} <span class="text-[#EC6A1F]"> {{ $t('locale.second.start') }}!</span></span>
  </div>
  <Modules />
</template>
