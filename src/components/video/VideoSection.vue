<template>
  <h1 class="title">{{ buildingInfo?.name }}, {{ buildingInfo?.city }}, {{ buildingInfo?.street }}</h1>
  <div class="video-grid">
    <div v-if="videos?.length == 0" class="empty">Добавить файлы</div>
    <q-video :ratio="16 / 9" :src="videoSrc" v-else />
    <div class="videos card" ref="dropZoneRef">
      <div class="video_header gradient">
        <div class="title">Список видео</div>
        <div class="uploader">
          <q-btn color="secondary" icon="upload" label="Добавить файлы" @click="clickInput" :loading="loading" />
          <input class="input-file" ref="fileInput" type="file" name="" id="" accept="video/mp4,video/x-m4v,video/*"
            @change="uploadFile">
        </div>
        <div class="progress" v-if="loading">
          <p>{{ loadProgress }} %</p>
          <q-linear-progress :value="loadProgress / 100" color="positive" :animation-speed="100" />
        </div>
      </div>
      <div class="video_container">
        <VideoItem v-for="(item, idx) in videos" :name="item.name" :idx="idx" :is-active="idx === mainVideoIndex"
          @invoke="setActiveVideo" />
      </div>
      <div class="dropzone" v-if="isOverDropZone">
        <div>Перетащите файл сюда</div>
        <q-icon name="upload" />
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useDropZone } from '@vueuse/core';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IBuilding } from 'src/components/buildings/buildingModel';
import VideoItem from 'src/components/video/VideoItem.vue'
import { AxiosRequestConfig } from 'axios';
import { useVideoStore } from 'src/stores/videoStore';
import { IVideo } from 'src/types/video';

const route = useRoute()
const store = useVideoStore()
const dropZoneRef = ref<HTMLDivElement | null>(null)
const buildingInfo = ref<IBuilding | null>(null)
const id = route.params.id
const videos = ref()
const mainVideo = ref<IVideo>()
const mainVideoIndex = ref(0)
const loading = ref(false)
const loadProgress = ref(0)

const videoSrc = ref('')

const fileInput = ref<HTMLInputElement | null>(null)

const axiosConfig: AxiosRequestConfig = {
  onUploadProgress (progressEvent) {
    loadProgress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total)
  },
}

onMounted(async () => {
  await fetchData()
})

const { isOverDropZone } = useDropZone(dropZoneRef, dragNdrop)

async function fetchData () {
  const resBuild = await api(endpoints.building + '/' + id)
  buildingInfo.value = resBuild.data.data
  if (buildingInfo.value?.videos && buildingInfo.value?.videos.length > 0) {
    mainVideo.value = buildingInfo.value.videos[mainVideoIndex.value]
    store.getVideo(mainVideo.value.id)
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
    await api.post(endpoints.video + '/upload', formData, axiosConfig)
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
  store.getVideo(mainVideo.value.id)
}

function clickInput () {
  fileInput.value?.click()
}

async function dragNdrop (file: File[] | null) {
  if (!file) return
  loading.value = true
  try {
    const video = file[0]
    const formData = new FormData()
    formData.append('building_id', id as string)
    formData.append('file', video)
    await api.post(endpoints.video + '/upload', formData, axiosConfig)
    await fetchData()
  } catch (error) {

  } finally {
    loading.value = false
  }
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
  position: relative;
  border: 1px solid rgba(128, 128, 128, 0.233);
  min-height: 400px;
  max-height: 514px;
  padding: 0;

  .video_header {
    position: sticky;
    top: 0;
    border-top-left-radius: inherit;
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

.progress {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  p {
    padding-left: 20px;
  }
}

.video_container {
  display: flex;
  flex-direction: column;
}

.input-file {
  display: none;
}

.dropzone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  background: #249ae35d;
  color: $dark;
  font-size: 30px;
  font-weight: 600;
}
</style>
