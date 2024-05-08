<script setup lang="ts">
defineProps<{
  language: string
}>();
</script>

<template>
  <div class="sm:w-full sm:px-0 px-8 flex">
    <div class="flex flex-col gap-6 font-montserrat sm:w-1/2 text-center sm:text-start justify-end items-end">
      <span class="font-semibold text-3xl">{{ $t('thanking.thanks') }} <span class="text-[#EC6A1F]">{{ $t('thanking.method') }} Soroboom®</span> {{ $t('thanking.child_trains') }}</span>
      <span class="sm:text-sm"><span class="font-semibold">{{ $t('thanking.unique') }}.</span> {{ $t('thanking.while') }}</span>
      <img class="mobile:hidden sm:flex w-full" src="../../assets/Likes.png" alt="likes">
      <div class="sm:hidden w-full mt-[-15%]">
        <img class="absolute w-8/12 mt-[35%] ml-[15%]" src="../../assets/MobileThankingTop.png" alt="likes">
        <img class="ml-[-10%] w-full" src="../../assets/MobileThanking.png" alt="likes">
      </div>
    </div>
  </div>
</template>
