<script setup lang="ts">
import LastCenter from '../components/LastPage/LastCenter.vue';
import LastLeft from '../components/LastPage/LastLeft.vue';
import LastRight from '../components/LastPage/LastRight.vue';
</script>

<template>
  <div class="flex sm:gap-8 gap-12 flex-col sm:flex-row">
    <LastLeft />
    <LastCenter />
    <LastRight />
  </div>
</template>