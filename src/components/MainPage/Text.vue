<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const list = ref<string[]>([
  'speed_of_decision_making',
  'concentration_of_attention',
  'speed_of_reactions',
  'memory'
]);
</script>

<template>
  <div class="font-montserrat sm:w-1/2 mt-12 sm:px-0 px-4 flex flex-col gap-6">
    <span class="font-bold text-4xl">{{ $t('locale.first.text.menthal_arithmetic') }} - <span class="text-[#EC6A1F]">{{ $t('locale.first.text.development_of_intelligence') }}</span></span>
    <div class="sm:my-8 sm:mt-0 mt-96">
      <span class="font-semibold">{{ $t('locale.first.text.improves') }}:</span>
      <div class="flex w-full flex-wrap">
        <div v-for="(each, index) in list" class="flex w-1/2 sm:gap-3 gap-2 items-center py-2"
        >
          <Check :size="25" :color="`${ index == 0 || index == 3 ? '#42BE63' : '#EC6A1F'}`" />
          <span class="sm:w-7/12 w-full">{{ $t('locale.first.text.'+each) }}</span>
        </div>
      </div>
    </div>
    <span class="text-lg">{{ $t('locale.first.text.your_child') }} Soroboom®</span>
  </div>
</template>