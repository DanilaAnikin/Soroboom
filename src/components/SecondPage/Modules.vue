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
        <span class="font-semibold text-xl"><span class="text-[#EC6A1F]">{{ $t('second.modules.valuable') }}</span> {{ $t('second.modules.skills') }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words sm:gap-2 gap-1">
        <span>· {{ $t('second.modules.speed_of_reactions') }}</span>
        <span>· {{ $t('second.modules.logical_thinking') }}</span>
        <span>· {{ $t('second.modules.self_confidence') }}</span>
        <span>· {{ $t('second.modules.absorb') }}</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <ChatHeart color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">{{ $t('second.modules.benefits') }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ $t('second.modules.improved_concentration') }}</span>
        <span>· {{ $t('second.modules.exact_sciences') }}</span>
        <span>· {{ $t('second.modules.increased_school') }} 78%</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Tasks color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl text-[#EC6A1F]">{{ $t('second.modules.extension') }}</span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ $t('second.modules.both_hemispheres') }}</span>
        <span>· {{ $t('second.modules.cognitive_functions') }}</span>
        <span>· {{ $t('second.modules.brain_efficiency') }}</span>
      </div>
    </div>
    <div class="xl:w-[24%] flex flex-col items-center bg-white sm:shadow-md shadow-md shadow-slate-500 px-2 sm:px-4 sm:pb-12 pb-6 sm:gap-6 gap-2 rounded-2xl">
      <div class="flex flex-col items-center gap-4">
        <div class="p-[15px] rounded-[44px] bg-[#EC6A1F] -mt-8">
          <Backpack color="white" :size="40" />
        </div>
        <span class="font-semibold text-xl">{{ $t('second.modules.for') }} <span class="text-[#EC6A1F]"> {{ $t('second.modules.preschoolers') }}</span></span>
      </div>
      <div class="text-center flex flex-col items-center break-words gap-2">
        <span>· {{ $t('second.modules.let_us_help') }}</span>
        <span>· {{ $t('second.modules.let_us_teach') }}</span>
        <span>· {{ $t('second.modules.increase') }}</span>
        <span>· {{ $t('second.modules.developing') }}</span>
      </div>
    </div>
  </div>
</template>