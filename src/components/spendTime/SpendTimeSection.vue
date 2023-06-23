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
    name: 'Залипуха',
    time: 52
  },
  {
    name: 'Залипуха',
    time: 34
  },
  {
    name: 'Залипуха',
    time: 28
  },
  {
    name: 'Залипуха',
    time: 19
  },
  {
    name: 'Залипуха',
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
