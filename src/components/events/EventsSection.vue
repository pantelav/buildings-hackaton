<template>
  <section>
    <p class="section__title">События</p>
    <div class="card">
      <EventItem v-for="item in events" :key="item.id" :id="item.id" :message="item.message" :type="item.type"
        :time="item.time" />
    </div>
  </section>
</template>

<script setup lang='ts'>
import EventItem from './EventItem.vue';
import type { IEvent } from './eventModel';

const events: IEvent[] = [
  {
    type: 'pending',
    id: 644354,
    message: 'Погрузчик SEM 655D простаивает более 30 минут.',
    time: '11:14, 25 июня'
  },
  {
    type: 'start',
    id: 788543,
    message: 'Погрузчик SEM 655D начал работу.',
    time: '11:00, 25 июня'
  },
  {
    type: 'end',
    id: 402208,
    message: 'Погрузчик SEM 655D завершил работу.',
    time: '10:24, 25 июня'
  },
  {
    type: 'end',
    id: 248503,
    message: 'Автогрейдер SEM 922 AWD завершил работу.',
    time: '10:18, 25 июня'
  },
  {
    type: 'pending',
    id: 856280,
    message: 'Бульдозер SEM822D простаивает более 30 минут.',
    time: '10:13, 25 июня'
  },
  {
    type: 'start',
    id: 467831,
    message: 'Экскаватор CAT320 начал работу.',
    time: '10:09, 25 июня'
  },
  {
    type: 'start',
    id: 636133,
    message: 'Экскаватор CAT336GC начал работу.',
    time: '10:02, 25 июня'
  },
  {
    type: 'start',
    id: 350118,
    message: 'Экскаватор CAT336GC начал работу.',
    time: '10:00, 25 июня'
  },
]
</script>

<style scoped lang='scss'>
.card {
  height: 320px;
}
</style>
