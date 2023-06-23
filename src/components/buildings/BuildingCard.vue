<template>
  <div class="building">
    <p class="address">{{ props.address }}</p>
    <button class="button" @click="$router.push('/building')"><img :src="arrow" /> Смотреть</button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { arrow } from 'src/assets';
const props = defineProps<{
  imgSrc: string,
  id: string,
  address: string
}>()

const bgUrl = ref(`center / cover no-repeat url(${props.imgSrc})`)

</script>

<style scoped lang='scss'>
.building {
  padding: 30px;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background: v-bind(bgUrl);
}

.address {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 37px;
}

.button {
  align-self: flex-start;
}
</style>
