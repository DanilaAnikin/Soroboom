<script setup lang="ts">
import Calculator from '../components/EightPage/Calculator.vue';
import Cards from '../components/EightPage/Cards.vue';
</script>

<template>
  <div class="flex justify-between">
    <div>
      <Calculator />
      <Cards />
    </div>
    <img src="../assets/CalculatorImage.png" class="w-5/12">
  </div>
</template>
