<template>
  <svg :width="size" :height="size" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color" :class="`${ filled ? '' : 'opacity-30' }`" d="M8.49965 12.7327L11.4392 14.5106C11.9776 14.8364 12.6363 14.3548 12.4947 13.7456L11.7155 10.4023L14.3151 8.14975C14.7897 7.73892 14.5347 6.95975 13.9113 6.91017L10.4901 6.61975L9.15132 3.46059C8.91049 2.88684 8.08882 2.88684 7.84799 3.46059L6.50924 6.61267L3.08799 6.90309C2.46465 6.95267 2.20965 7.73184 2.68424 8.14267L5.28382 10.3952L4.50465 13.7385C4.36299 14.3477 5.02174 14.8293 5.56007 14.5035L8.49965 12.7327Z"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number,
  color?: string,
  filled?: boolean,
}>(), {
  size: 16,
  color: '#EC6A1F',
  filled: true,
});
</script>
