<script setup lang="ts">
import HandStars from '../../icons/HandStars.vue';
import ChatHeart from '../../icons/ChatHeart.vue';
import Backpack from '../../icons/Backpack.vue';
import Tasks from '../../icons/Tasks.vue';

defineProps<{
  language: string
}>();
</script>

<template>
  <div class="flex xl:flex-row text-center flex-col justify-between w-full font-montserrat mt-20 sm:px-0 px-6 xl:gap-0 gap-12">
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center sm:gap-4 gap-2">
        <div class="p-[15px] rounded-[48px] bg-[#EC6A1F] -mt-8">
          <HandStars color="white" :size="44" />
        </div>
        <span class="font-semibold text-xl"><span class="text-[#EC6A1F]">{{ language == 'RU' ? 'Ценные' : language == 'EN' ? '' : 'Cenné' }}</span> {{ language == 'RU' ? 'навыки' : language == 'EN' ? '' : 'zkušenosti' }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words sm:gap-2 gap-1">
        <span>· {{ language == 'RU' ? 'Быстрота реакции' : language == 'EN' ? '' : 'Rychlost reakcí' }}</span>
        <span>· {{ language == 'RU' ? 'Логическое мышление' : language == 'EN' ? '' : 'Logické myšlení' }}</span>
        <span>· {{ language == 'RU' ? 'Уверенность в себе' : language == 'EN' ? '' : 'Sebejistota' }}</span>
        <span>· {{ language == 'RU' ? 'Усваивать большие объемы информации' : language == 'EN' ? '' : 'Ukládat více informací' }}</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <ChatHeart color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">{{ language == 'RU' ? 'Преимущества' : language == 'EN' ? '' : 'Výhody' }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ language == 'RU' ? 'Улучшение концентрации внимания' : language == 'EN' ? '' : 'Zlepšení koncentrace vnímání' }}</span>
        <span>· {{ language == 'RU' ? 'Точные науки даются легко' : language == 'EN' ? '' : 'Lehce se dají přírodní vědy' }}</span>
        <span>· {{ language == 'RU' ? 'Повышение успеваемости в школе на': language == 'EN' ? '' : 'Zlepšení ve výuce ve škole na' }} 78%</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Tasks color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">{{ language == 'RU' ? 'Развитие' : language == 'EN' ? '' : 'Vývoj' }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ language == 'RU' ? 'Обоих полушарий мозга левое ( логическое ) правое ( образное )' : language == 'RU' ? '' : 'Obě mozkové hemisféry: levá (logická) pravá (obrazná)' }}</span>
        <span>· {{ language == 'RU' ? 'Когнитивных функций' : language == 'EN' ? '' : 'Kognitivních funkce' }}</span>
        <span>· {{ language == 'RU' ? 'КПД головного мозга' : language == 'EN' ? '' : 'Účinnost mozku' }}</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Backpack color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl">{{ language == 'RU' ? 'Для ' : language == 'EN' ? '' : 'Pro ' }}<span class="text-[#EC6A1F]"> {{ language == 'RU' ?  'дошколят' : language == 'EN' ? '' : 'předškoláky' }}</span></span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ language == 'RU' ? 'Поможем справиться с нагрузкой в школе' : language == 'EN' ? '' : 'Pomůžeme překonat zátižnost ve škole' }}</span>
        <span>· {{ language == 'RU' ? 'Научим основам счета в уме' : language == 'EN' ? '' : 'Naučíme počítat v hlavě' }}</span>
        <span>· {{ language == 'RU' ? 'Повысим уверенность ребёнка в своих силах' : language == 'EN' ? '' : 'Povýšíme jistotu ve svých silách' }}</span>
        <span>· {{ language == 'RU' ? 'Развиваем мелкую моторику' : language == 'EN' ? '' : 'Rozvíjíme jemnou motoriku'}}</span>
      </div>
    </div>
  </div>
</template>