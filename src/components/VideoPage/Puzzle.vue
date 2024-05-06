<script setup lang="ts">

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex flex-col justify-center items-center sm:w-5/12 w-full text-center">
    <div class="flex justify-center items-center">
      <img class="sm:w-1/2 w-9/12" src="../../assets/Puzzles.png">
    </div>
    <div class="w-10/12">
      <span>{{ language == 'RU' ? 'результаты уже' : language == 'EN' ? '' : 'výsledky už' }}<span class="text-[#EC6A1F]">{{ language == 'RU' ? ' после 1-го месяца' : language == 'EN' ? '' : ' po 1. měsíci' }}</span>{{ language == 'RU' ? ' тренировок' : language == 'EN' ? '' : ' tréninků'}}</span>
    </div>
  </div>
</template>
