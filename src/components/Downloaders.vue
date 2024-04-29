<script setup lang="ts">
import Windows from '../icons/Windows.vue';
import AppStore from '../icons/AppStore.vue';
import GooglePlay from '../icons/GooglePlay.vue';
import MacOS from '../icons/MacOS.vue';
</script>

<template>
  <div class="flex justify-center sm:gap-3 gap-1">
    <div class="bg-[#EC6A1F] px-4 sm:py-1 py-3 rounded-3xl w-fit items-center flex">
      <Windows class="sm:flex hidden" :width="95" :height="35" color="white" />
      <Windows class="sm:hidden" :width="70" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl sm:w-fit items-center flex">
      <MacOS class="sm:flex hidden" :width="95" :height="35" color="white" />
      <MacOS class="sm:hidden" :width="70" :height="25" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit items-center flex">
      <AppStore class="sm:flex hidden" :width="95" :height="35" color="white" />
      <AppStore class="sm:hidden" :width="70" :height="25" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit items-center flex">
      <GooglePlay class="sm:flex hidden" :width="95" :height="35" color="white" />
      <GooglePlay class="sm:hidden" :width="70" :height="25" color="white" />
    </div>
  </div>
</template>