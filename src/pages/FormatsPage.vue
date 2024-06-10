<script setup lang="ts">
import OnlineOffline from '../components/FormatsPage/OnlineOffline.vue';
</script>

<template>
  <div class="flex justify-center sm:pt-0">
    <span class="text-3xl font-semibold font-montserrat">{{ $t('locale.formats.formats') }} <span class="text-[#EC6A1F]"> {{ $t('locale.formats.of_education') }}</span></span>
  </div>
  <OnlineOffline />
</template>
