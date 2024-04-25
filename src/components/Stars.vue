<script setup lang="ts">
import Star from '../icons/Star.vue';

defineProps<{
  total: number,
  active: number,
  color: string,
  size: number
}>();
</script>

<template>
  <div class="flex items-center">
    <Star v-for="star in active" :color="color" :size="size" />
    <Star v-for="star in total-active" :color="color" :size="size" :filled="false" />
  </div>
</template>