<template>
  <div class="card">
    <img :src="tech" alt="icon">
    <p class="title">{{ props.name }}</p>
    <p class="subtitle">{{ props.count }} ЕДИНИЦ</p>
  </div>
</template>

<script setup lang='ts'>
import { tech } from 'src/assets';
import type { IWorkTech } from './workTechModel';

const props = defineProps<IWorkTech>()
</script>

<style scoped lang='scss'>
.card {
  height: 152px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.title {
  color: $text-card;
  text-align: center;
}

.subtitle {
  color: $accent;
}
</style>
