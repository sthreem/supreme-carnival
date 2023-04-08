<template>
  <div class="currency-form">
    <div class="form__header">
      <div class="header__left">
        <button class="close-button" @click="goBack">
          <img src="@/assets/icons/currency-form/Close.svg" alt="Close" />
        </button>
        <h2>{{ formTitle }}</h2>
      </div>
      <div class="header__right">
        <button class="cancel-button" @click="cancel">Cancel</button>
        <button class="action-button" @click="executeAction">
          {{ actionButtonText }}
        </button>
      </div>
    </div>
    <form novalidate @submit.prevent="executeAction">
      <div class="form__body__field">
        <label for="currency-name">Currency Name</label>
        <input
          id="currency-name"
          v-model.trim="currency.id"
          :class="{ error: idError }"
          type="text"
          placeholder="Add name"
          @blur="validateId"
        />
        <p v-if="idError" class="error-message" :class="{ visible: idError }">
          Please enter a name
        </p>
      </div>
      <div class="form__body__field">
        <label for="currency-code">Currency Code</label>
        <input
          id="currency-code"
          v-model.trim="currency.isoMark"
          :class="{ error: isoMarkError }"
          type="text"
          placeholder="e.g. USD"
          @blur="validateIsoMark"
        />
        <p
          v-if="isoMarkError"
          class="error-message"
          :class="{ visible: isoMarkError }"
        >
          Please enter a code
        </p>
      </div>
      <div class="form__body__field">
        <label for="currency-symbol">Currency Symbol</label>
        <input
          id="currency-symbol"
          v-model.trim="currency.symbol"
          :class="{ error: symbolError }"
          type="text"
          placeholder="Add symbol"
          @blur="validateSymbol"
        />
        <p
          v-if="symbolError"
          class="error-message"
          :class="{ visible: symbolError }"
        >
          Please enter a symbol
        </p>
      </div>
      <p
        v-if="uniqueError"
        class="error-message"
        :class="{ visible: uniqueError }"
      >
        Currency with the same values already exists.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

const goBack = () => {
  router.back()
}

const formTitle = computed(() => {
  return route.name === 'AddCurrency' ? 'Add Currency' : 'Edit Currency'
})

const actionButtonText = computed(() => {
  return route.name === 'AddCurrency' ? 'Add' : 'Save'
})

const currency = ref({
  id: '',
  isoMark: '',
  symbol: '',
})

const idError = ref(false)
const isoMarkError = ref(false)
const symbolError = ref(false)
const uniqueError = ref(false)

watch(
  () => route.params.id,
  (newId) => {
    if (route.name === 'EditCurrency') {
      const currencyToUpdate = store.getters['currency/findCurrencyById'](newId)
      if (currencyToUpdate) {
        currency.value = { ...currencyToUpdate }
      }
    }
  },
  { immediate: true }
)

const validateId = () => {
  idError.value = !currency.value.id
}

const validateIsoMark = () => {
  isoMarkError.value = !currency.value.isoMark
}

const validateSymbol = () => {
  symbolError.value = !currency.value.symbol
}

const cancel = () => {
  if (route.name === 'EditCurrency') {
    const originalCurrency = store.getters['currency/findCurrencyById'](
      route.params.id
    )
    if (originalCurrency) {
      currency.value = { ...originalCurrency }
    }
  } else {
    currency.value = {
      id: '',
      isoMark: '',
      symbol: '',
    }
  }
  goBack()
}

const isCurrencyUnique = () => {
  const existingCurrency = store.getters['currency/allCurrencies'].find(
    (c) =>
      c.id === currency.value.id ||
      c.isoMark === currency.value.isoMark ||
      c.symbol === currency.value.symbol
  )
  return !existingCurrency
}

const executeAction = () => {
  validateId()
  validateIsoMark()
  validateSymbol()

  if (!idError.value && !isoMarkError.value && !symbolError.value) {
    if (route.name === 'AddCurrency' && !isCurrencyUnique()) {
      uniqueError.value = true
      return
    }

    uniqueError.value = false

    const action =
      route.name === 'AddCurrency'
        ? 'currency/addCurrency'
        : 'currency/updateCurrency'
    store.dispatch(action, currency.value).then(() => {
      goBack()
    })
  }
}
</script>

<style lang="scss" scoped>
.currency-form {
  padding: 0 1rem;
}

.form {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header {
  &__left,
  &__right {
    display: flex;
    align-items: center;

    h2 {
      font-weight: 500;
      margin-left: 1rem;
    }

    button {
      height: 3rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button.cancel-button {
      margin-right: 1rem;
    }

    button.action-button {
      background-color: #2f80ed;
      color: #fff;

      &:hover {
        background-color: #1f6ac8;
      }
    }
  }
}

.form__body {
  margin-top: 2rem;

  &__field {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    label {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    input {
      height: 3rem;
      padding: 0.5rem;
      border: 1px solid #dfe1e5;
      border-radius: 4px;
      font-size: 1rem;
      font-family: inherit;
      outline: none;

      &:focus {
        border-color: #2f80ed;
      }

      &.error {
        border-color: #e74c3c;
      }
    }

    .error-message {
      font-size: 0.9rem;
      color: #e74c3c;
      margin-top: 0.25rem;
      display: none;

      &.visible {
        display: block;
      }
    }
  }
}

.error-message {
  font-size: 0.9rem;
  color: #e74c3c;
  margin-top: 0.25rem;
  display: none;

  &.visible {
    display: block;
  }
}
</style>
