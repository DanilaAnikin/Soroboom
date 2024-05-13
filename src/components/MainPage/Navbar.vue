<script setup lang="ts">
import SmallArrowDown from '../../icons/SmallArrowDown.vue';
import Location from '../../icons/Location.vue';
import World from '../../icons/World.vue';
import Phone from '../../icons/Phone.vue';
import Menu from '../../icons/Menu.vue';
import { ref } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/solid';

const selectorOpened = ref<boolean>(false);

function x() {
  i18n.locale = 'ru';
}
</script>

<template>
  <div class="flex justify-between py-4 font-medium items-center">
    <div class="flex items-center justify-between px-4 sm:px-0 sm:gap-0 gap-16">
      <div class="sm:hidden bg-white p-3 rounded-3xl shadow-sm shadow-slate-300">
        <Menu />
      </div>
      <img class="sm:w-1/2 w-8/12" src="../../assets/SoroboomLogo.png" alt="Soroboom">
      <div class="mobile:hidden sm:flex h-fit items-center pr-4 justify-between rounded-3xl bg-white w-fit shadow-sm shadow-slate-200">
        <div class="p-[15px] rounded-3xl bg-[#EC6A1F]">
          <Location color="white" :size="20" />
        </div>
        <span class="font-montserrat px-4 text-sm">{{ $t('first.navbar.prague') }}</span>
      </div>
    </div>
    <div class="flex h-fit justify-between items-center w-1/3">
      <div class="mobile:hidden sm:flex cursor-pointer">
        <div @click="selectorOpened = !selectorOpened" class="sm:flex text-white items-center gap-4 p-4 rounded-3xl bg-[#FFFFFF33] h-fit">
          <World :size="14" color="white" />
          <div class="border-l border-white h-2"></div>
          <div class="flex gap-1 items-center">
            <span class="font-montserrat text-sm">{{ $t('language') }}</span>
            <SmallArrowDown :size="14" color="white" />
          </div>
        </div>
        <div v-if="selectorOpened" class="absolute ml-4 top-[5.5%] py-2 px-3 w-[6%] bg-[#FFFFFF66] bg-opacity-50 rounded-2xl font-montserrat">
          <div class="gap-2 flex flex-col">
            <div @click="x()" class="flex justify-between">
              <span>RU</span>
              <CheckIcon v-if="i18n.locale == 'ru'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="i18n.locale = 'cz'" class="flex justify-between">
              <span>CZ</span>
              <CheckIcon v-if="i18n.locale == 'cz'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="i18n.locale = 'en'" class="flex justify-between">
              <span>EN</span>
              <CheckIcon v-if="i18n.locale == 'en'" class="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>
      </div>
      <div class="sm:m-0 ml-14 flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit cursor-pointer">
        <Phone :size="14" color="white" />
        <div class="mobile:hidden sm:flex border-l border-white h-2"></div>
        <div class="mobile:hidden sm:flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">{{ $t('first.navbar.get_call') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>