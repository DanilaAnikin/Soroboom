<script setup lang="ts">
import Slider from '../components/ImageSlidePage/Slider.vue';
import Texts from '../components/ImageSlidePage/Texts.vue';
</script>

<template>
  <div class="font-montserrat sm:block flex justify-center sm:flex-row items-center flex-col">
    <span class="sm:hidden text-3xl font-semibold">Как проходят<span class="text-[#EC6A1F]"> занятия</span></span>
    <Slider />
    <Texts class="sm:ml-[65%]" />
  </div>
</template>