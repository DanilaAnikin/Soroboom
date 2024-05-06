<script setup lang="ts">

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="text-center py-12 flex justify-center sm:w-full w-11/12">
    <span class="font-semibold text-3xl">{{ language == 'RU' ? 'Методика Soroboom®, способствует созданию и укреплению' : language == 'EN' ? '' : 'Metoda Soroboom®, pomáhá vytváření a posilování' }}<span class="text-[#EC6A1F]">{{ language == 'RU' ? ' новых нейронных связей головного мозга ребенка' : language == 'EN' ? '' : ' nových nervových spojení mozku' }}</span></span>
  </div>
</template>
