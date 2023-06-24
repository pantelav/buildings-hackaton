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
</style>
