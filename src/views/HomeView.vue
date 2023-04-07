<template>
  <div class="home-page">
    <header class="home-page__header"><HomeHeader /></header>
    <main class="home-page__main-content">
      <aside class="main-content__side-nav"><HomeNav /></aside>
      <section class="main-content__content-area"><router-view /></section>
    </main>
  </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeNav from '@/components/HomeNav.vue'
</script>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    height: 4rem;
    background-color: #f0f2f5;
    padding: 0 1rem;
  }

  &__main-content {
    display: flex;
    flex: 1;
  }
}

.main-content {
  &__side-nav {
    flex: 0 0 300px;
    background-color: #f0f2f5;
    padding: 1rem;
  }

  &__content-area {
    flex: 1;
    padding: 1rem;
  }
}
</style>
