<script setup lang="ts">
defineProps<{
  language: string
}>();
</script>

<template>
  <div class="sm:w-full sm:px-0 px-8 flex">
    <div class="flex flex-col gap-6 font-montserrat sm:w-1/2 text-center sm:text-start justify-end items-end">
      <span class="font-semibold text-3xl">{{ language == 'RU' ? 'Благодаря ' : language == 'EN' ? '' : 'Díky ' }}<span class="text-[#EC6A1F]">{{ language == 'RU' ? 'методике' : language == 'EN' ? '' : 'metodě' }} Soroboom®</span> {{ language == 'RU' ? 'ребенок тренирует:' : language == 'EN' ? '' : 'dítě trénuje' }}</span>
      <span class="sm:text-sm">
          <span class="font-semibold">{{ language == 'RU' ? 'Уникальная методика активизирует работу обоих полушарий мозга ребенка.' : language == 'EN' ? '' : 'Unikátní metoda aktivuje práci obou hemisfér mozku dítěte.' }}</span> {{ language == 'RU' ? 'Во время тренировок ребенок использует японские счеты соробан как средство для решения задач, вовлекая в это свое воображение.' : language == 'EN' ? '' : 'Během tréninku dítě používá japonské počítadlo jako pomocníka k řešení úkolů, používá při tom svou fantazii.' }}
      </span>
      <img class="mobile:hidden sm:flex w-full" src="../../assets/Likes.png" alt="likes">
      <div class="sm:hidden w-full mt-[-15%]">
        <img class="absolute w-8/12 mt-[35%] ml-[15%]" src="../../assets/MobileThankingTop.png" alt="likes">
        <img class="ml-[-10%] w-full" src="../../assets/MobileThanking.png" alt="likes">
      </div>
    </div>
  </div>
</template>
