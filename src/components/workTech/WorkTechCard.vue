<template>
  <div class="card">
    <img :src="tech" alt="icon">
    <p class="title">{{ props.data.name }}</p>
  </div>
</template>

<script setup lang='ts'>
import { tech } from 'src/assets';
import { ITechnique } from 'src/types/technique';

const props = defineProps<{
  data: ITechnique
}>()
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
