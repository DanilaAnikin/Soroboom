<script setup lang="ts">
import Main from './components/Main.vue';
import Second from './components/Second.vue';
import Third from './components/Third.vue';
import Fourth from './components/Fourth.vue';
import Formats from './components/Formats.vue';
import Sixth from './components/Sixth.vue';
import SlideImages from './components/SlideImages.vue';
import Eight from './components/Eight.vue';
import Apps from './components/Apps.vue';
import SystemWorking from './components/SystemWorking.vue';
import WeAreCool from './components/WeAreCool.vue';
import KidLike from './components/KidLike.vue';
import Line from './components/Line.vue';
import Last from './components/Last.vue';
import MobilePinkPage from './components/MobilePinkPage.vue';
import FourthMobile from './components/FourthMobile.vue';
import Photo from './components/Photo.vue';
import MobilePhoto from './components/MobilePhoto.vue';
import { ref } from 'vue';

function changeLanguage(language: 'RU' | 'CZ' | 'EN') {
  window.location.href = language == 'RU' ? '/ru' : language == 'CZ' ? '/cz' : 'en';
}

const language = ref<string>(window.location.pathname.slice(1).toUpperCase());
</script>

<template>
  <Main class="w-full flex justify-center font-montserrat" @change-language="changeLanguage($event)" :language />
  <Second class="w-full flex justify-center font-montserrat" :language />
  <Photo class="w-full sm:flex hidden justify-start font-montserrat" :language />
  <MobilePhoto class="w-full sm:hidden justify-start font-montserrat" :language />
  <Third class="w-full flex justify-center font-montserrat" :language />
  <MobilePinkPage class="w-full flex justify-center sm:hidden font-montserrat" :language />
  <!-- <Fourth class="w-full sm:flex hidden justify-center font-montserrat" :language /> -->
  <FourthMobile class="w-full sm:hidden justify-center font-montserrat" :language />
  <Formats class="w-full flex justify-center font-montserrat" :language />
  <Sixth class="w-full flex justify-center font-montserrat" :language />
  <SlideImages class="w-full flex justify-center font-montserrat" :language />
  <Eight class="w-full flex justify-center font-montserrat" :language />
  <Apps class="w-full flex justify-center font-montserrat" :language />
  <SystemWorking class="w-full flex justify-center font-montserrat" :language />
  <WeAreCool class="w-full flex justify-center font-montserrat" :language />
  <KidLike class="w-full flex justify-center font-montserrat" :language />
  <Line class="w-full flex justify-center font-montserrat" :language />
  <Last class="w-full flex justify-center font-montserrat" :language />
</template>
