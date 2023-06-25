import { ITechnique } from './../types/technique';
import { IClasses } from './../components/buildings/buildingModel';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IVideoExact } from 'src/types/video';
import { ref } from 'vue';

export const useClassesStore = defineStore('classes', () => {
  const currentClasses = ref<IClasses[] | null>(null)
  async function getClasses(videoId: string) {
    const res = await api(endpoints.video + '/get/' + videoId)
    currentClasses.value = res.data.data.techniques_classes
  }

  function setClass(video: IVideoExact) {
    currentClasses.value = video.techniques_classes
  }

  return {currentClasses, getClasses, setClass}
});

export const useTechStore = defineStore('tech', () => {
  const tech = ref<null | ITechnique[]>(null)
  async function getTech(videoId:string) {
    const res = await api(endpoints.video + '/get/' + videoId)
    tech.value = res.data.data.techniques
  }

  function setTech(video: IVideoExact) {
    tech.value = video.techniques
  }

  return {tech, getTech, setTech}
});
