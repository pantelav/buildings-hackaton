<template>
  <section>
    <p class="section__title">Техника в работе</p>
    <div class="techs" >
      <!-- <template v-if="onMain && allTechs"> -->
        <WorkTechCard v-for="item in placeHolders" :key="item.id" :data="item" v-if="onMain" />
      <!-- </template> -->
      <!-- <template v-else>
        <WorkTechCard v-for="item in videoStore.video?.techniques" :key="item.id" :data="item" />
      </template> -->
    </div>
    <!-- <p v-else>Техника не обнаружена</p> -->
  </section>
</template>

<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import WorkTechCard from './WorkTechCard.vue';
import { useVideoStore } from 'src/stores/videoStore';
import { ITechnique } from 'src/types/technique';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';

const route = useRoute()
const pageId = route.params?.id || null
const videoStore = useVideoStore()
const onMain = ref(true)
const allTechs = ref<ITechnique[] | null>(null)
const placeHolders = [
  {
    id: 123,
    building_id: 's123',
    name: 'Грузовик',
    description: '',
    clip_description: '',
    video_id: null,
    type: 1
  },
  {
    id: 124,
    building_id: 's123',
    name: 'Кран',
    description: '',
    clip_description: '',
    video_id: null,
    type: 2
  },
  {
    id: 125,
    building_id: 's123',
    name: 'Экскаватор',
    description: '',
    clip_description: '',
    video_id: null,
    type: 3
  },
  {
    id: 125,
    building_id: 's123',
    name: 'Бульдозер',
    description: '',
    clip_description: '',
    video_id: null,
    type: 4
  },
  {
    id: 125,
    building_id: 's123',
    name: 'Грузовик',
    description: '',
    clip_description: '',
    video_id: null,
    type: 1
  },
]

onMounted(async () => {
  // if (pageId) {
  //   onMain.value = false
  // } else {
  //   const res = await api(endpoints.allTech)
  //   allTechs.value = res.data.data
  // }
})

const renderCondition = computed(() => {
  if (onMain.value && allTechs.value) {
    return true
  } else if (!onMain.value && videoStore.video?.techniques.length) {
    return true
  } else {
    return false
  }
})

</script>

<style scoped lang='scss'>
.techs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>
