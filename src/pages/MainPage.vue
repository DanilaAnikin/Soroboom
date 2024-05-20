<script setup lang="ts">
import Contact from '../components/MainPage/Contact.vue';
import Navbar from '../components/MainPage/Navbar.vue';
import Navigation from '../components/MainPage/Navigation.vue';
import Text from '../components/MainPage/Text.vue';
import Flex from '../components/MainPage/Flex.vue';

const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();
</script>

<template>
  <Navbar @scroll="emit('scroll', $event)" />
  <Navigation @scroll="emit('scroll', $event)" class="hidden sm:flex mt-[2%]" />
  <Text />
  <Contact />
  <Flex />
</template>