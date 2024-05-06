<script setup lang="ts">
import OnlineOffline from '../components/FormatsPage/OnlineOffline.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="mt-8 flex justify-center sm:pt-0 pt-8">
    <span class="text-3xl font-semibold font-montserrat">{{ language == 'RU' ? 'Форматы' : language == 'EN' ? '' : 'Typy' }}<span class="text-[#EC6A1F]">{{ language == 'RU' ? ' обучения' : language == 'EN' ? '' : ' lekcí' }}</span></span>
  </div>
  <OnlineOffline :language />
</template>
