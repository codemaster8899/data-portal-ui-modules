<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    items: {
        type: Array as PropType<{ text: string; date: string }[]>,
        required: true,
    },
});
</script>

<template>
    <div class="list-container">
        <div v-for="({text, date}, i) in items" :key="i" class="list-item">
            <span class="body-lg list-item-text">{{ text }}</span>
            <span class="body-lg list-item-text">{{ date }}</span>
        </div>
    </div>
</template>

<style scoped>
.list-container {
    display: flex;
    flex-direction: column;
}
.list-container .list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-neutral-300);
    padding: 14px 0;
}
.list-container .list-item:last-child {
    border-bottom: none;
}
.list-container .list-item .list-item-text {
    color: var(--color-primary-600);
}
</style>