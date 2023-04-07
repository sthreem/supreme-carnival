<template>
  <form class="form" @submit.prevent="handleSignIn">
    <div class="form__field">
      <label for="email" class="form__label">Email</label>
      <input
        id="email"
        v-model.trim="email"
        type="email"
        required
        class="form__input"
        @blur="emailTouched = true"
      />
      <span v-if="emailTouched && !isEmailValid" class="form__error"
        >Please enter a valid email address</span
      >
    </div>
    <div class="form__field">
      <label for="password" class="form__label">Password</label>
      <input
        id="password"
        v-model.trim="password"
        type="password"
        required
        class="form__input"
        @blur="passwordTouched = true"
      />
      <span v-if="passwordTouched && !isPasswordValid" class="form__error"
        >Please enter a valid password</span
      >
    </div>
    <button type="submit" class="form__button" :disabled="!isFormValid">
      Sign In
    </button>
  </form>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const emailTouched = ref(false)
const passwordTouched = ref(false)

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPassword = (password) => {
  return password.length >= 6
}

const isEmailValid = computed(() => {
  return !emailTouched.value || isValidEmail(email.value)
})

const isPasswordValid = computed(() => {
  return !passwordTouched.value || isValidPassword(password.value)
})

const isFormValid = computed(() => {
  return isEmailValid.value && isPasswordValid.value
})

const errorMessage = ref('')

const handleSignIn = async () => {
  try {
    await store.dispatch('auth/login', {
      email: email.value,
      password: password.value,
    })
    router.push('/')
  } catch (error) {
    errorMessage.value = error.message
  }
}

watch([email, password], () => {
  errorMessage.value = ''
})

onMounted(() => {
  errorMessage.value = ''
})
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    & > label {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    & > input {
      height: 3rem;
      padding: 0.5rem;
      border: 1px solid #dfe1e5;
      border-radius: 4px;
      font-size: 1rem;
      font-family: inherit;
      outline: none;
    }

    & > .form__error {
      color: #ff3860;
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }
  }

  &__button {
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

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover {
      background-color: #1f6ac8;
    }
  }
}
</style>
