<script setup lang="ts">
import Stars from '../Stars.vue'
</script>

<template>
  <div class="flex justify-center gap-3 sm:flex-row flex-col sm:mt-0 mt-6">
    <div>
      <img src="../../assets/Review1.png" class="ml-12" >
      <div class="bg-[#E7FCE7] px-8 py-12 -mt-12 rounded-2xl">
        <div class="justify-between flex">
          <div class="flex justify-center gap-3 items-center">
            <span class="font-semibold">Марина Ткач</span>
            <Stars :total="5" :active="4" color="#EC6A1F" :size="18" />
          </div>
          <span>12.02.24</span>
        </div>
        <span class="text-sm">Спасибо тренеру Soroboom.  Сын приходит домой веселый и счастливый. Очень приятно когда работа с детьми – это выбор души, а не обстоятельств 🙏</span>
      </div>
    </div>
    <div>
      <img src="../../assets/Review2.png" class="ml-12" >
      <div class="bg-[#FBE1D2] px-8 py-12 -mt-12 rounded-2xl">
        <div class="justify-between flex">
          <div class="flex justify-center gap-3 items-center">
            <span class="font-semibold">Оксана Лысенко</span>
            <Stars :total="5" :active="5" color="#EC6A1F" :size="18" />
          </div>
          <span>12.02.24</span>
        </div>
        <span class="text-sm">Мы невероятно рады, что выбрали Soroboom для нашего ребенка.  Видимый результат увидели через несколько занятий. Ребёнок идет на уроки с радостью и вдохновением</span>
      </div>
    </div>
  </div>
</template>