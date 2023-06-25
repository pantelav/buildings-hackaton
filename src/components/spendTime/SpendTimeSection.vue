<template>
  <section>
    <p class="section__title">Затраченные часы</p>
    <div class="cards">
      <SpendTimeCard v-for="item in data" :name="item.name" :time="item.time" :icon="item.icon" />
    </div>
  </section>
</template>

<script setup lang='ts'>
import SpendTimeCard from './SpendTimeCard.vue';
import type { ISpendTime } from './spendTimeModel';

const data: ISpendTime[] = [
  {
    name: 'Движение',
    time: 52,
    icon: 'timeline'
  },
  {
    name: 'Простой',
    time: 34,
    icon: 'update'
  },
  {
    name: 'Работа',
    time: 28,
    icon: 'work'
  },
  {
    name: 'Другое',
    time: 4,
    icon: 'more_horiz'
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
