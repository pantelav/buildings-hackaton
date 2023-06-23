<template>
  <section class="_container">
    <div class="section__head">
      <h1 class="title">Объекты</h1>
      <button class="button button-alt">Связь с тех. поддержкой</button>
    </div>

    <div class="buildings">
      <p class="section__title">Строительные объекты в режиме онлайн</p>
      <div class="cards">
        <BuildingCard class="building" v-for="item in addresses" :address="item" :img-src="building" :id="'123'" />
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import BuildingCard from './BuildingCard.vue';
import { building } from 'src/assets';

const addresses = ['г. Екатеринбург,\nул.Малышева, д.35', 'г. Екатеринбург,\nул.Щербакова', 'г. Екатеринбург,\nпос.Рудный']
</script>

<style scoped lang='scss'>
.section__head {
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 28px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
}

.building {
  flex-grow: 1;
}
</style>
