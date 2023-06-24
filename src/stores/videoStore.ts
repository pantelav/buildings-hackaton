import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { endpoints } from 'src/constants/endpoints';
import { IVideoExact } from 'src/types/video';

export const useVideoStore = defineStore('video', {
  state: () => ({
      video: null as null | IVideoExact,
  }),
  actions: {
    async getVideo(id: string) {
      const res = await api(endpoints.video + '/get/' + id)
      this.video = res.data.data
    },
    setVideo(video: IVideoExact) {
      this.video = video
    }
  },
});
