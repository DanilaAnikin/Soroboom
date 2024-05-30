<script setup lang="ts">
import { ref } from 'vue';
import Check from '../icons/Check.vue';

const list = ref<string[]>([
    'fourToFive',
    'full',
    'homework',
    'olympics',
    'consultation',
    'one',
])
</script>

<template>
    <div class="flex justify-center w-full py-16">
        <div class="sm:w-8/12 w-11/12 flex flex-col items-center gap-8">
            <div class="bg-[#E7FCE7] flex justify-center rounded-3xl w-full py-6">
                <span class="text-[#EC6A1F] text-3xl font-bold text-center">-10% <span class="text-black"> {{ $t('locale.discount.firstMonth') }}</span></span>
            </div>
            <div class="flex justify-between w-full flex-col sm:flex-row items-center">
                <div class="flex flex-col gap-6 w-1/2">
                    <span class="text-2xl font-semibold">{{ $t('locale.discount.what') }} <span class="text-[#EC6A1F]"> {{ $t('locale.discount.subscription') }}:</span></span>
                    <div>
                        <div v-for="(item, index) in list" class="flex py-2 gap-3">
                            <div class="w-fit">
                                <Check :size="25" />
                            </div>
                            <span>{{ $t('locale.discount.' + list[index]) }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex sm:w-1/2 py-8 flex-wrap gap-6 justify-center">
                    <div class="flex flex-col items-center gap-3 self-start">
                        <div class="flex justify-center text-center items-center bg-[#EC6A1F] text-white py-6 px-12 rounded-lg">
                            <span class="text-3xl font-semibold">1 {{ $t('locale.discount.month') }}</span>
                        </div>
                        <span class="text-[#EC6A1F] font-extrabold text-3xl">2000 {{ $t('locale.discount.crown') }}</span>
                    </div>
                    <div class="flex flex-col items-center gap-3 self-end">
                        <div class="flex justify-center text-center items-center bg-[#1CAD41] text-white py-6 px-12 rounded-lg">
                            <span class="text-3xl font-semibold">3 {{ $t('locale.discount.months') }}</span>
                        </div>
                        <span class="text-[#1CAD41] font-extrabold text-3xl">5400 {{ $t('locale.discount.crown') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
