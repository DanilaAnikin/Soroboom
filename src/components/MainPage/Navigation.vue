<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <div class="w-full flex justify-start">
    <div class="w-8/12 shadow-sm sm:gap-0 gap-3 flex-col sm:flex-row shadow-slate-200 py-4 sm:px-12 px-8 flex justify-between rounded-3xl sm:bg-white bg-slate-600 sm:text-black text-slate-100 font-montserrat">
      <span @click="emit('scroll', 'timetable')" id="scrollTimetable" class="cursor-pointer">{{ $t('locale.first.navigation.timetable') }}</span>
      <hr class="border-slate-500 w-full sm:hidden">
      <span @click="emit('scroll', 'what_is_soroboom')" id="scrollWhatIsSoroboom" class="cursor-pointer">{{ $t('locale.first.navigation.what_is_soroboom') }}?</span>
    </div>
  </div>
</template>
