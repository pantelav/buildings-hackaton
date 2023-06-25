<template>
  <div class="card">
    <div class="img gradient">
      <q-icon :name="props.icon" color="white" size="2em"/>
    </div>
    <p class="title">{{ props.name }}</p>
    <p class="time">{{ props.time }}</p>
  </div>
</template>

<script setup lang='ts'>
import type { ISpendTime } from './spendTimeModel'
import { ok } from 'src/assets';

const props = defineProps<ISpendTime>()
console.log(props);


</script>

<style scoped lang='scss'>
.card {
  width: 163px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.img {
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.time {
  font-weight: 300;
  color: $primary;
  font-size: 24px;
}
</style>
