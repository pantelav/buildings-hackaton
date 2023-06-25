import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IVideoExact } from 'src/types/video';
import { ref } from 'vue';
import { useClassesStore, useTechStore } from './techincStore';

export const useVideoStore = defineStore('video',() => {
  const video = ref<null | IVideoExact>(null)
  const techStore = useTechStore()
  const classesStore = useClassesStore()

  async function getVideo(id: string) {
      const res = await api(endpoints.video + '/get/' + id)
      video.value = res.data.data
      if (video.value) {
        techStore.setTech(video.value)
        classesStore.setClass(video.value)
      }
  }

  function setVideo(videoExact: IVideoExact) {
    video.value = videoExact
    if (video.value) {
        techStore.setTech(video.value)
        classesStore.setClass(video.value)
      }
  }

  return {video, getVideo, setVideo}
});
