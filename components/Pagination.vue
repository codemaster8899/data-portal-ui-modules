<script setup>
import { computed } from "vue";

const modelValue = defineModel({ required: true });
const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  }
});

function goToPage(page) {
  modelValue.value = page;
}

const pages = computed(() => {
  const total = props.totalPages;
  const current = modelValue.value;
  const delta = 2;
  const pagesArray = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta + 1 && i <= current + delta + 1)) {
      pagesArray.push(i);
    } else if (pagesArray[pagesArray.length - 1] !== "...") {
      pagesArray.push("...");
    }
  }

  return pagesArray;
});
</script>

<template>
  <div class="flex items-center gap-4 mb-4 mt-2">
    <Typography as="span" variant="by-copy-large-regular" class="text-neutral-100">Seite:</Typography>

    <button class="px-2" :disabled="modelValue === 0" @click="goToPage(modelValue - 1)">
      <img src="../../../assets/icons/ArrowLeftBlack.svg" alt="">
    </button>

    <div class="flex border rounded-full border-neutral-10 overflow-hidden">
      <Typography v-for="page in pages" :key="page" as="p" variant="by-copy-small-semibold" class="px-4 py-2 border first:rounded-full first:rounded-r-none last:rounded-full last:rounded-l-none  border-neutral-10 text-primary-100" :class="[
        page === modelValue + 1
          ? 'bg-primary-20 border-primary-60 font-bold'
          : typeof page === 'number'
            ? 'hover:bg-gray-100 cursor-pointer'
            : 'cursor-default text-gray-500'
      ]" :disabled="page === '...'" @click="typeof page === 'number' && goToPage(page - 1)">
        {{ page }}
      </Typography>
    </div>

    <button class="px-2" :disabled="modelValue + 1 === totalPages" @click="goToPage(modelValue + 1)">
      <img src="../../../assets/icons/ArrowRightBlack.svg" alt="">
    </button>
  </div>
</template>
