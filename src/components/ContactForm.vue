<script setup lang="ts">
import { ref } from 'vue';
const name = ref<string>("");
const email = ref<string>("");
</script>

<template>
  <div class="p-4 rounded-xl shadow-sm shadow-slate-400 sm:w-fit bg-white">
    <form :action="`${name && email ? 'https://submit-form.com/Ijw2sgzQt' : ''}`" class="flex gap-4 flex-col sm:flex-row">
      <input v-model="name" name="Name" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_name') }`">
      <input v-model="email" name="Email" class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('locale.first.contact.contact_form.your_email') }`">
      <button type="submit" class="cursor-pointer bg-[#EC6A1F] rounded-3xl w-full text-center justify-center sm:py-0 sm:px-6 py-3 flex items-center">
        <span class="text-sm text-white font-semibold">{{ $t('locale.first.contact.contact_form.join') }}</span>
      </button>
    </form>
  </div>
</template>