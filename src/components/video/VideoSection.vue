<template>
  <h1 class="title">{{ buildingInfo?.city }}, {{ buildingInfo?.street }}</h1>
  <div class="video-grid">
    <div v-if="videos?.length == 0" class="empty">Добавить файлы</div>
    <q-video :ratio="16 / 9" :src="videoSrc" v-else />
    <div class="videos card">
      <div class="video_header gradient">
        <div class="title">Список видео</div>
        <div class="uploader">
          <q-btn color="secondary" icon="upload" label="Добавить файлы" @click="clickInput" :loading="loading" />
          <input class="input-file" ref="fileInput" type="file" name="" id="" accept="video/mp4,video/x-m4v,video/*"
            @change="uploadFile">
        </div>
      </div>
      <div class="video_container">
        <VideoItem v-for="(item, idx) in videos" :name="item.name" :idx="idx" :is-active="idx === mainVideoIndex"
          @invoke="setActiveVideo" />
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IBuilding } from 'src/components/buildings/buildingModel';
import VideoItem from 'src/components/video/VideoItem.vue'

const route = useRoute()
const buildingInfo = ref<IBuilding | null>(null)
const id = route.params.id
const videos = ref()
const mainVideo = ref()
const mainVideoIndex = ref(0)
const loading = ref(false)

const videoSrc = ref('')

const fileInput = ref<HTMLInputElement | null>(null)

onMounted(async () => {
  await fetchData()
})

async function fetchData () {
  const resBuild = await api(endpoints.building + '/' + id)
  buildingInfo.value = resBuild.data.data
  if (buildingInfo.value?.videos && buildingInfo.value?.videos.length > 0) {
    mainVideo.value = buildingInfo.value.videos[mainVideoIndex.value]
    videos.value = buildingInfo.value.videos
    getViedoSrc()
  }
}

async function uploadFile () {
  if (!fileInput.value?.files?.length) return
  loading.value = true
  try {
    const video = fileInput.value?.files[0]
    const formData = new FormData()
    formData.append('building_id', id as string)
    formData.append('file', video)
    await api.post(endpoints.video + '/upload', formData)
    await fetchData()
  } catch (error) {

  } finally {
    loading.value = false
  }
}

function setActiveVideo (idx: number) {
  if (idx === mainVideoIndex.value) return
  mainVideoIndex.value = idx
  getViedoSrc()
}

function getViedoSrc () {
  if (!mainVideo.value) return
  const baseURL = 'http://109.248.175.75/api/video/'
  // @ts-ignore
  mainVideo.value = buildingInfo.value.videos[mainVideoIndex.value]
  videoSrc.value = baseURL + mainVideo.value.filename
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
  grid-template-columns: 60% auto;
  gap: 50px;
}

.empty {
  font-size: 24px;
}

.videos {
  border: 1px solid rgba(128, 128, 128, 0.233);
  min-height: 400px;
  padding: 0;

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

.video_container {
  display: flex;
  flex-direction: column;
}

.input-file {
  display: none;
}
</style>
