<template>
  <div class="list-header">
    <h2 class="list-header__title">Currencies</h2>
    <button
      class="list-header__button"
      :disabled="isAddCurrencyRoute"
      @click="addCurrency"
    >
      <img
        class="list-header__button-icon"
        src="@/assets/icons/currency-list/Plus.svg"
        alt="Add Currency"
      />
      <span class="list-header__button-label">Add Currency</span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const addCurrency = () => {
  router.push({ name: 'AddCurrency' })
}

const isAddCurrencyRoute = computed(() => {
  return router.currentRoute.value.name === 'AddCurrency'
})
</script>

<style lang="scss">
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &__button {
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #2f80ed;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
}

.list-header__button {
  img {
    margin-right: 0.5rem;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover {
    &:not(:disabled) {
      background-color: #1f6ac8;
    }
  }
}
</style>
