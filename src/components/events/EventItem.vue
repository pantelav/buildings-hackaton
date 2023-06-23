<template>
  <div class="event">
    <div class="info">
      <img :src="getIcon" alt="icon" />
      <p><span class="id">[{{ id }}]</span> {{ message }}</p>
    </div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { start, end, pending } from 'src/assets';
import type { IEvent } from './eventModel';

const props = defineProps<IEvent>()

const getIcon = computed(() => {
  if (props.type === 'start') return start
  if (props.type === 'end') return end
  if (props.type === 'pending') return pending
})
</script>

<style scoped lang='scss'>
.event {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    padding-bottom: 12px;
  }
}

.info {
  display: flex;
  gap: 15px;
  color: $text-card;
}

.id {
  font-weight: 600;
}

.time {
  color: $accent;
}
</style>
