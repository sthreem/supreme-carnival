<template>
  <main class="currencies">
    <section
      class="currencies__left"
      :class="{ 'currencies__left--shrink': rightVisible }"
    >
      <ListHeader />
      <ListSearch />
      <ListDisplay />
    </section>
    <section
      v-show="rightVisible"
      class="currencies__right"
      role="complementary"
      aria-label="Currency Details"
    >
      <router-view name="currency"></router-view>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

import ListHeader from '@/components/ListHeader.vue'
import ListSearch from '@/components/ListSearch.vue'
import ListDisplay from '@/components/ListDisplay.vue'

const route = useRoute()

const rightVisible = computed(() => {
  return route.name === 'AddCurrency' || route.name === 'EditCurrency'
})
</script>

<style lang="scss" scoped>
.currencies {
  display: flex;
  flex-direction: row;
  max-height: 100%;

  &__left {
    flex: 1 1 100%;
    height: 100%;
    transition: flex-basis 0.2s ease-in-out;
  }

  &__left--shrink {
    flex-basis: auto;
  }

  &__right {
    flex: 0 1 450px;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
