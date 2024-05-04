<script setup lang="ts">
import HandStars from '../../icons/HandStars.vue';
import ChatHeart from '../../icons/ChatHeart.vue';
import Backpack from '../../icons/Backpack.vue';
import Tasks from '../../icons/Tasks.vue';
</script>

<template>
  <div class="flex xl:flex-row text-center flex-col justify-between w-full font-montserrat mt-20 sm:px-0 px-6 xl:gap-0 gap-12">
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center sm:gap-4 gap-2">
        <div class="p-[15px] rounded-[48px] bg-[#EC6A1F] -mt-8">
          <HandStars color="white" :size="44" />
        </div>
        <span class="font-semibold text-xl"><span class="text-[#EC6A1F]">Ценные Cenné</span> навыки zkušenosti</span>
      </div>
      <div class="text-center flex flex-col items-center break-words sm:gap-2 gap-1">
        <span>· Быстрота реакции Rychlost reakcí</span>
        <span>· Логическое мышление Logické myšlení</span>
        <span>· Уверенность в себе Sebejistota</span>
        <span>· Усваивать большие объемы информации Ukládat více informací </span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <ChatHeart color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">Преимущества Výhody</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Улучшение концентрации внимания Zlepšení koncentrace vnímání</span>
        <span>· Точные науки даются легко Lehce se dají přírodní vědy</span>
        <span>· Повышение успеваемости в школе на 78% Zlepšení ve výuce ve škole na 78%</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Tasks color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">Развитие Vývoj</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Обоих полушарий мозга левое ( логическое ) правое ( образное ) Obou </span>
        <span>· Когнитивных функций</span>
        <span>· КПД головного мозга</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Backpack color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl">Для<span class="text-[#EC6A1F]"> дошколят</span></span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Поможем справиться с нагрузкой в школе</span>
        <span>· Научим основам счета в уме</span>
        <span>· Повысим уверенность ребёнка в своих силах</span>
        <span>· Развиваем мелкую моторику</span>
      </div>
    </div>
  </div>
</template>