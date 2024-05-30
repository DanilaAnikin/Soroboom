<script setup lang="ts">
import { ref } from 'vue';
import Phone from '../icons/Phone.vue';

const formOpened = ref<boolean>(false);
</script>

<template>
  <div class="flex justify-between sm:hidden w-full sm:flex-row flex-col items-center">
    <div class="sm:hidden w-full flex items-center flex-col gap-10 py-6 bg-gradient-to-b from-[#065803] from-[36.33%] to-[#27D45D] to-[100%]">
      <img src="../assets/SoroboomLogo.png" >
      <div @click="formOpened = !formOpened" id="formButtonMobile" class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit cursor-pointer">
        <Phone :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">{{ $t('locale.first.navbar.get_call') }}</span>
        </div>
      </div>
    </div>
    <div v-if="formOpened" id="formMobile" class="p-4 rounded-xl shadow-sm shadow-slate-400 sm:w-fit bg-white absolute mt-48">
      <form action="https://submit-form.com/Ijw2sgzQt" class="flex flex-col gap-4">
        <input name="Name" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_name') }`">
        <input name="Email" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_email') }`">
        <button type="submit" class="cursor-pointer bg-[#EC6A1F] rounded-3xl w-full text-center justify-center sm:py-3 sm:px-6 py-3 flex items-center">
          <span class="text-sm text-white font-semibold">{{ $t('locale.first.contact.contact_form.join') }}</span>
        </button>
      </form>
    </div>
  </div>
  <div class="sm:flex flex-col gap-10 hidden w-full justify-center items-center py-12 bg-gradient-to-l from-[#27D45D] from-[7.98%] to-[#065803] to-[75.62%]">
    <div class="w-8/12 flex justify-between items-center">
      <img src="../assets/SoroboomLogo.png" >
      <div @click="formOpened = !formOpened" id="formButtonPC" class="flex text-white items-center gap-4 p-4 rounded-3xl bg-[#EC6A1F] h-fit cursor-pointer">
        <Phone :size="14" color="white" />
        <div class="border-l border-white h-2"></div>
        <div class="flex gap-1 items-center">
          <span class="font-montserrat text-sm font-semibold">{{ $t('locale.first.navbar.get_call') }}</span>
        </div>
      </div>
    </div>
    <div v-if="formOpened" id="formPC" class="p-4 rounded-xl shadow-sm shadow-slate-400 sm:w-fit bg-white absolute mt-36 right-[17%]">
      <form action="https://submit-form.com/Ijw2sgzQt" class="flex gap-4">
        <input name="Name" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_name') }`">
        <input name="Email" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_email') }`">
        <button type="submit" class="cursor-pointer bg-[#EC6A1F] rounded-3xl w-full text-center justify-center sm:py-3 sm:px-6 py-3 flex items-center">
          <span class="text-sm text-white font-semibold">{{ $t('locale.first.contact.contact_form.join') }}</span>
        </button>
      </form>
    </div>
  </div>
</template>
