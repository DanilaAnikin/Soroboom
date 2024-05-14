<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <div class="w-full flex justify-start">
    <div class="w-8/12 shadow-sm shadow-slate-200 py-4 px-12 flex justify-between rounded-3xl bg-white font-montserrat">
      <span @click="emit('scroll', 'timetable')" class="cursor-pointer">{{ $t('locale.first.navigation.timetable') }}</span>
      <span @click="emit('scroll', 'what_is_soroboom')" class="cursor-pointer">{{ $t('locale.first.navigation.what_is_soroboom') }}?</span>
    </div>
  </div>
</template>