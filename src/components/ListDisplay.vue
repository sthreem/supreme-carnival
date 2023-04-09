<template>
  <section class="currency-table">
    <table class="currency-table__table">
      <thead>
        <tr class="currency-table__header-row">
          <th class="currency-table__column">Currency Name</th>
          <th class="currency-table__column">Currency Code</th>
          <th class="currency-table__column">Currency Symbol</th>
          <th class="currency-table__column"></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="filteredCurrencies.length">
          <tr
            v-for="currency in filteredCurrencies"
            :key="currency.id"
            class="currency-table__row"
            @click="editCurrency(currency.id)"
          >
            <td class="currency-table__column">{{ currency.id }}</td>
            <td class="currency-table__column">{{ currency.isoMark }}</td>
            <td class="currency-table__column">{{ currency.symbol }}</td>
            <td class="currency-table__column">
              <button
                class="currency-table__delete-button"
                aria-label="Delete Currency"
                @click.stop="deleteCurrency(currency.id)"
              >
                <img
                  class="currency-table__delete-icon"
                  src="@/assets/icons/currency-list/Trash.svg"
                  alt=""
                />
              </button>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="4" class="currency-table__empty">
              There are no currencies added
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const filteredCurrencies = computed(
  () => store.getters['currency/filteredCurrencies']
)

const editCurrency = (id) => {
  router.push({ name: 'EditCurrency', params: { id } })
}

const deleteCurrency = async (id) => {
  const isEditingCurrentCurrency = isCurrentCurrencyBeingEdited(route, id)

  await store.dispatch('currency/deleteCurrency', id)

  if (isEditingCurrentCurrency) {
    router.back()
  }
}

const isCurrentCurrencyBeingEdited = (route, id) => {
  const routeId = route.params.id
  return route.name === 'EditCurrency' && routeId === id
}
</script>

<style lang="scss">
.currency-table {
  &__table {
    width: 100%;
    border-collapse: collapse;
  }

  &__header-row {
    text-align: left;
  }

  &__column {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }

  &__row {
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &__delete-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &__delete-icon {
    display: block;
  }

  &__empty {
    text-align: center;
    padding: 0.5rem;
  }
}
</style>
