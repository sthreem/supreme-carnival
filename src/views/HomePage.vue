<template>
  <div class="home-page">
    <header class="home-page__header"><HomeHeader /></header>
    <main class="home-page__main-content">
      <aside class="main-content__side-nav"><HomeNav /></aside>
      <section class="main-content__content-area"><CurrencyList /></section>
      <aside v-if="showCurrencyAction" class="main-content__side-action">
        <router-view />
      </aside>
    </main>
  </div>
</template>

<script setup>
import HomeHeader from '@/components/HomeHeader.vue'
import HomeNav from '@/components/HomeNav.vue'
import CurrencyList from '@/components/CurrencyList.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showCurrencyAction = computed(() => {
  return ['AddCurrency', 'EditCurrency'].includes(route.name)
})
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

  &__side-action {
    flex: 0 0 450px;
    background-color: #f0f2f5;
    padding: 1rem;
  }
}
</style>
