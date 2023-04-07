<template>
  <header class="header">
    <div class="header__left">
      <div class="header__logo">
        <img
          src="@/assets/icons/home-header/Generic-brand.svg"
          alt="Logo"
          @click="handleLogoClick"
        />
      </div>
      <div class="header__texts">
        <h1 class="header__brand">Brand name</h1>
        <button class="header__stores" @click="handleStoreClick">
          All stores
        </button>
      </div>
    </div>
    <div class="header__right">
      <button class="header__icon" @click="handleNotificationClick">
        <img
          src="@/assets/icons/home-header/Bell.svg"
          alt="Notification icon"
        />
      </button>
      <button class="header__icon" @click="handleProfileClick">
        <img src="@/assets/icons/home-header/User.svg" alt="Profile icon" />
      </button>
    </div>
  </header>
</template>

<script setup>
const handleLogoClick = () => {
  // No logic to implement. Demo purpose only.
}

const handleNotificationClick = () => {
  // No logic to implement. Demo purpose only.
}

const handleProfileClick = () => {
  // No logic to implement. Demo purpose only.
}

const handleStoreClick = () => {
  // No logic to implement. Demo purpose only.
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  background-color: #f0f2f5;

  &__left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__right {
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: row;
  }
}

.header__logo {
  margin-right: 1rem;

  img {
    cursor: pointer;
  }
}

.header__brand {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

.header__stores {
  font-size: 0.9rem;
  font-weight: 500;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.header__icon {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  img {
    height: 1.5rem;
    width: 1.5rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
