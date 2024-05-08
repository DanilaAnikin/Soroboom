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
            <span>{{ $t('eight.cards.progress_tracking') }} <span class="font-semibold">{{ $t('eight.cards.in_two_clicks') }}</span></span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4]">
          <div class="bg-white pb-6 pt-0 px-6 rounded-2xl flex flex-col items-center">
            <Check :size="25" color="#42BE63" class="mt-[-5%]" />
            <span>{{ $t('eight.cards.training_effectiveness') }} <span class="font-semibold"> {{ $t('eight.cards.increases') }}</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col text-center gap-8">
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4] mt-8">
          <div class="bg-white pb-6 pt-0 px-6 rounded-2xl flex flex-col items-center">
            <Check :size="25" color="#42BE63" class="mt-[-5%]" />
            <span class="font-semibold">{{ $t('eight.cards.individual_approach') }} <span class="font-light"> {{ $t('eight.cards.to_the_student') }}</span></span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#EC6A1F] to-[#ffdfcd]">
          <div class="bg-white pb-6 px-6 pt-0 rounded-2xl items-center flex flex-col">
            <Check :size="25" color="#EC6A1F" class="mt-[-5%]" />
            <span>{{ $t('eight.cards.patented') }} <span class="font-semibold"> {{ $t('eight.cards.technology_one') }} </span> {{ $t('eight.cards.childrens_education') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>