<template>
  <section>
    <p class="section__title">Техника в работе</p>
    <div class="techs">
      <WorkTechCard v-for="item in techs" :key="item.name" :name="item.name" :count="item.count"/>
    </div>
  </section>
</template>

<script setup lang='ts'>
import WorkTechCard from './WorkTechCard.vue';
import type { IWorkTech } from './workTechModel';

const techs: IWorkTech[] = [
  {
    name: 'Погрузчик SEM 655D',
    count: 14
  },
  {
    name: 'Автогрейдер SEM922AWD',
    count: 8
  },
  {
    name: 'Экскаватор CAT336GC',
    count: 12
  },
  {
    name: 'Экскаватор CAT320',
    count: 6
  },
  {
    name: 'Каток SEM512',
    count: 5
  },
  {
    name: 'Бульдозер SEM822D',
    count: 10
  },
]
</script>

<style scoped lang='scss'>
.techs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>
