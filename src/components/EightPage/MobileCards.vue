<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const texts = ref<string[]>([
  'Отслеживание прогресса в 2 клика',
  'Индивидуальный подход к ученику',
  'Эффективность обучения повышается на 65%',
  'Запатентованнная технология No1 на рынке детского образования.',
]);
</script>

<template>
  <div class="sm:hidden flex items-center w-full flex-col">
    <img src="../../assets/CalculatorImage.png" class="sm:w-5/12 my-8 sm:my-0">
    <span class="font-bold text-xl">Инновационный метод обучения</span>
  </div>
  <div class="flex justify-center w-11/12">
    <div class="sm:hidden flex justify-end flex-col w-10/12 gap-4 sm:-mt-32 mt-6 text-start">
      <div v-for="(text, index) in texts" class="flex justify-between gap-3">
        <Check :color="index%2==0 ? '#42BE63' : '#EC6A1F'" :size="25" class="w-1/12"/>
        <span class="w-11/12">
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>