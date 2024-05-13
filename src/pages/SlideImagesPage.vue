<script setup lang="ts">
import Slider from '../components/ImageSlidePage/Slider.vue';
import Texts from '../components/ImageSlidePage/Texts.vue';
</script>

<template>
  <div class="font-montserrat flex justify-center xl:flex-row gap-8 items-center flex-col">
    <span class="sm:hidden text-3xl font-semibold">{{ $t('locale.slide_images.how_are_the_classes') }} <span class="text-[#EC6A1F]"> {{ $t('locale.slide_images.conducted') }}</span></span>
    <Slider />
    <Texts />
  </div>
</template>