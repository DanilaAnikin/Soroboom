<template>
  <div class="flex justify-center sm:flex-row flex-col items-center sm:gap-4 gap-12 mt-8">
    <div class="flex flex-col w-11/12 sm:w-full items-center">
      <img src="../../assets/Online.png">
      <div class="text-center flex items-center flex-col gap-2 shadow-sm shadow-slate-400 px-8 pb-5 sm:w-9/12 w-11/12 rounded-2xl bg-white -mt-12">
        <div class="px-20 py-3 bg-[#1BA63C] w-fit rounded-[40px]">
          <span class="font-montserrat text-lg font-medium text-white">{{ $t('locale.formats.online_offline.online') }}:</span>
        </div>
        <span>{{ $t('locale.formats.online_offline.the_class_is_held') }} <span class="font-semibold"> {{ $t('locale.formats.online_offline.once_a_week') }} </span> {{ $t('locale.formats.online_offline.and_consists_of') }} <span class="font-semibold"> {{ $t('locale.formats.online_offline.two_classes') }} </span> {{ $t('locale.formats.online_offline.with_proffesional_trainer') }} </span>
        <span>{{ $t('locale.formats.online_offline.in_groups_up_to_six_people') }}</span>
      </div>
    </div>

    <div class="flex flex-col items-center w-11/12 sm:w-full">
      <img src="../../assets/AtSchool.png">
      <div class="text-center flex flex-col items-center gap-2 shadow-sm shadow-slate-400 px-8 pb-5 sm:w-10/12 w-11/12 rounded-2xl bg-white -mt-8">
        <div class="px-20 py-3 bg-[#1BA63C] w-fit rounded-[40px]">
          <span class="font-montserrat text-lg font-medium text-white">{{ $t('locale.formats.online_offline.in_school') }}:</span>
        </div>
        <span>{{ $t('locale.formats.online_offline.the_class_is_held') }} <span class="font-semibold">{{ $t('locale.formats.online_offline.once_a_week') }} </span> {{ $t('locale.formats.online_offline.and_consists_of') }} <span class="font-semibold"> {{ $t('locale.formats.online_offline.two_classes') }} </span> {{ $t('locale.formats.online_offline.with_proffesional_trainer') }} </span>
        <span>{{ $t('locale.formats.online_offline.in_groups_up_to_ten_people') }}</span>
      </div>
    </div>
  </div>
</template>