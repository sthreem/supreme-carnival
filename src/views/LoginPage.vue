<template>
  <div class="login-page">
    <div class="login-page__card">
      <h2 class="login-page__title">Sign In</h2>
      <h3 class="login-page__subtitle">Please enter your email and password</h3>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}
</style>
