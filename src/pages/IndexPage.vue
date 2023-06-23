<template>
  <main class="main">
    <BuildingsSection />
    <div class="grid _container">
      <EventsSection class="grid-1" />
      <WorkTechSection class="grid-2" />
      <div class="times grid-3">
        <TimeChartSection />
        <SpendTimeSection />
      </div>
      <TechUsageSection class="grid-4" />
    </div>
  </main>
</template>

<script setup lang="ts">
import BuildingsSection from 'src/components/buildings/BuildingsSection.vue';
import EventsSection from 'src/components/events/EventsSection.vue';
import WorkTechSection from 'src/components/workTech/WorkTechSection.vue';
import TimeChartSection from 'src/components/TimeChartSection.vue';
import TechUsageSection from 'src/components/techUsage/TechUsageSection.vue'
import SpendTimeSection from 'src/components/spendTime/SpendTimeSection.vue';
</script>

<style scoped lang="scss">
.main {
  padding-bottom: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  grid-template-areas:
    "grid-1 grid-2"
    "grid-3 grid-4";
}

.gird-1 {
  grid-area: grid-1;
}

.gird-2 {
  grid-area: grid-2;
}

.gird-3 {
  grid-area: grid-3;
}

.gird-4 {
  grid-area: grid-4;
}
</style>
