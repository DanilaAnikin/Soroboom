<script setup lang="ts">
defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="p-4 rounded-xl shadow-sm shadow-slate-400 sm:w-fit bg-white">
    <div class="flex gap-4 mobile:flex-col sm:flex-row">
      <input class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('first.contact.contact_form.your_name') }`">
      <input class="px-5 py-3 outline-none rounded-3xl border border-slate-400 placeholder:text-sm text-sm placeholder:font-semibold placeholder:text-slate-500" type="text" :placeholder="`${ $t('first.contact.contact_form.your_phone_number') }`">
      <div class="bg-[#EC6A1F] rounded-3xl w-full text-center justify-center sm:py-0 sm:px-6 py-3 flex items-center">
        <span class="text-sm text-white font-semibold">{{ $t('first.contact.contact_form.join') }}</span>
      </div>
    </div>
  </div>
</template>
