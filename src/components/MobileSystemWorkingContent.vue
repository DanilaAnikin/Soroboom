<script setup lang="ts">

</script>

<template>
  <div class="w-full flex justify-center flex-col items-center text-center pt-12 gap-6 font-montserrat">
    <div class="w-full flex justify-center flex-col items-center">
      <div class="w-11/12 rounded-xl p-6 bg-[#E7FCE7]">
        <span>{{ $t('system_working.our_system_helps') }} <span class="font-bold"> {{ $t('system_working.formation') }} </span> {{ $t('system_working.child_thanks') }}.</span>
      </div>
    </div>
    <div class="w-full flex justify-center flex-col items-center">
      <div class="w-11/12 rounded-xl flex flex-col p-6 bg-[#FBE1D2]">
        <span>{{ $t('system_working.innovative_teaching') }}.</span>
        <span>{{ $t('system_working.implementation') }}, <span class="font-semibold"> {{ $t('system_working.helps_individualy') }}.</span></span>
      </div>
    </div>
    <div class="w-full flex justify-center flex-col items-center">
      <div class="w-11/12 rounded-xl flex flex-col p-6 bg-[#E7FCE7]">
        <span>{{ $t('system_working.unique_system') }} <span class="font-semibold"> {{ $t('system_working.helps_child') }}:</span></span>
        <span>{{ $t('system_working.self_confidence') }}</span>
        <span>{{ $t('system_working.increase_motivation') }}</span>
        <span>{{ $t('system_working.love_math') }}</span>
      </div>
    </div>
  </div>
</template>