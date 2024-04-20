<script setup lang="ts">
import Check from '../../icons/Check.vue';
</script>

<template>
  <div class="flex w-11/12 gap-4">
    <div class="w-1/2 flex flex-col text-center">
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#EC6A1F] to-[#ffdfcd] mt-8">
          <div class="bg-white py-8 px-6 rounded-2xl">
            <span>Отслеживание прогресса<span class="font-semibold"> в 2 клика</span></span>
          </div>
        </div>
        <Check :size="25" color="#EC6A1F" class="-mt-32" />
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4] mt-32">
          <div class="bg-white py-8 px-6 rounded-2xl">
            <span>Отслеживание прогресса<span class="font-semibold"> в 2 клика</span></span>
          </div>
        </div>
        <Check :size="25" color="#42BE63" class="-mt-32" />
      </div>
    </div>
    <div class="w-1/2 flex flex-col text-center">
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#42BE63] to-[#c5ffd4] mt-8">
          <div class="bg-white py-8 px-6 rounded-2xl">
            <span>Отслеживание прогресса<span class="font-semibold"> в 2 клика</span></span>
          </div>
        </div>
        <Check :size="25" color="#42BE63" class="-mt-32" />
      </div>
      <div class="flex flex-col items-center">
        <div class="rounded-2xl p-px bg-gradient-to-b from-[#EC6A1F] to-[#ffdfcd] mt-32">
          <div class="bg-white py-8 px-6 rounded-2xl">
            <span>Отслеживание прогресса<span class="font-semibold"> в 2 клика</span></span>
          </div>
        </div>
        <Check :size="25" color="#EC6A1F" class="-mt-32" />
      </div>
    </div>
  </div>
</template>