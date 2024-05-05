<script setup lang="ts">
import ContactForm from '../ContactForm.vue';

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="flex flex-col gap-6 sm:mt-16 mt-12 sm:px-0 px-8 font-montserrat font-medium">
    <div class="sm:w-1/3">
      <span class="text-xl">{{ language == 'RU' ? 'ЗАПИСАТЬСЯ НА' : language == 'EN' ? '' : 'ZAPSAT SE NA' }} <span class="text-green-600">{{ language == 'RU' ? 'БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ' : language == 'EN' ? '' : 'ZKUŠEBNÍ LEKCI ZDARMA' }}</span></span>
    </div>
    <ContactForm :language />
  </div>
</template>
