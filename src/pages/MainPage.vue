<script setup lang="ts">
import Contact from '../components/MainPage/Contact.vue';
import Navbar from '../components/MainPage/Navbar.vue';
import Navigation from '../components/MainPage/Navigation.vue';
import Text from '../components/MainPage/Text.vue';
import Flex from '../components/MainPage/Flex.vue';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'change-language', newLanguage: 'RU' | 'CZ' | 'EN'): void,
}>();

defineProps<{
  language: string,
}>();
</script>

<template>
  <Navbar @change-language="emit('change-language', $event)" :language />
  <Navigation class="mobile:hidden sm:flex mt-[2%]" :language />
  <Text :language />
  <Contact :language />
  <Flex :language />
</template>