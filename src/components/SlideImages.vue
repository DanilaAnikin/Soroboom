<script setup lang="ts">
import SlideImagesPage from '../pages/SlideImagesPage.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="w-full flex justify-center mt-32">
    <div class="sm:w-8/12 w-full">
      <SlideImagesPage :language />
    </div>
  </div>
</template>