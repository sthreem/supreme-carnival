<template>
  <div class="search">
    <label for="searchInput" class="sr-only">Search currencies</label>
    <input
      id="searchInput"
      v-model="searchQuery"
      type="search"
      placeholder="Search"
      class="search__input"
      @input="filterCurrencyList"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchQuery = ref('')

const filterCurrencyList = () => {
  store.dispatch('currency/filterCurrencyList', searchQuery.value)
}
</script>

<style lang="scss">
.search {
  width: 100%;
}

.search__input {
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

.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>
