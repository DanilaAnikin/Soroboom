<script setup lang="ts">
import Facebook from '../../icons/Facebook.vue';
import Instagram from '../../icons/Instagram.vue';
import Whatsapp from '../../icons/Whatsapp.vue';
import Youtube from '../../icons/Youtube.vue';
</script>

<template>
  <div class="flex flex-col sm:w-1/3 w-full">
    <span class="font-semibold">{{ $t('last.left.copyright') }}</span>
    <span class="font-semibold">{{ $t('last.left.rights') }}.</span>
    <span class="mt-6">{{ $t('last.left.copies') }}.</span>
    <div class="flex gap-8 sm:mt-28 mt-12">
      <Facebook />
      <Instagram />
      <Youtube />
      <Whatsapp />
    </div>
  </div>
</template>