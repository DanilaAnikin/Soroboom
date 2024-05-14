<script setup lang="ts">
import LastCenter from '../components/LastPage/LastCenter.vue';
import LastLeft from '../components/LastPage/LastLeft.vue';
import LastRight from '../components/LastPage/LastRight.vue';

const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <div class="flex sm:gap-8 gap-12 flex-col sm:flex-row">
    <LastLeft />
    <LastCenter @scroll="emit('scroll', $event)" />
    <LastRight />
  </div>
</template>