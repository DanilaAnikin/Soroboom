<script setup lang="ts">
import EightPage from '../pages/EightPage.vue';
</script>

<template>
  <div class="w-full flex justify-center font-montserrat mt-32 whole-div">
    <div class="w-8/12">
      <EightPage />
    </div>
  </div>
</template>

<style scoped>
.whole-div {
  background: linear-gradient(180deg, rgba(8, 255, 0, 0) 0%, rgba(8, 255, 0, 0.08) 52%, rgba(8, 255, 0, 0) 100%); 
}
</style>
