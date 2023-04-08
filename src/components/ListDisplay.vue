<template>
  <div class="list-display">
    <table class="list-display__table">
      <thead>
        <tr class="list-display__header-row">
          <th class="list-display__column">Currency Name</th>
          <th class="list-display__column">Currency Code</th>
          <th class="list-display__column">Currency Symbol</th>
          <th class="list-display__column"></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="filteredCurrencies.length">
          <tr
            v-for="currency in filteredCurrencies"
            :key="currency.id"
            class="list-display__row"
            @click="editCurrency(currency.id)"
          >
            <td class="list-display__column">{{ currency.id }}</td>
            <td class="list-display__column">{{ currency.isoMark }}</td>
            <td class="list-display__column">{{ currency.symbol }}</td>
            <td class="list-display__column">
              <img
                class="list-display__delete-icon"
                src="@/assets/icons/currency-list/Trash.svg"
                alt="Delete Currency"
                @click.stop="deleteCurrency(currency.id)"
              />
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="4" class="list-display__empty">
              There are no currencies added
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const filteredCurrencies = computed(
  () => store.getters['currency/filteredCurrencies']
)

const editCurrency = (id) => {
  router.push({ name: 'EditCurrency', params: { id } })
}

const deleteCurrency = (id) => {
  store.dispatch('currency/deleteCurrency', id)
}
</script>

<style lang="scss">
.list-display {
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

  &__delete-icon {
    cursor: pointer;
  }

  &__empty {
    text-align: center;
    padding: 0.5rem;
  }
}
</style>
