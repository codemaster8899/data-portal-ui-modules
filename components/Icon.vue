<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  iconUrl: { type: String, required: true },
  size: { type: Number, default: 24 },
  color: { type: String, default: '--color-primary-500' },
  onClick: { type: Function as PropType<() => void> },
})
const maskImage = `url(${props.iconUrl})`
const iconColor = props.color.startsWith('--color-') ? `var(${props.color})` : props.color
const width = `${props.size}px`
const cursor = props.onClick ? 'pointer' : 'default'
</script>

<template>
  <div
    @click="() => (onClick ? onClick() : null)"
    class="icon-container"></div>
</template>

<style scoped>
.icon-container {
  min-width: v-bind(width);
  max-width: v-bind(width);
  aspect-ratio: 1 / 1;
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image: v-bind(maskImage);
  background-color: v-bind(iconColor);
  cursor: v-bind(cursor);
}
</style>
