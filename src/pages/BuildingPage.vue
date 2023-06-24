<template>
  <main class="_container main">
    <section>
      <VideoSection />
      <div class="grid">
        <EventsSection class="grid-1" />
        <WorkTechSection class="grid-2" />
        <div class="times grid-3">
          <TimeChartSection />
          <SpendTimeSection />
        </div>
        <TechClasses class="grid-4" />
      </div>
    </section>
  </main>
</template>

<script setup lang='ts'>
import VideoSection from 'src/components/video/VideoSection.vue';
import EventsSection from 'src/components/events/EventsSection.vue';
import WorkTechSection from 'src/components/workTech/WorkTechSection.vue';
import TimeChartSection from 'src/components/TimeChartSection.vue';
import SpendTimeSection from 'src/components/spendTime/SpendTimeSection.vue';
import TechClasses from 'src/components/TechClasses.vue'
import { ref, onMounted, computed } from 'vue'
</script>

<style scoped lang='scss'>
.main {
  padding-bottom: 40px;
}

.grid {
  margin-top: 40px;
}
</style>
