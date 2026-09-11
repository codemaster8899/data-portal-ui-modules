<script setup lang="ts">
import Icon from './Icon.vue';

defineProps({
    title: { type: String, required: true, },
    icon: { type: String, required: false, },
    list: { type: Array, required: false, },
})
</script>

<template>
    <div class="distribution-data-card">
        <div class="data-card-header">
            <Icon v-if="icon" :iconUrl="icon" />
            <span class="title-md data-card-title">{{ title }}</span>
        </div>
        <slot name="content">
            <div class="data-card-content">
                <div v-for="({icon, text, link}, i) in list" :key="i" class="data-card-item">
                    <Icon v-if="icon" :iconUrl="icon" />
                    <a v-if="link" :href="link" class="body-lg data-card-item-link">{{ text }}</a>
                    <span v-else class="body-lg data-card-item-text">{{ text }}</span>
                </div>
            </div>
        </slot>
    </div>
</template>

<style scoped>
.distribution-data-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.distribution-data-card .data-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
}
.distribution-data-card .data-card-header .data-card-title {
    color: var(--color-primary-900);
}
.distribution-data-card .data-card-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: var(--color-neutral-200);
    border-radius: 8px;
    padding: 16px;
}
.data-card-content .data-card-item {
    display: flex;
    align-items: center;
    gap: 8px;
}
.data-card-content .data-card-item .data-card-item-link {
    color: var(--color-info-700);
}
.data-card-content .data-card-item .data-card-item-text {
    color: var(--color-primary-900);
}
</style>