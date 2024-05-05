<script setup lang="ts">
import Modules from '../components/SecondPage/Modules.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex justify-center">
    <span class="text-3xl font-semibold sm:text-start text-center">{{ language == 'RU' ? 'Подарите своему ребёнку' : language == 'EN' ? '' : 'Darujte svému dítěti' }}<span class="text-[#EC6A1F]"> {{ language == 'RU' ? 'лучший старт в жизни' : language == 'EN' ? '' : 'nejlepší start v životě' }}!</span></span>
  </div>
  <Modules :language />
</template>
