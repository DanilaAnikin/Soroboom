<script setup lang="ts">
import Backpack2 from '../../icons/Backpack2.vue';
import DesktopMobile from '../../icons/DesktopMobile.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex justify-between sm:flex-row flex-col items-center sm:gap-0 gap-12">
    <div class="flex items-center sm:flex-row flex-col sm:gap-6 gap-2 sm:w-[45%] w-11/12 p-4 bg-white shadow-sm shadow-slate-300 rounded-2xl">
      <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] sm:-ml-12 sm:mt-0 -mt-[10%]">
        <DesktopMobile color="white" :size="40" />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-[#EC6A1F] text-xl font-semibold">{{ language == 'RU' ? 'Онлайн' : 'Online' }}<span class="text-black">{{ language == 'RU' ? ' занятия' : language == 'EN' ? '' : ' lekce'}}:</span></span>
        <span>{{ language == 'RU' ? 'Понадобится 2 гаджета и доступ в интернет' : language == 'EN' ? '' : 'Bude potřeba 2 elektronická zařízení a přístup k internetu' }}</span>
        <span>{{ language == 'RU' ? 'Благодаря собственной онлайн платформе обучения, ученик обучается с той же эффективностью что и в классе.' : language == 'EN' ? '' : 'Díky vlastní online platformě lekcí se může student učit stejně efektivně, jako ve třídě.' }}<span class="font-semibold">{{ language == 'RU' ? ' Домашние тренировки основаны на методических алгоритмах с использованием ИИ.' : language == 'EN' ? '' : ' Domácí tréninky jsou založeny na metodických algoritmech s použitím AI.' }}</span></span>
      </div>
    </div>
    <div class="flex items-center sm:flex-row flex-col sm:gap-6 gap-2 sm:w-[45%] w-11/12 py-6 px-4 bg-white shadow-sm shadow-slate-300 rounded-2xl">
      <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] sm:-ml-12 sm:mt-0 -mt-[10%]">
        <Backpack2 color="white" :size="40" />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-xl font-semibold">{{ language == 'RU' ? 'Занятия' : language == 'EN' ? '' : 'Lekce' }}<span class="text-[#EC6A1F]"> {{ language == 'RU' ? ' в Школе' : language == 'EN' ? '' : ' ve škole' }}:</span></span>
        <span>{{ language == 'RU' ? 'Дети находятся под наблюдением квалифицированного тренера в течение всего времени пребывания в школе' : language == 'EN' ? '' : 'Děti jsou po celou dobu přebývání ve škole pod dohledem kvalifikovaného trenéra.' }}.</span>
        <span>{{ language == 'RU' ? 'Во время урока, тренер использует различные формы заданий, активные и за партой' : language == 'EN' ? '' : 'Během lekce trenér využívá různé formy úkolů, aktivních i v lavici' }}.</span>
        <span>{{ language == 'RU' ? 'Благодаря небольшим группам до 10 человек, тренер обеспечивает максимальное внимание к каждому ребенку' : language == 'EN' ? '' : 'Díky malým skupinám do 10 osob zajišťuje trenér maximální pozornost každému dítěti' }}.</span>
      </div>
    </div>
  </div>
</template>
