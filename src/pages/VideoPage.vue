<script setup lang="ts">
import Video from '../components/VideoPage/Video.vue';
import Title from '../components/VideoPage/Title.vue';
import Puzzle from '../components/VideoPage/Puzzle.vue';
</script>

<template>
  <div class="flex items-center flex-col">
    <Title />
    <div class="flex justify-center items-center gap-4 sm:flex-row flex-col">
      <Video />
      <Puzzle />
    </div>
  </div>
</template>