<script setup lang="ts">
import Calculator from '../components/EightPage/Calculator.vue';
import Cards from '../components/EightPage/Cards.vue';
import MobileCards from '../components/EightPage/MobileCards.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex justify-between flex-col sm:flex-row sm:text-start text-center items-center">
    <div>
      <Calculator :language />
      <Cards :language class="sm:flex hidden" />
      <MobileCards :language />
    </div>
    <img src="../assets/CalculatorImage.png" class="xl:w-8/12 xl:flex hidden">
  </div>
</template>
