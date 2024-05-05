<script setup lang="ts">
import Thanking from './SecondPage/Thanking.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="mt-[10%]">
    <div class="w-full">
      <Thanking :language />
    </div>
  </div>
</template>