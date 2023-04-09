<template>
  <div class="currency-form__header">
    <div class="currency-form__header-left">
      <button class="close-button" aria-label="Close" @click="closeForm">
        <img src="@/assets/icons/currency-form/Close.svg" alt="Close" />
      </button>
      <h2>{{ formTitle }}</h2>
    </div>
    <div class="currency-form__header-right">
      <button class="cancel-button" @click="cancel">Cancel</button>
      <button class="action-button" @click="executeAction">
        {{ actionButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formTitle = computed(() => {
  return props.isAddForm ? 'Add Currency' : 'Edit Currency'
})

const actionButtonText = computed(() => {
  return props.isAddForm ? 'Add' : 'Save'
})

const closeForm = () => {
  router.push({ name: 'Currencies' })
}

const cancel = () => {
  props.onCancel()
}

const executeAction = () => {
  props.onExecute()
}

const props = defineProps({
  isAddForm: Boolean,
  onCancel: {
    type: Function,
    default: () => {},
  },
  onExecute: {
    type: Function,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.currency-form__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.currency-form__header-left,
.currency-form__header-right {
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
</style>
