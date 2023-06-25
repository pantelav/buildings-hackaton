<template>
  <div class="card">
    <div class="round gradient">
      <img :src="getIcon(data.type)" alt="icon" class="img">
    </div>
    <p class="title">{{ props.data.name }}</p>
  </div>
</template>

<script setup lang='ts'>
import { tech } from 'src/assets';
import { IClasses, ITechnique } from 'src/types/technique';
import { excavator, bulldozer, gear, bigtruck, crane } from 'src/assets';

const props = defineProps<{
  data: ITechnique
}>()

function getIcon (type: IClasses['type']) {
  if (type === 0) return gear
  if (type === 1) return bigtruck
  if (type === 2) return crane
  if (type === 3) return excavator
  if (type === 4) return bulldozer
}
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

.img {
  width: 35px;
  height: 35px;
}

.round {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
}
</style>
