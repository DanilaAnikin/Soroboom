<template>
  <div class="sm:w-full sm:px-0 px-8 flex">
    <div class="flex flex-col gap-6 font-montserrat sm:w-1/2 text-center sm:text-start justify-end items-end">
      <span class="font-semibold text-3xl">{{ $t('locale.thanking.thanks') }} <span class="text-[#EC6A1F]">{{ $t('locale.thanking.method') }} Soroboom®</span> {{ $t('locale.thanking.child_trains') }}</span>
      <span class="sm:text-sm"><span class="font-semibold">{{ $t('locale.thanking.unique') }}.</span> {{ $t('locale.thanking.while') }}</span>
      <img class="mobile:hidden sm:flex w-full" src="../../assets/Likes.png" alt="likes">
      <div class="sm:hidden w-full mt-[-15%]">
        <img v-if="$t('locale.language') == 'RU'" class="absolute w-8/12 mt-[35%] ml-[15%]" src="../../assets/MobileThankingTopRU.png" alt="likes">
        <img v-if="$t('locale.language') == 'CZ'" class="absolute w-8/12 mt-[35%] ml-[15%]" src="../../assets/MobileThankingTopCZ.png" alt="likes">
        <img v-if="$t('locale.language') == 'EN'" class="absolute w-8/12 mt-[35%] ml-[15%]" src="../../assets/MobileThankingTopEN.png" alt="likes">
        <img class="ml-[-10%] w-full" src="../../assets/MobileThanking.png" alt="likes">
      </div>
    </div>
  </div>
</template>
