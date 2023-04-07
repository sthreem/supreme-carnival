<template>
  <div class="currencies">
    <div class="currencies__left" :class="{ shrink: rightVisible }">
      <h1>Currencies</h1>
    </div>
    <div v-show="rightVisible" class="currencies__right">
      <router-view name="currency"></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

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

  &__left.shrink {
    flex-basis: auto;
  }

  &__right {
    flex: 0 1 450px;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
