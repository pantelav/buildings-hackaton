<template>
  <div class="building">
    <p class="name">{{ data.name }}</p>
    <p class="address">{{ data.city }}, {{ data.street }}</p>
    <button class="button" @click="$router.push('/building/' + data.id)"><img :src="arrow" /> Смотреть</button>
    <q-btn flat round color="negative" icon="delete" class="delete" @click="deleteObject" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { arrow } from 'src/assets';
import type { IBuilding } from './buildingModel';
import { buildPlaceholder } from 'src/assets';
import { endpoints } from 'src/constants/endpoints';
import { api } from 'src/boot/axios';
const props = defineProps<{
  data: IBuilding
}>()

const emit = defineEmits(['delete'])

const $q = useQuasar()
const bgUrl = ref(`bottom / cover no-repeat url(${props.data.title_image_path ? props.data.title_image_path : buildPlaceholder})`)

function deleteObject () {
  $q.dialog({
    title: 'Удалить объект?',
    cancel: 'Отмена',
  }).onOk(async () => {
    await api.delete(endpoints.building, {
      data: {
        id: props.data.id
      }
    })
    emit('delete')
  })
}


</script>

<style scoped lang='scss'>
.building {
  position: relative;
  max-width: 490px;
  padding: 10px 30px;
  height: 175px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  border-radius: 12px;
  background: v-bind(bgUrl);
}

.delete {
  position: absolute;
  top: 0;
  right: 0;
}

.name {
  font-size: 28px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #fff;
}

.address {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.873);
}

.button {
  height: 38px;
  align-self: flex-start;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
}
</style>
