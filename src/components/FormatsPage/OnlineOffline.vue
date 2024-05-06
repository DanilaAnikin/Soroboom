<script setup lang="ts">
defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex justify-center sm:flex-row flex-col items-center sm:gap-4 gap-44 sm:mt-12 mt-8">
    <div class="flex flex-col w-11/12 sm:w-full items-center">
      <img src="../../assets/Online.png">
      <div class="text-center flex items-center flex-col gap-2 shadow-sm shadow-slate-400 px-8 pb-5 sm:w-10/12 w-11/12 rounded-2xl bg-white -mt-8">
        <div class="px-20 py-4 bg-[#1BA63C] w-fit rounded-[40px]">
          <span class="font-montserrat text-lg font-medium text-white">{{ language == 'RU' ? 'Онлайн' : 'Online' }}:</span>
        </div>
        <span>{{ language == 'RU' ? 'Занятие проводится' : language == 'EN' ? '' : 'Lekce se konají' }}<span class="font-semibold">{{ language == 'RU' ? ' один раз в неделю' : language == 'EN' ? '' : ' jednou týdně' }} </span>{{ language == 'RU' ? ' и состоит из' : language == 'EN' ? '' : ' a skládají se ze' }}<span class="font-semibold">{{ language == 'RU' ? ' двух уроков по 35-45 мин' : language == 'EN' ? '' : ' dvou lekcí po 35-45 min' }}</span>{{ language == 'RU' ? ' с профессиональным тренером' : language == 'EN' ? '' : ' s profesionálním trenérem'}}</span>
        <span>{{ language == 'RU' ? 'В группах до 6-ти чел' : language == 'EN' ? '' : 'Ve skupinách pod 6 lidí'}}</span>
      </div>
    </div>

    <div class="flex flex-col items-center w-11/12 sm:w-full">
      <img src="../../assets/AtSchool.png">
      <div class="text-center flex flex-col items-center gap-2 shadow-sm shadow-slate-400 px-8 pb-5 sm:w-10/12 w-11/12 rounded-2xl bg-white -mt-8">
        <div class="px-20 py-4 bg-[#1BA63C] w-fit rounded-[40px]">
          <span class="font-montserrat text-lg font-medium text-white">{{ language == 'RU' ? 'В школе' : language == 'EN' ? '' : 'Ve škole'}}:</span>
        </div>
        <span>{{ language == 'RU' ? 'Занятие проводится' : language == 'EN' ? '' : 'Lekce se konají' }}<span class="font-semibold">{{ language == 'RU' ? ' один раз в неделю' : language == 'EN' ? '' : ' jednou týdně' }} </span>{{ language == 'RU' ? ' и состоит из' : language == 'EN' ? '' : ' a skládají se ze' }}<span class="font-semibold">{{ language == 'RU' ? ' двух уроков по 35-45 мин' : language == 'EN' ? '' : ' dvou lekcí po 35-45 min' }}</span>{{ language == 'RU' ? ' с профессиональным тренером' : language == 'EN' ? '' : ' s profesionálním trenérem'}}</span>
        <span>{{ language == 'RU' ? 'В группах до 10-ти чел' : language == 'EN' ? '' : 'Ve skupinách pod 10 lidí'}}</span>
      </div>
    </div>
  </div>
</template>