<template>
  <section class="_container">
    <div class="section__head">
      <h1 class="title">Объекты</h1>
      <button class="button button-alt" @click="showDialog"><q-icon name="add" /> Добавить объект</button>
    </div>

    <div class="buildings">
      <p class="section__title">Строительные объекты в режиме онлайн</p>
      <div class="cards">
        <q-spinner color="primary" size="3em" style="text-align: center; width: 100%;" v-if="loading" />
        <BuildingCard class="building" v-for="item in buildings" :data="item" @delete="fetchData" v-else />
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar';
import BuildingCard from './BuildingCard.vue';
import DialogBuild from './DialogBuild.vue'
import type { IBuilding, IResponseBuilding } from './buildingModel';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';

const $q = useQuasar()
const buildings = ref<IBuilding[] | []>([])
const loading = ref(false)

onMounted(async () => {
  await fetchData()
})

async function fetchData () {
  try {
    loading.value = true
    const { data } = await api.get<IResponseBuilding>(endpoints.building)
    buildings.value = data.data

  } catch (error) {

  } finally {
    loading.value = false
  }
}

function showDialog () {
  $q.dialog({
    component: DialogBuild
  }).onOk(async () => {
    await fetchData()
  }).onCancel(() => {

  })
}
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
  flex-wrap: nowrap;
  overflow-y: auto;
  gap: 30px;
}

.building {
  flex-grow: 1;
}
</style>
