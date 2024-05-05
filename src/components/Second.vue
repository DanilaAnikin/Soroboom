<script setup lang="ts">
import SecondPage from '../pages/SecondPage.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="w-full flex justify-center mt-24">
    <div class="sm:w-9/12 w-full">
      <SecondPage :language />
    </div>
  </div>
</template>