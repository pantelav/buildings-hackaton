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
    time: '10:00, 23 июня'
  },
  {
    type: 'start',
    id: 788543,
    message: 'Погрузчик SEM 655D начал работу.',
    time: '10:00, 23 июня'
  },
  {
    type: 'end',
    id: 123456,
    message: 'Погрузчик SEM 655D завершил работу.',
    time: '10:00, 23 июня'
  },
  {
    type: 'end',
    id: 123457,
    message: 'Автогрейдер SEM 922 AWD завершил работу.',
    time: '10:00, 23 июня'
  },
  {
    type: 'pending',
    id: 123458,
    message: 'Бульдозер SEM822D простаивает более 30 минут.',
    time: '10:00, 23 июня'
  },
  {
    type: 'start',
    id: 123459,
    message: 'Экскаватор CAT320 начал работу.',
    time: '10:00, 23 июня'
  },
  {
    type: 'start',
    id: 123450,
    message: 'Экскаватор CAT336GC начал работу.',
    time: '10:00, 23 июня'
  },
  {
    type: 'start',
    id: 123420,
    message: 'Экскаватор CAT336GC начал работу.',
    time: '10:00, 23 июня'
  },
]
</script>

<style scoped lang='scss'>
.card {
  height: 320px;
}
</style>
