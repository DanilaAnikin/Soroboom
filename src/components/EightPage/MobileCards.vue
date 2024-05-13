<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const texts = ref<string[][]>([
  ['progress_tracking', 'in_two_clicks'],
  ['individual_approach', 'to_the_student'],
  ['training_effectiveness', 'increases'],
  ['patented', 'technology_one'],
]);
</script>

<template>
  <div class="sm:hidden flex items-center w-full flex-col">
    <img src="../../assets/CalculatorImage.png" class="sm:w-5/12 my-8 sm:my-0">
    <span class="font-bold text-xl">{{ $t('locale.eight.calculator.innovative_teaching_method') }}</span>
  </div>
  <div class="flex justify-center w-11/12">
    <div class="sm:hidden flex justify-end flex-col w-10/12 gap-4 sm:-mt-32 mt-6 text-start">
      <div v-for="(text, index) in texts" class="flex justify-between gap-3">
        <Check :color="index%2==0 ? '#42BE63' : '#EC6A1F'" :size="25" class="w-1/12"/>
        <span class="w-11/12">
          {{ $t('locale.eight.cards.'+text[0]) + ' ' + $t('locale.eight.cards.'+text[1]) }}
        </span>
      </div>
    </div>
  </div>
</template>