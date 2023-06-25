<template>
  <section>
    <p class="section__title">Техника в работе</p>
    <div class="techs">
      <template v-if="onMain">
        <WorkTechCard v-for="item in allTechs" :key="item.id" :data="item" v-if="onMain"/>
      </template>
      <template v-else>
        <WorkTechCard v-for="item in videoStore.video?.techniques" :key="item.id" :data="item"/>
      </template>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
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
const allTechs = ref<ITechnique | null>(null)

onMounted(async () => {
  if (pageId) {
    onMain.value = false
  } else {
    const res = await api(endpoints.allTech)
    allTechs.value = res.data.data
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
