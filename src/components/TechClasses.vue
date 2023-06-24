<template>
  <section>
    <p class="section__title">Классы техники на объекте</p>
    <div class="card">
      <div v-if="!editMode">
        <q-btn label="Добавить класс" color="primary" @click="editMode = true" />
        <div class="items__container">
          <div class="item" v-for="item in building?.techniques_classes">
            <p>{{ item.name }}</p>
            <q-btn icon="delete" round color="negative" @click="deleteClass(item.id)" />
          </div>
        </div>
      </div>
      <div class="editor" v-else>
        <p class="editor__title">Создание класса</p>
        <div class="editor__container">
          <q-input outlined v-model="tech.name" label="Название техники" />
          <q-input outlined v-model="tech.description" type="textarea" label="Описание техники" dense />
          <q-input outlined v-model="tech.clip_description" type="textarea" label="Признаки класса" dense />
        </div>
        <div class="actions">
          <q-btn label="Отмена" color="primary" @click="editMode = false" />
          <q-btn label="Создать" color="primary" :disable="!tech.name || !tech.description" @click="createClass"
            :loading="loading" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { IBuilding } from 'src/components/buildings/buildingModel'
const route = useRoute()
const id = route.params.id

const loading = ref(false)
const editMode = ref(false)

const building = ref<IBuilding>()
const tech = reactive({
  name: '',
  description: '',
  clip_description: '',
  building_id: id
})

onMounted(async () => {
  await fetchData()
})

async function fetchData () {
  try {
    loading.value = true
    const res = await api(endpoints.building + '/' + id)
    building.value = res.data.data
  } catch (error) {

  } finally {
    loading.value = false
  }
}

async function createClass () {
  try {
    loading.value = true
    await api.post(endpoints.tech, tech)
    editMode.value = false
    await fetchData()
  } catch (error) {

  } finally {
    loading.value = false
  }
}

async function deleteClass (techId: string) {
  try {
    loading.value = true
    await api.delete(endpoints.tech + '/' + techId)
    await fetchData()
  } catch (error) {

  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang='scss'>
.card {
  height: 480px;
  text-align: center;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  height: 60px;

  &:first-child {
    margin-top: 20px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(128, 128, 128, 0.475);
    margin-bottom: 20px;
  }
}

.editor__title {
  font-size: 24px;
}

.editor__container {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>