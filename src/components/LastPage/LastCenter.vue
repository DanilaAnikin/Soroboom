<script setup lang="ts">
const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <div class="flex flex-col sm:w-1/3 w-full sm:gap-5 gap-3">
    <span @click="emit('scroll', 'navbar')" class="text-xl font-semibold cursor-pointer">{{ $t('locale.last.center.menu') }}</span>
    <span @click="emit('scroll', 'timetable')" class="text-lg cursor-pointer">{{ $t('locale.first.navigation.timetable') }}</span>
    <span @click="emit('scroll', 'what_is_soroboom')" class="text-lg cursor-pointer">{{ $t('locale.first.navigation.what_is_soroboom') }}?</span>
  </div>
</template>