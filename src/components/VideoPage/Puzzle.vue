<template>
  <div class="flex flex-col justify-center items-center sm:w-5/12 w-full text-center">
    <div class="flex justify-center items-center">
      <img v-if="$t('locale.language') == 'RU'" class="sm:w-1/2 w-9/12" src="../../assets/PuzzlesRU.png">
      <img v-if="$t('locale.language') == 'CZ'" class="sm:w-1/2 w-9/12" src="../../assets/PuzzlesCZ.png">
      <img v-if="$t('locale.language') == 'EN'" class="sm:w-1/2 w-9/12" src="../../assets/PuzzlesEN.png">
    </div>
    <div class="w-10/12">
      <span>{{ $t('locale.third.results_already') }} <span class="text-[#EC6A1F]">{{ $t('locale.third.after_first_month') }} </span> {{ $t('locale.third.of_training') }}</span>
    </div>
  </div>
</template>
