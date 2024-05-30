<script setup lang="ts">

</script>

<template>
<div class="flex w-full flex-col items-center py-12 gap-6">
  <span class="text-3xl font-semibold">{{ $t('locale.aboutTeachers.about') }} <span class="text-[#EC6A1F]">{{ $t('locale.aboutTeachers.teachers') }}</span></span>
  <div class="flex justify-center items-center sm:gap-4 gap-8 sm:w-8/12 w-11/12 flex-col sm:flex-row flex-wrap sm:flex-nowrap">
    <div class="flex sm:w-full w-10/12 flex-col items-center">
      <img src="../assets/CzechPedagog.png">
      <div class="flex flex-col items-center gap-4 shadow-md rounded-3xl pt-1 pb-6 px-4">
        <span class="py-4 sm:px-10 px-5 text-center bg-[#1BA63C] rounded-3xl text-white">{{ $t('locale.aboutTeachers.czech') }} {{ $t('locale.aboutTeachers.teacher') }}</span>
        <span class="text-center">{{ $t('locale.aboutTeachers.completed') }} <span class="font-semibold">{{ $t('locale.aboutTeachers.qualificated') }}</span> {{ $t('locale.aboutTeachers.has') }}</span>
        <div class="flex justify-center">
          <img v-for="i in 3" src="../assets/Certificate.png" class="w-10/12">
        </div>
      </div>
    </div>
    <div class="flex sm:w-full w-10/12 flex-col items-center">
    <img src="../assets/UkrainePedagog.png">
    <div class="flex flex-col items-center gap-4 shadow-md rounded-3xl pt-1 pb-6 px-4">
        <span class="py-4 sm:px-10 px-5 text-center bg-[#1BA63C] rounded-3xl text-white">{{ $t('locale.aboutTeachers.czech') }} {{ $t('locale.aboutTeachers.teacher') }}</span>
        <span class="text-center">{{ $t('locale.aboutTeachers.completed') }} <span class="font-semibold">{{ $t('locale.aboutTeachers.qualificated') }}</span> {{ $t('locale.aboutTeachers.has') }}</span>
        <div class="flex justify-center">
        <img v-for="i in 3" src="../assets/Certificate.png" class="w-10/12">
        </div>
    </div>
    </div>
    <div class="flex sm:w-full w-10/12 flex-col items-center">
    <img src="../assets/RussianPedagog.png">
    <div class="flex flex-col items-center gap-4 shadow-md rounded-3xl pt-1 pb-6 px-4">
        <span class="py-4 sm:px-10 px-5 text-center bg-[#1BA63C] rounded-3xl text-white">{{ $t('locale.aboutTeachers.czech') }} {{ $t('locale.aboutTeachers.teacher') }}</span>
        <span class="text-center">{{ $t('locale.aboutTeachers.completed') }} <span class="font-semibold">{{ $t('locale.aboutTeachers.qualificated') }}</span> {{ $t('locale.aboutTeachers.has') }}</span>
        <div class="flex justify-center">
        <img v-for="i in 3" src="../assets/Certificate.png" class="w-10/12">
        </div>
    </div>
    </div>
  </div>
</div>
</template>