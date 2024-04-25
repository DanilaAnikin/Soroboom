<script setup lang="ts">
import Contact from '../components/MainPage/Contact.vue';
import Navbar from '../components/MainPage/Navbar.vue';
import Navigation from '../components/MainPage/Navigation.vue';
import Text from '../components/MainPage/Text.vue';
import Flex from '../components/MainPage/Flex.vue';
</script>

<template>
  <Navbar />
  <Navigation class="mobile:hidden" />
  <Text />
  <Contact />
  <Flex />
</template>