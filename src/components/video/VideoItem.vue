<template>
  <div class="item" :class="{ active: isActive }" @click="$emit('invoke', idx)">
    <div>Видео {{ idx + 1 }}</div>
    <div>{{ name }}</div>
  </div>
</template>

<script setup lang='ts'>

interface IProps {
  name: string,
  isActive: boolean,
  idx: number
}
const props = withDefaults(defineProps<IProps>(), {
  isActive: false
})
defineEmits(['invoke'])
</script>

<style scoped lang='scss'>
.item {
  display: flex;
  width: 100%;
  height: 80px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

}

.active {
  background: $primary-light;
  color: #fff;
}
</style>
