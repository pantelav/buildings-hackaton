<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white header">
      <div class="header__container _container">
        <div class="left">
          <div class="logo" @click="$router.push('/')"><img :src="logo" class="logo-img" />Нетрис AI</div>
          <nav class="nav">
            <router-link to="/">
              <img :src="home" alt="">
              <p>Главная</p>
              <img :src="arrow" alt="">
            </router-link>
            <router-link to="/tech">
              <img :src="gear" alt="" width="18">
              <p>Техника</p>
              <img :src="arrow" alt="">
            </router-link>
            <router-link to="/">
              <img :src="objects" alt="">
              <p>Объекты</p>
              <img :src="arrow" alt="">
            </router-link>
            <router-link to="/">
              <img :src="docs" alt="">
              <p>Документация</p>
              <img :src="arrow" alt="">
            </router-link>
          </nav>
        </div>
        <div class="right"></div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { home, docs, objects, arrow, logo, gear } from 'src/assets'
</script>

<style scoped lang="scss">
.header__container {
  height: 60px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 50px;
}

.left {
  height: 100%;
  display: flex;
  gap: 60px;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
  }
}

.nav {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all .3s;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  a:hover {
    cursor: pointer;
    background: $primary-light;
  }
}
</style>
