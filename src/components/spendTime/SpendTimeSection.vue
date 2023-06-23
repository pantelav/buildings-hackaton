<template>
  <section>
    <p class="section__title">Затраченные часы</p>
    <div class="cards">
      <SpendTimeCard v-for="item in data" :name="item.name" :time="item.time" />
    </div>
  </section>
</template>

<script setup lang='ts'>
import SpendTimeCard from './SpendTimeCard.vue';
import type { ISpendTime } from './spendTimeModel';

const data: ISpendTime[] = [
  {
    name: 'Инфо',
    time: 52
  },
  {
    name: 'Инфо',
    time: 34
  },
  {
    name: 'Инфо',
    time: 28
  },
  {
    name: 'Инфо',
    time: 19
  },
  {
    name: 'Инфо',
    time: 72
  },
]
</script>

<style scoped lang='scss'>
.cards {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
</style>
