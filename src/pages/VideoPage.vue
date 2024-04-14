<script setup lang="ts">
import Video from '../components/VideoPage/Video.vue';
import Title from '../components/VideoPage/Title.vue';
import Puzzle from '../components/VideoPage/Puzzle.vue';
</script>

<template>
  <Title />
  <div class="flex justify-center gap-4">
    <Video />
    <Puzzle />
  </div>
</template>