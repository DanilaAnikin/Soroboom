<script setup lang="ts">
import VideoPage from '../pages/VideoPage.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="w-full flex justify-center font-montserrat">
    <div class="sm:w-8/12 w-full">
      <VideoPage :language />
    </div>
  </div>
</template>