<script setup lang="ts">
import Windows from '../icons/Windows.vue';
import AppStore from '../icons/AppStore.vue';
import GooglePlay from '../icons/GooglePlay.vue';
import MacOS from '../icons/MacOS.vue';
</script>

<template>
  <div class="flex justify-center gap-3">
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit">
      <Windows :width="95" :height="35" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit">
      <AppStore :width="95" :height="35" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit">
      <GooglePlay :width="95" :height="35" color="white" />
    </div>
    <div class="bg-[#EC6A1F] px-4 py-1 rounded-3xl w-fit">
      <MacOS :width="95" :height="35" color="white" />
    </div>
  </div>
</template>