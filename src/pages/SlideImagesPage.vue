<script setup lang="ts">
import Slider from '../components/ImageSlidePage/Slider.vue';
import Texts from '../components/ImageSlidePage/Texts.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="font-montserrat flex justify-center xl:flex-row gap-8 items-center flex-col">
    <span class="sm:hidden text-3xl font-semibold">Как проходят<span class="text-[#EC6A1F]"> занятия</span></span>
    <Slider />
    <Texts :language />
  </div>
</template>