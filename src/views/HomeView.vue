<template>
  <div class="home-page">
    <header class="home-page__header">
      <HomeHeader />
    </header>
    <main class="home-page__main">
      <aside
        class="home-page__main__side-nav"
        role="complementary"
        aria-label="Navigation"
      >
        <HomeNav />
      </aside>
      <section class="home-page__main__content-area" role="main">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeNav from '@/components/HomeNav.vue'
import { RouterView } from 'vue-router'
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

  &__main {
    display: flex;
    flex: 1;
  }

  &__main__side-nav {
    flex: 0 0 300px;
    background-color: #f0f2f5;
    padding: 1rem;
  }

  &__main__content-area {
    flex: 1;
    padding: 1rem;
  }
}
</style>
