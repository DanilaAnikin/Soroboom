<script setup lang="ts">
import FormatsPage from '../pages/FormatsPage.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="sm:w-8/12 w-full">
      <FormatsPage :language />
    </div>
  </div>
</template>