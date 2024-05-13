<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const texts = ref<string[]>([
  'tv_with_a_large_diagonal',
  'large_training',
  'a_sofa',
  'showcase_of_a_store',
  'spacious_bright'
]);
</script>

<template>
  <div class="flex flex-col gap-4 w-11/12 xl:w-1/2 justify-center">
    <div v-for="(text, index) in texts" class="flex justify-between gap-3">
      <Check :color="index%2==0 ? '#42BE63' : '#EC6A1F'" :size="25" class="w-1/12"/>
      <span class="w-11/12">
        {{ $t('slide_images.texts.'+text) }}
      </span>
    </div>
  </div>
</template>