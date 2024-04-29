<script setup lang="ts">
import AppsHeader from '../components/AppsPage/AppsHeader.vue';
import AppsContent from '../components/AppsPage/AppsContent.vue';
</script>

<template>
  <div class="flex flex-col gap-8">
    <AppsHeader />
    <div class="flex flex-col items-center">
      <AppsContent />
    </div>
  </div>
</template>