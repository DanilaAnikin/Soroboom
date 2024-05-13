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
        <span class="text-[#EC6A1F] text-xl font-semibold">{{ $t('locale.sixth.modules.online') }} <span class="text-black">{{ $t('locale.sixth.modules.classes') }}:</span></span>
        <span>{{ $t('locale.sixth.modules.you_will_need') }}</span>
        <span>{{ $t('locale.sixth.modules.thanks') }}. <span class="font-semibold">{{ $t('locale.sixth.modules.home_workouts') }}</span></span>
      </div>
    </div>
    <div class="flex items-center sm:flex-row flex-col sm:gap-6 gap-2 sm:w-[45%] w-11/12 py-6 px-4 bg-white shadow-sm shadow-slate-300 rounded-2xl">
      <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] sm:-ml-12 sm:mt-0 -mt-[10%]">
        <Backpack2 color="white" :size="40" />
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-xl font-semibold">{{ $t('locale.sixth.modules.classes').charAt(0).toUpperCase() + $t('locale.sixth.modules.classes').slice(1) }} <span class="text-[#EC6A1F]"> {{ $t('locale.sixth.modules.in_school') }}:</span></span>
        <span>{{ $t('locale.sixth.modules.children_are_supervised') }}.</span>
        <span>{{ $t('locale.sixth.modules.during_the_lesson') }}.</span>
        <span>{{ $t('locale.sixth.modules.thanks_to_small_groups') }}.</span>
      </div>
    </div>
  </div>
</template>
