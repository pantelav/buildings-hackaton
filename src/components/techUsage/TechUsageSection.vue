<template>
  <section>
    <p class="section__title">Задействование техники</p>
    <div class="card">
      <div class="graph">
        <TechUsageItem v-for="item in data" :name="item.name" :value="item.value" />
      </div>
      <div class="stats">
        <div class="title">ОБЩАЯ ЗАЙДЕСТВОВАННОСТЬ</div>
        <div class="percent">43%</div>
        <div class="title">ВРЕМЯ ПРОСТОЯ</div>
        <div class="percent">13 Ч 15 МИН</div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import TechUsageItem from './TechUsageItem.vue';
import type { ITechUsage } from './techUsageModel';

const data: ITechUsage[] = [
  {
    name: "Погрузчики",
    value: 35
  },
  {
    name: "Экскаваторы",
    value: 43
  },
  {
    name: "Бульдозеры",
    value: 75
  },
  {
    name: "Катки",
    value: 50
  },
  {
    name: "Автогрейдеры",
    value: 80
  },
]
</script>

<style scoped lang='scss'>
.card {
  height: 480px;
}

.graph {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats {
  padding-top: 35px;
  color: $accent;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: repeat(2, 1fr);
  text-align: right;
}
</style>
