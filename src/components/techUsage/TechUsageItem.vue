<template>
  <div class="item">
    <div class="round gradient">
      <img :src="ok" alt="icon">
    </div>
    <div class="info">
      <div class="text">
        <div class="name">{{ props.name }}</div>
        <div class="percent">{{ props.value }}%</div>
      </div>
      <div class="graph">
        <q-linear-progress size="5px" :value="props.value / 100" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ok } from 'src/assets';
import type { ITechUsage } from './techUsageModel';

const props = defineProps<ITechUsage>()
</script>

<style scoped lang='scss'>
.item {
  display: flex;
  gap: 20px;
}

.round {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
}

.info {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text {
  display: flex;
  justify-content: space-between;
}

.percent {
  color: $primary;
  font-size: 16px;
  font-weight: 300;
}
</style>
