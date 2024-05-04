<script setup lang="ts">
import Check from '../../icons/Check.vue';
</script>

<template>
  <div class="flex w-11/12 gap-4">
    <div class="w-1/2 flex flex-col text-center gap-8">
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#EC6A1F] to-[#ffdfcd] mt-8">
          <div class="bg-white pb-6 pt-0 px-6 rounded-2xl flex flex-col items-center">
            <Check :size="25" color="#EC6A1F" class="mt-[-5%]" />
            <span>Отслеживание прогресса<span class="font-semibold"> в 2 клика</span></span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4]">
          <div class="bg-white pb-6 pt-0 px-6 rounded-2xl flex flex-col items-center">
            <Check :size="25" color="#42BE63" class="mt-[-5%]" />
            <span>Эффективность обучения<span class="font-semibold"> повышается на 65%</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col text-center gap-8">
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4] mt-8">
          <div class="bg-white pb-6 pt-0 px-6 rounded-2xl flex flex-col items-center">
            <Check :size="25" color="#42BE63" class="mt-[-5%]" />
            <span class="font-semibold">Индивидуальный подход<span class="font-light"> к ученику</span></span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#EC6A1F] to-[#ffdfcd]">
          <div class="bg-white pb-6 px-6 pt-0 rounded-2xl items-center flex flex-col">
            <Check :size="25" color="#EC6A1F" class="mt-[-5%]" />
            <span>Запатентованнная<span class="font-semibold"> технология No1 на рынке</span> детского образования</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>