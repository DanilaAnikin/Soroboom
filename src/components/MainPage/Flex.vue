<script setup lang="ts">
defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex w-full justify-center">
    <div class="sm:w-full w-11/12 flex sm:flex-row flex-col items-center p-6 bg-[#E7FCE7] rounded-2xl font-montserrat mt-12 text-center">
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">> 10</span> {{ language == 'RU' ? 'лет опыта' : language == 'EN' ? '' : 'let zkušeností'}}</span>
        <span class="text-sm">{{ language == 'RU' ? 'В развитии детей' : language == 'EN' ?  '' : 'Ve vývoji dětí' }}</span>
      </div>
      <div class="border border-slate-300 h-8 sm:rotate-0 rotate-90"></div>
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">> 120 000</span> {{ language == 'RU' ? 'детей' : language == 'EN' ? '' : 'dětí' }}</span>
        <span class="text-sm">{{ language == 'RU' ? 'обучили по всему миру' : language == 'EN' ? '' : 'vyučeni po celém světě' }}</span>
      </div>
      <div class="border border-slate-300 h-8 sm:rotate-0 rotate-90"></div>
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">6</span> {{ language == 'RU' ? 'стран' : language == 'EN' ? '' : 'zemí' }}</span>
        <span class="text-sm">{{ language == 'RU' ? 'онлайн и офлайн обучение' : language == 'EN' ? '' : 'online i offline lekce' }}</span>
      </div>
    </div>
  </div>
</template>