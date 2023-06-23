<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">Добавить объект</div>
      </q-card-section>
      <q-card-section class="inputs">
        <q-input outlined v-model="buildingData.name" label="Название объекта" />
        <q-input outlined v-model="buildingData.description" label="Описание объекта" />
        <q-input outlined v-model="buildingData.city" label="Город" />
        <q-input outlined v-model="buildingData.street" label="Улица" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="Отмена" @click="cancel" />
        <q-btn color="primary" label="Добавить" :loading="loading" :disable="!buildingData.name" @click="create" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
import { useDialogPluginComponent } from 'quasar';
import { endpoints } from 'src/constants/endpoints'
defineEmits([...useDialogPluginComponent.emits])
const $q = useQuasar()
const loading = ref(false)
const buildingData = reactive({
  name: '',
  description: '',
  city: '',
  street: ''
})

const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

async function create () {
  try {
    loading.value = true
    const res = await api.post(endpoints.building, buildingData)
    $q.notify({
      message: 'Объект добавлен',
      position: 'top-right',
      color: 'positive'
    })
    onDialogOK()
  } catch (error) {

  } finally {
    loading.value = false
  }
}

function cancel () {
  onDialogCancel()
}
</script>

<style scoped lang='scss'>
.inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
