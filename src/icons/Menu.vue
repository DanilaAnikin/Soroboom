<template>
  <svg :width="size" :height="size" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.625 7.625H20.375M4.625 12.5H20.375M4.625 17.375H20.375" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number,
}>(), {
  size: 25,
});
</script>