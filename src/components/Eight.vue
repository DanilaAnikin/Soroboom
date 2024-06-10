<script setup lang="ts">
import EightPage from '../pages/EightPage.vue';
</script>

<template>
  <div class="w-full flex justify-center font-montserrat sm:mt-12 mt-4 whole-div">
    <div class="sm:w-8/12 w-11/12">
      <EightPage />
    </div>
  </div>
</template>

<style scoped>
.whole-div {
  background: linear-gradient(180deg, rgba(8, 255, 0, 0) 0%, rgba(8, 255, 0, 0.08) 52%, rgba(8, 255, 0, 0) 100%); 
}
</style>
