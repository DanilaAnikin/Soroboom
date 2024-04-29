<script setup lang="ts">
import Arrow from '../../icons/Arrow.vue';
</script>

<template>
  <div class="flex sm:justify-between text-center">
    <span class="text-3xl font-semibold">Попробуйте наши<span class="text-[#EC6A1F]"> приложения</span></span>
    <div class="sm:flex gap-4 hidden">
      <div class="p-[20px] rounded-[44px] bg-white border-[#EBEBEB] border w-fit h-fit">
        <Arrow color="black" :size="18" />
      </div>
      <div class="p-[20px] rounded-[44px] bg-[#EC6A1F] w-fit h-fit">
        <Arrow color="white" :size="18" side="right" />
      </div>
    </div>
  </div>
</template>