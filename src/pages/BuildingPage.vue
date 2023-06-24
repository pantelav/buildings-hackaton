<template>
  <main class="_container">
    <section>
      <h1 class="title">{{ buildingInfo?.city }}, {{ buildingInfo?.street }}</h1>
      <div class="video-grid">
        <div v-if="videos?.length == 0" class="empty">Добавить файлы</div>
        <q-video :ratio="16 / 9" src="https://drive.google.com/file/d/1rY2ytZFKIdkIknZWylOUVFgN6_6ABwj2/view?usp=sharing"
          v-else />

        <div class="videos">
          <div class="video_header gradient">
            <div class="title">Список видео</div>
            <div class="uploader">
              <q-btn color="secondary" icon="upload" label="Добавить файлы" @click="clickInput" :loading="loading"/>
              <input class="input-file" ref="fileInput" type="file" name="" id="" accept="video/mp4,video/x-m4v,video/*"
                @change="uploadFile">
            </div>
          </div>
          <div class="video_container"></div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IBuilding } from 'src/components/buildings/buildingModel';

const route = useRoute()
const buildingInfo = ref<IBuilding | null>(null)
const id = route.params.id
const videos = ref()
const loading = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)

onMounted(async () => {

  const resBuild = await api(endpoints.building + '/' + id)
  buildingInfo.value = resBuild.data.data

  const resVideo = await api(endpoints.video)
  videos.value = resVideo.data
})

async function uploadFile () {
  if (!fileInput.value?.files?.length) return
  loading.value = true
  try {
    const video = fileInput.value?.files[0]
    console.log('ok');
    const formData = new FormData()
    formData.append('building_id', id as string)
    formData.append('file', video)
    const res = await api.post(endpoints.video + '/upload', formData)
    console.log(res);
  } catch (error) {

  } finally {
    loading.value = false
  }
}

function clickInput () {
  fileInput.value?.click()
}
</script>

<style scoped lang='scss'>
.title {
  font-size: 28px;
  padding-bottom: 20px;
}

.video-grid {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 50px;
}

.empty {
  font-size: 24px;
}

.videos {
  border: 1px solid gray;
  border-radius: 8px;
  min-height: 400px;

  .video_header {
    padding: 0 20px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .title {
      padding: 0;
    }
  }
}

.input-file {
  display: none;
}
</style>
