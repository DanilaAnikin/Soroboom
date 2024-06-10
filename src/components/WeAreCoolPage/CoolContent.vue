<script setup lang="ts">
import Stars from '../Stars.vue'
</script>

<template>
  <div class="flex justify-center gap-3 sm:flex-row flex-col mt-6">
    <div>
      <img src="../../assets/Review1.png" class="ml-12" >
      <div class="bg-[#E7FCE7] px-8 py-12 -mt-12 rounded-2xl">
        <div class="justify-between flex items-center">
          <span class="font-semibold">{{ $t('locale.we_are_cool.content.marina') }}</span>
          <div class="flex justify-center items-center flex-col">
            <Stars :total="5" :active="4" color="#EC6A1F" :size="18" />
            <span>{{ $t('locale.we_are_cool.content.date1') }}</span>
          </div>
        </div>
        <span class="text-sm">{{ $t('locale.we_are_cool.content.thanks_trainer') }}</span>
      </div>
    </div>
    <div>
      <img src="../../assets/Review2.png" class="ml-12" >
      <div class="bg-[#FBE1D2] px-8 py-12 -mt-12 rounded-2xl">
        <div class="justify-between flex items-center">
          <span class="font-semibold">{{ $t('locale.we_are_cool.content.oksana') }}</span>
          <div class="flex justify-center items-center flex-col">
            <Stars :total="5" :active="5" color="#EC6A1F" :size="18" />
            <span>{{ $t('locale.we_are_cool.content.date1') }}</span>
          </div>
        </div>
        <span class="text-sm">{{ $t('locale.we_are_cool.content.happy') }}</span>
      </div>
    </div>
  </div>
</template>
