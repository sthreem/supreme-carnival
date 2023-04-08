<template>
  <div class="list-search">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search"
      class="list-search__input"
      :disabled="isSearchDisabled"
      aria-label="Search currencies"
      @input="filterCurrencyList"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchQuery = ref('')

const filteredCurrencies = computed(
  () => store.getters['currency/filteredCurrencies']
)

const filterCurrencyList = () => {
  store.dispatch('currency/filterCurrencyList', searchQuery.value)
}

const isSearchDisabled = computed(() => {
  return filteredCurrencies.value.length === 0
})
</script>

<style lang="scss">
.list-search {
  width: 100%;
}

.list-search__input {
  width: 350px;
  height: 3rem;
  padding: 0.5rem 2rem 0.5rem 3.5rem;
  border: 1px solid #dfe1e5;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  background-color: #fff;
  background-image: url('@/assets/icons/currency-list/Magnifier.svg');
  background-repeat: no-repeat;
  background-position: 1rem center;
  background-size: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border-color: #4caf50;
  }

  &::placeholder {
    color: #ccc;
    font-style: italic;
  }
}
</style>
