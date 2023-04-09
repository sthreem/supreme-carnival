<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
