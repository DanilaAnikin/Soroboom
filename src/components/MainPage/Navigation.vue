<script setup lang="ts">
defineProps<{
  language: string
}>();
</script>

<template>
  <div class="w-full flex justify-start">
    <div class="w-8/12 shadow-sm shadow-slate-200 py-4 px-12 flex justify-between rounded-3xl bg-white font-montserrat">
      <span>{{ $t('first.navigation.timetable') }}</span>
      <span>{{ $t('first.navigation.what_is_soroboom') }}?</span>
      <span>{{ $t('first.navigation.blog') }}</span>
      <span>{{ $t('first.navigation.gallery') }}</span>
    </div>
  </div>
</template>