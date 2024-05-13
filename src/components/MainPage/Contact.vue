<script setup lang="ts">
import ContactForm from '../ContactForm.vue';
</script>

<template>
  <div class="flex flex-col gap-6 sm:mt-16 mt-12 sm:px-0 px-8 font-montserrat font-medium">
    <div class="sm:w-1/3">
      <span class="text-xl">{{ $t('first.contact.join') }} <span class="text-green-600">{{ $t('first.contact.free_trial_lesson') }}</span></span>
    </div>
    <ContactForm />
  </div>
</template>
