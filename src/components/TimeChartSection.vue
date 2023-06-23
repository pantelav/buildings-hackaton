<template>
  <section class="chart__section">
    <p class="section__title">Время работы</p>
    <div class="card">
      <div class="info flex">
        <div class="info__title">Суммарное количество часов в сутки</div>
        <div class="info__today flex">
          <div class="number number-main">52 ↑</div>
          <div class="text">Понедельник</div>
        </div>
        <div class="info__stats">
          <div class="week flex">
            <div class="number">142</div>
            <div class="text">За неделю</div>
          </div>
          <div class="month flex">
            <div class="number">942</div>
            <div class="text">За месяц</div>
          </div>
        </div>
      </div>
      <div class="chart">
        <Line :options="chartOptions" :data="chartData" style="height: 151px; width: 100%;" />
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions, ChartData
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData: ChartData = reactive({
  datasets: [{ data: [46, 52, 60, 86, 72], borderColor: '#2499e3', pointRadius: 10 }],
  labels: [0, 0, 0, 0, 0],
})

const chartOptions: ChartOptions = reactive({
  responsive: true,
  scales: {
    x: {
      display: false,
      border: {
        display: false
      },
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      border: {
        display: false
      },
      grid: {
        display: false
      }
    },
  },
  plugins: {
    legend: {
      display: false
    },
  }
})
</script>

<style scoped lang='scss'>
.card {
  display: grid;
  grid-template-columns: 25% 75%;
}

.flex {
  display: flex;
  flex-direction: column;
}

.info__title {
  font-weight: 500;
}

.number {
  font-size: 18px;
  font-weight: 500;
}

.number-main {
  font-size: 24px;
  color: $primary;
}

.text {
  color: $accent;
  font-size: 12px;
  text-transform: uppercase;
}

.info__stats {
  padding-top: 10px;
  display: flex;
  gap: 20px;
}

.chart,
.plot {
  height: 151px;
}
</style>
