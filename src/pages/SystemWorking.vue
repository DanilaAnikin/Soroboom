<script setup lang="ts">
import MobileSystemWorkingContent from '../components/MobileSystemWorkingContent.vue';
</script>

<template>
  <div class="w-full flex flex-col">
    <img class="sm:flex hidden w-11/12" src="../assets/SystemWorking.png" >
    <img class="sm:hidden mt-[-20%]" src="../assets/MobileSystemWorking.png" >
    <MobileSystemWorkingContent class="sm:hidden" />
  </div>
</template>