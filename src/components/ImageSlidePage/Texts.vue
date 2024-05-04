<script setup lang="ts">
import { ref } from 'vue';
import Check from '../../icons/Check.vue';

const texts = ref<string[]>([
  'TV с большой диагональю на котором тренер запускает тренажёр для тренировок',
  'Большие тренировочные настенные и напольные абакусы',
  'Диванчик на котором дети могут отдохнуть во время перерыва',
  'Витрина магазина в котором дети могут приобрести призы за монетки Soroboom',
  'Просторные светлые кабинеты с необходимым школьным оборудованием и демонстрационными материалами'
]);
</script>

<template>
  <div class="flex flex-col gap-4 w-11/12 xl:w-1/2 justify-center">
    <div v-for="(text, index) in texts" class="flex justify-between gap-3">
      <Check :color="index%2==0 ? '#42BE63' : '#EC6A1F'" :size="25" class="w-1/12"/>
      <span class="w-11/12">
        {{ text }}
      </span>
    </div>
  </div>
</template>