<script setup lang="ts">
import HandStars from '../../icons/HandStars.vue';
import ChatHeart from '../../icons/ChatHeart.vue';
import Backpack from '../../icons/Backpack.vue';
import Tasks from '../../icons/Tasks.vue';
</script>

<template>
  <div class="flex justify-between w-full font-montserrat mt-20">
    <div class="w-[24%] flex flex-col items-center bg-white shadow-sm shadow-slate-300 px-4 pb-12 gap-6 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[48px] bg-[#EC6A1F] -mt-8">
          <HandStars color="white" :size="44" />
        </div>
        <span class="font-semibold text-xl"><span class="text-[#EC6A1F]">Ценные</span> навыки</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Быстрота реакции</span>
        <span>· Логическое мышление</span>
        <span>· Уверенность в себе</span>
        <span>· Усваивать большие объемы информации</span>
      </div>
    </div>
    <div class="w-[24%] flex flex-col items-center bg-white shadow-sm shadow-slate-300 px-6 pb-8 gap-6 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <ChatHeart color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">Преимущества</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Улучшение концентрации внимания</span>
        <span>· Точные науки даются легко</span>
        <span>· Повышение успеваемости в школе на 78%</span>
      </div>
    </div>
    <div class="w-[24%] flex flex-col items-center bg-white shadow-sm shadow-slate-300 px-6 pb-8 gap-6 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Tasks color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">Развитие</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· Обоих полушарий мозга левое ( логическое ) правое ( образное )</span>
        <span>· Когнитивных функций</span>
        <span>· КПД головного мозга</span>
      </div>
    </div>
    <div class="w-[24%] flex flex-col items-center bg-white shadow-sm shadow-slate-300 px-6 pb-8 gap-6 rounded-2xl">
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