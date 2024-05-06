<script setup lang="ts">
import SixthModules from '../components/SixthPage/SixthModules.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex flex-col items-center text-center sm:text-start gap-8 font-montserrat ">
    <span class="text-3xl font-semibold">{{ language == 'RU' ? 'Как проходит обучение' : language == 'EN' ? '' : 'Jak se koná výuka' }}<span class="text-[#EC6A1F]">{{ language == 'RU' ? ' в Soroboom®?' : language == 'EN' ? ' in Soroboom®?' : ' v Soroboom®?'}}</span> </span>
    <span class="sm:w-full w-11/12 text-center">{{ language == 'RU' ? 'посещать' : language == 'EN' ? '' : 'navštěvovat' }} Soroboom<span class="font-semibold">{{ language == 'RU' ? ' достаточно раз в неделю' : language == 'EN' ? '' : ' alespoň jednou týdně' }}</span></span>
    <img class="w-9/12 sm:flex hidden" src="../assets/SixthPage.png">
    <img class="w-full sm:hidden" src="../assets/MobileSixthPage.png">
    <SixthModules :language />
  </div>
</template>
