<template>
  <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color" d="M8 8.40016L11.0667 5.3335L12 6.26683L8 10.2668L4 6.26683L4.93333 5.3335L8 8.40016Z" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number,
  color?: string
}>(), {
  size: 16,
  color: 'white'
})
</script>
