<script setup lang="ts">
import OnlineOffline from '../components/FormatsPage/OnlineOffline.vue';
</script>

<template>
  <div class="mt-8 flex justify-center sm:pt-0 pt-8">
    <span class="text-3xl font-semibold font-montserrat">{{ $t('formats.formats') }} <span class="text-[#EC6A1F]"> {{ $t('formats.of_education') }}</span></span>
  </div>
  <OnlineOffline />
</template>
