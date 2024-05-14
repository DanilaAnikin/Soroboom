<script setup lang="ts">
import SmallArrowDown from '../../icons/SmallArrowDown.vue';
import Location from '../../icons/Location.vue';
import World from '../../icons/World.vue';
import Phone from '../../icons/Phone.vue';
import Menu from '../../icons/Menu.vue';
import { ref } from 'vue';
import { CheckIcon } from '@heroicons/vue/24/solid';
import { useI18n } from 'vue-i18n';
import Navigation from './Navigation.vue';

const emit = defineEmits<{
  (e: 'scroll', scroller: string): void,
}>();

const { t, locale } = useI18n({ useScope: 'global' })

function changeLanguage(newLanguage: 'ru' | 'cz' | 'en') {
  locale.value = newLanguage;
}

const selectorOpened = ref<boolean>(false);
const menuOpened = ref<boolean>(false);
const formOpened = ref<boolean>(false);
</script>

<template>
  <div class="flex justify-between py-4 font-medium items-center">
    <div class="flex items-center justify-between px-4 sm:px-0 sm:gap-0 gap-16">
      <div @click="menuOpened = !menuOpened" class="sm:hidden bg-white p-3 rounded-3xl shadow-sm shadow-slate-300 cursor-pointer">
        <Menu />
      </div>
      <div v-if="menuOpened" class="cursor-pointer absolute left-5 top-20 rounded-3xl flex gap-4">
        <div @click="selectorOpened = !selectorOpened" class="flex sm:hidden text-white items-center gap-4 bg-slate-600 p-4 rounded-3xl h-fit">
          <World :size="14" color="white" />
          <div class="border-l border-white h-2"></div>
          <div class="flex gap-1 items-center">
            <span class="font-montserrat text-sm">{{ $t('locale.language') }}</span>
            <SmallArrowDown :size="14" color="white" />
          </div>
        </div>
        <div v-if="selectorOpened" class="sm:hidden absolute mt-16 py-3 sm:px-6 px-4 w-[30%] bg-slate-600 text-slate-100 rounded-2xl font-montserrat">
          <div class="gap-2 flex flex-col w-full">
            <div @click="changeLanguage('ru')" class="flex justify-between">
              <span>RU</span>
              <CheckIcon v-if="$t('locale.language') == 'RU'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="changeLanguage('cz')" class="flex justify-between">
              <span>CZ</span>
              <CheckIcon v-if="$t('locale.language') == 'CZ'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="changeLanguage('en')" class="flex justify-between">
              <span>EN</span>
              <CheckIcon v-if="$t('locale.language') == 'EN'" class="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>
        <Navigation @scroll="emit('scroll', $event)" />
      </div>
      <img class="sm:w-1/2 w-8/12" src="../../assets/SoroboomLogo.png" alt="Soroboom">
      <div class="mobile:hidden sm:flex h-fit items-center pr-4 justify-between rounded-3xl bg-white w-fit shadow-sm shadow-slate-200">
        <div class="p-[15px] rounded-3xl bg-[#EC6A1F]">
          <Location color="white" :size="20" />
        </div>
        <span class="font-montserrat px-4 text-sm">{{ $t('locale.first.navbar.prague') }}</span>
      </div>
    </div>
    <div class="flex h-fit justify-between items-center w-1/3">
      <div class="mobile:hidden sm:flex cursor-pointer">
        <div @click="selectorOpened = !selectorOpened" class="sm:flex text-white items-center gap-4 p-4 rounded-3xl bg-[#FFFFFF33] h-fit">
          <World :size="14" color="white" />
          <div class="border-l border-white h-2"></div>
          <div class="flex gap-1 items-center">
            <span class="font-montserrat text-sm">{{ $t('locale.language') }}</span>
            <SmallArrowDown :size="14" color="white" />
          </div>
        </div>
        <div v-if="selectorOpened" class="absolute ml-4 top-[7%] py-2 px-3 w-[10%] bg-[#FFFFFF66] bg-opacity-50 rounded-2xl font-montserrat">
          <div class="gap-2 flex flex-col">
            <div @click="changeLanguage('ru')" class="flex justify-between">
              <span>RU</span>
              <CheckIcon v-if="$t('locale.language') == 'RU'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="changeLanguage('cz')" class="flex justify-between">
              <span>CZ</span>
              <CheckIcon v-if="$t('locale.language') == 'CZ'" class="w-6 h-6 text-green-700" />
            </div>
            <hr class="border-slate-500 w-full">
            <div @click="changeLanguage('en')" class="flex justify-between">
              <span>EN</span>
              <CheckIcon v-if="$t('locale.language') == 'EN'" class="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div @click="formOpened = !formOpened" class="sm:m-0 ml-14 w-fit flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit cursor-pointer">
          <Phone :size="14" color="white" />
          <div class="mobile:hidden sm:flex border-l border-white h-2"></div>
          <div class="mobile:hidden sm:flex gap-1 items-center">
            <span class="font-montserrat text-sm font-semibold">{{ $t('locale.first.navbar.get_call') }}</span>
          </div>
        </div>
        <div v-if="formOpened" class="p-4 rounded-xl shadow-sm shadow-slate-400 sm:w-fit bg-white absolute top-20 mobile:right-5">
          <form action="https://submit-form.com/Ijw2sgzQt" class="flex gap-4 flex-col">
            <input name="Name" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_name') }`">
            <input name="Email" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_email') }`">
            <button type="submit" class="cursor-pointer bg-[#EC6A1F] rounded-3xl w-full text-center justify-center sm:py-3 sm:px-6 py-3 flex items-center">
              <span class="text-sm text-white font-semibold">{{ $t('locale.first.contact.contact_form.join') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>