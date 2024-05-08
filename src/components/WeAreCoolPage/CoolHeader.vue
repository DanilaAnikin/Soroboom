<script setup lang="ts">
import Arrow from '../../icons/Arrow.vue';
</script>

<template>
  <div class="flex sm:justify-between justify-center">
    <span class="text-[#EC6A1F] text-3xl font-semibold">{{ $t('we_are_cool.header.said') }}, <span class="text-black"> {{ $t('we_are_cool.header.we_are_cool') }}!</span></span>
    <!-- <div class="sm:flex hidden gap-4">
      <div class="p-[20px] rounded-[44px] bg-[#EC6A1F] border w-fit h-fit">
        <Arrow color="white" :size="16" />
      </div>
      <div class="p-[20px] rounded-[44px] bg-[#EC6A1F] w-fit h-fit">
        <Arrow color="white" :size="16" side="right" />
      </div>
    </div> -->
  </div>
</template>