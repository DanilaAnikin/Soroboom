<script setup lang="ts">

</script>

<template>
  <div class="flex w-full justify-center flex-wrap">
    <img class="hidden sm:flex" src="../assets/Book.png">
    <div class="flex-col justify-center items-center text-center flex gap-4">
        <span class="text-[#EC6A1F] text-3xl font-semibold">{{ $t('locale.whatWillYouGet.what') }} <span class="text-black"> {{ $t('locale.whatWillYouGet.get') }}? </span></span>
        <span>{{ $t('locale.whatWillYouGet.come') }} <span> {{ $t('locale.whatWillYouGet.atLeast') }} </span></span>
        <div class="text-center flex gap-2 flex-col items-center">
            <span class="text-[#EC6A1F] font-semibold text-xl">{{ $t('locale.whatWillYouGet.book') }}</span>
            <div class="flex flex-col gap-2 border border-[#EC6A1F] py-3 sm:px-14 px-4 rounded-xl sm:w-fit w-10/12">
                <span>{{ $t('locale.whatWillYouGet.different') }}</span>
                <span>{{ $t('locale.whatWillYouGet.rules') }}</span>
                <span>{{ $t('locale.whatWillYouGet.develops') }}</span>
                <span>{{ $t('locale.whatWillYouGet.homework') }}</span>
            </div>
        </div>
        <div class="text-center flex gap-2 flex-col items-center">
            <span class="text-[#179A40] font-semibold text-xl">{{ $t('locale.whatWillYouGet.abacus') }}</span>
            <div class="flex flex-col gap-2 border border-[#179A40] py-3 sm:px-14 px-4 rounded-xl sm:w-fit w-10/12">
                <span>{{ $t('locale.whatWillYouGet.develops2') }}</span>
                <span>{{ $t('locale.whatWillYouGet.helps') }}</span>
                <span>{{ $t('locale.whatWillYouGet.personal') }}</span>
                <span>{{ $t('locale.whatWillYouGet.use') }}</span>
            </div>
        </div>
    </div>
    <img class="sm:hidden" src="../assets/Book.png">
  </div>
</template>
