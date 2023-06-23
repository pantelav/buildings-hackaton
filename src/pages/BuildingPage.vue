<template>
  <main class="_container">
    <section>
      <h1 class="title">г. Екатеринбург, ул. Малышева, д.35</h1>
      <div class="video-grid">
        <q-video :ratio="16 / 9"
          src="https://drive.google.com/file/d/1rY2ytZFKIdkIknZWylOUVFgN6_6ABwj2/view?usp=sharing" />

      </div>
    </section>
  </main>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';

const route = useRoute()
const id = route.params.id

onMounted(async () => {
  const res = await api(endpoints.video)
  console.log(res.data);
})
</script>

<style scoped lang='scss'>
.title {
  font-size: 28px;
  padding-bottom: 20px;
}

.video-grid {
  display: grid;
  grid-template-columns: 60% 40%;
}
</style>
