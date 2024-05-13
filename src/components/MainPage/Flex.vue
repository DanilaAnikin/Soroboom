<template>
  <div class="flex w-full justify-center">
    <div class="sm:w-full w-11/12 flex sm:flex-row flex-col items-center p-6 bg-[#E7FCE7] rounded-2xl font-montserrat mt-12 text-center">
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3 flex-wrap px-4">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">> 10</span> {{ $t('locale.first.flex.years_of_experience') }}</span>
        <span class="text-sm">{{ $t('locale.first.flex.in_child_development') }}</span>
      </div>
      <div class="border border-slate-300 h-8 sm:rotate-0 rotate-90"></div>
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3 flex-wrap px-4">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">> 120 000</span> {{ $t('locale.first.flex.children') }}</span>
        <span class="text-sm">{{ $t('locale.first.flex.trained') }}</span>
      </div>
      <div class="border border-slate-300 h-8 sm:rotate-0 rotate-90"></div>
      <div class="flex flex-col items-center justify-center gap-4 sm:w-1/3 flex-wrap px-4">
        <span class="font-semibold text-3xl"><span class="text-[#EC6A1F]">6</span> {{ $t('locale.first.flex.countries') }}</span>
        <span class="text-sm">{{ $t('locale.first.flex.online') }}</span>
      </div>
    </div>
  </div>
</template>