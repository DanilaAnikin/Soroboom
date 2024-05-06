<script setup lang="ts">
import Video from '../components/VideoPage/Video.vue';
import Title from '../components/VideoPage/Title.vue';
import Puzzle from '../components/VideoPage/Puzzle.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex items-center flex-col">
    <Title :language />
    <div class="flex justify-center items-center gap-4 sm:flex-row flex-col">
      <Video :language />
      <Puzzle :language />
    </div>
  </div>
</template>