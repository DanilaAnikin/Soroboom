<script setup lang="ts">
import LastPage from '../pages/LastPage.vue';

const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <div class="w-full flex justify-center py-10 sm:mt-8">
    <div class="sm:w-8/12 w-11/12">
      <LastPage @scroll="emit('scroll', $event)" />
    </div>
  </div>
</template>