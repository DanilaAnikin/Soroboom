<template>
  <div class="w-full flex justify-center pt-[20%]">
    <div class="flex-col max-w-[80%] text-center py-5 px-8 border border-[#EC6A1F] rounded-lg">
      <div class="text-3xl">Ви приєдналися, Дякуємо! Ми зв'яжемося з Вами найближчим часом.</div>
      <div class="mt-6 flex justify-center">
        <div class="text-xl rounded-xl border max-w-fit border-[#065803] px-4 py-2 cursor-pointer hover:bg-[#27D45D] duration-500 transition-all hover:border-none hover:text-white">
          <RouterLink to="/">Назад</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>