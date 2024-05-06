<script setup lang="ts">

defineProps<{
  language: string,
}>();
</script>

<template>
  <div class="w-full justify-center flex py-10">
    <div class="font-montserrat py-8 w-11/12 rounded-2xl bg-[#FBE1D2] flex justify-center items-center text-center">
      <span class="w-10/12">{{ language == 'RU' ? 'Ребёнок во время тренировок в Soroboom увеличивает КПД мозга многократно, благодаря чему формируются и укрепляются новые нейронные связи.' : language == 'EN' ? '' : 'Během tréninku v Soroboom dítě mnohonásobně zvyšuje efektivitu mozku, díky čemuž se tvoří a posilují nová nervová spojení.'}}</span>
    </div>
  </div>
</template>