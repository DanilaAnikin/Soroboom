<script setup lang="ts">
import Backpack2 from '../../icons/Backpack2.vue';
import DesktopMobile from '../../icons/DesktopMobile.vue';
</script>

<template>
  <div class="flex justify-between sm:flex-row flex-col items-center sm:gap-0 gap-12">
    <div class="flex items-center sm:flex-row flex-col sm:gap-6 gap-2 sm:w-[45%] w-11/12 p-4 bg-white shadow-sm shadow-slate-300 rounded-2xl">
      <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] sm:-ml-12 sm:mt-0 -mt-[10%]">
        <DesktopMobile color="white" :size="40" />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-[#EC6A1F] text-xl font-semibold">Онлайн<span class="text-black"> занятия:</span></span>
        <span>Понадобится 2 гаджета и доступ в интернет</span>
        <span>Благодаря собственной онлайн платформе обучения, ученик обучается с той же эффективностью что и в классе.<span class="font-semibold"> Домашние тренировки основаны на методических алгоритмах с использованием ИИ.</span></span>
      </div>
    </div>
    <div class="flex items-center sm:flex-row flex-col sm:gap-6 gap-2 sm:w-[45%] w-11/12 py-6 px-4 bg-white shadow-sm shadow-slate-300 rounded-2xl">
      <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] sm:-ml-12 sm:mt-0 -mt-[10%]">
        <Backpack2 color="white" :size="40" />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-xl font-semibold">Занятия<span class="text-[#EC6A1F]"> в Школе:</span></span>
        <span>Дети находятся под наблюдением квалифицированного тренера в течение всего времени пребывания в школе.</span>
        <span>Во время урока, тренер использует различные формы заданий, активные и за партой</span>
        <span>Благодаря небольшим группам  до 10 человек, тренер обеспечивает максимальное внимание к каждому ребенку.</span>
      </div>
    </div>
  </div>
</template>
