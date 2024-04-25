<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const uluchshim = ref<string[]>([
  'Скорость принятия решений',
  'Концентрация внимания',
  'Быстроту реакций',
  'Память'
]);
</script>

<template>
  <div class="font-montserrat sm:w-1/2 sm:mt-20 mt-16 sm:px-0 px-4 flex flex-col gap-6">
    <span class="font-bold text-4xl">Ментальная арифметика - <span class="text-[#EC6A1F]">Развитие интиллекта</span></span>
    <div class="sm:my-8 sm:mt-0 mt-96">
      <span class="font-semibold">Улучшим:</span>
      <div class="flex w-full flex-wrap">
        <div v-for="(each, index) in uluchshim" class="flex w-1/2 sm:gap-3 gap-2 items-center py-2">
          <Check :size="25" :color="`${ index == 0 || index == 3 ? '#42BE63' : '#EC6A1F'}`" />
          <span class="sm:w-7/12 w-full">{{ each }}</span>
        </div>
      </div>
    </div>
    <span class="text-lg">вашего ребёнка по методике Soroboom®</span>
  </div>
</template>