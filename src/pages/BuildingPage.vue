<template>
  <main class="_container">
    <section>
      <h1 class="title">г. Екатеринбург, ул. Малышева, д.35</h1>
      <div class="video-grid">
        <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/bqYGJpO7tHc" />

      </div>
    </section>
  </main>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.title {
  font-size: 28px;
  padding-bottom: 20px;
}

.video-grid {
  display: grid;
  grid-template-columns: 60% 40%;
}
</style>
