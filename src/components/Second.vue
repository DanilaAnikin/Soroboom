<script setup lang="ts">
import SecondPage from '../pages/SecondPage.vue';
</script>

<template>
  <div class="w-full flex justify-center mt-24">
    <div class="sm:w-9/12 w-full">
      <SecondPage />
    </div>
    <div class="mobile:hidden sm:flex absolute w-8/12 h-auto left-0 top-[110%] z-[-1]">
      <img src="../assets//SkillsImage.png">
    </div>
  </div>
</template>