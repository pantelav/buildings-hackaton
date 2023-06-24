<template>
  <section>
    <p class="section__title">Техника в работе</p>
    <div class="techs">
      <WorkTechCard v-for="item in videoStore.video?.techniques" :key="item.id" :data="item" />
    </div>
  </section>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import WorkTechCard from './WorkTechCard.vue';
import { useVideoStore } from 'src/stores/videoStore';
import type { IWorkTech } from './workTechModel';

const route = useRoute()
const pageId = route.params?.id || null
const videoStore = useVideoStore()
const onMain = ref(true)

onMounted(() => {
  if (pageId) onMain.value = false
})

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
