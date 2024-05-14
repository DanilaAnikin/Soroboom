<script setup lang="ts">
import Main from './components/Main.vue';
import Second from './components/Second.vue';
import Third from './components/Third.vue';
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
import Photo from './components/Photo.vue';
import MobilePhoto from './components/MobilePhoto.vue';

const sixth = document.getElementById('sixth');

function scroll(element: string) {
  if(element == 'timetable') {

  }
  else if(element == 'what_is_soroboom') {    
    sixth!.scrollIntoView();
  }
  else if(element == 'menu') {

  }
  else if(element == 'franchise') {
    
  }
}
</script>

<template>
  <Main @scroll="scroll($event)" class="w-full flex justify-center font-montserrat" />
  <Second class="w-full flex justify-center font-montserrat" />
  <Photo class="w-full sm:flex hidden justify-start font-montserrat" />
  <MobilePhoto class="w-full sm:hidden justify-start font-montserrat" />
  <Third class="w-full flex justify-center font-montserrat" />
  <MobilePinkPage class="w-full flex justify-center sm:hidden font-montserrat" />
  <!-- <Fourth class="w-full sm:flex hidden justify-center font-montserrat" /> -->
  <!-- <FourthMobile class="w-full sm:hidden justify-center font-montserrat" /> -->
  <Formats class="w-full flex justify-center font-montserrat" />
  <Sixth class="w-full flex justify-center font-montserrat" id="sixth" />
  <SlideImages class="w-full flex justify-center font-montserrat" />
  <Eight class="w-full flex justify-center font-montserrat" />
  <Apps class="w-full flex justify-center font-montserrat" />
  <SystemWorking class="w-full flex justify-center font-montserrat" />
  <WeAreCool class="w-full flex justify-center font-montserrat" />
  <KidLike class="w-full flex justify-center font-montserrat" />
  <Line class="w-full flex justify-center font-montserrat" />
  <Last class="w-full flex justify-center font-montserrat" />
</template>
