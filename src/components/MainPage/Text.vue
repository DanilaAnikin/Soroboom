<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const uluchshim = ref<string[]>([
  'Скорость принятия решений',
  'Концентрация внимания',
  'Быстроту реакций',
  'Память'
]);

const vylepsime = ref<string[]>([
  'Rychlost rozhodování',
  'Koncentrace vnímání',
  'Rychlost reakcí',
  'Paměť',
]);

defineProps<{
  language: string
}>();
</script>

<template>
  <div class="font-montserrat sm:w-1/2 mt-12 sm:px-0 px-4 flex flex-col gap-6">
    <span class="font-bold text-4xl">{{ language == 'RU' ? 'Ментальная арифметика' : language == 'EN' ? '' : 'Mentální aritmetika' }} -<span class="text-[#EC6A1F]">{{ language == 'RU' ? 'Развитие интиллекта' : language == 'EN' ? '' : 'Rozvoj intelektu' }}</span></span>
    <div class="sm:my-8 sm:mt-0 mt-96">
      <span class="font-semibold">{{ language == 'RU' ? 'Улучшим' : language == 'EN' ? '' : 'Vylepšíme' }}:</span>
      <div class="flex w-full flex-wrap">
        <div v-for="(each, index) in language == 'RU' ? uluchshim : language == 'EN' ? [] : vylepsime" class="flex w-1/2 sm:gap-3 gap-2 items-center py-2">
          <Check :size="25" :color="`${ index == 0 || index == 3 ? '#42BE63' : '#EC6A1F'}`" />
          <span class="sm:w-7/12 w-full">{{ each }}</span>
        </div>
      </div>
    </div>
    <span class="text-lg">{{ language == 'RU' ? 'вашего ребёнка по методике' : language == 'EN' ? '' : 'vaše dítě metodou'}} Soroboom®</span>
  </div>
</template>