<script setup lang="ts">
defineProps<{
  language: string
}>();
</script>

<template>
  <div class="w-full flex justify-start">
    <div class="w-8/12 shadow-sm shadow-slate-200 py-4 px-12 flex justify-between rounded-3xl bg-white font-montserrat">
      <span>{{ language == 'RU' ? 'Расписание' : language == 'EN' ? '' : 'Plán' }}</span>
      <span>{{ language == 'RU' ? 'Что такое Соробан?' : language == 'EN' ? '' : 'Co je Soroboom?' }}</span>
      <span>{{ language == 'RU' ? 'Блог' : language == 'EN' ? '' : 'Blog' }}</span>
      <span>{{ language == 'RU' ? 'Галерея' : language == 'EN' ? '' : 'Galerie' }}</span>
    </div>
  </div>
</template>