<template>
  <header class="main-header">
    <div class="main-header__left">
      <div class="main-header__logo">
        <img
          src="@/assets/icons/home-header/Generic-brand.svg"
          alt="Logo"
          role="button"
          tabindex="0"
          @click="handleLogoClick"
        />
      </div>
      <div class="main-header__texts">
        <h1 class="main-header__brand">Brand name</h1>
        <button class="main-header__stores" @click="handleStoreClick">
          All stores
        </button>
      </div>
    </div>
    <div class="main-header__right">
      <button
        class="main-header__icon"
        aria-label="Notifications"
        @click="handleNotificationClick"
      >
        <img
          src="@/assets/icons/home-header/Bell.svg"
          alt="Notification icon"
        />
      </button>
      <button
        class="main-header__icon"
        aria-label="Profile"
        @click="handleProfileClick"
      >
        <img src="@/assets/icons/home-header/User.svg" alt="Profile icon" />
      </button>
    </div>
  </header>
</template>

<script setup>
const handleLogoClick = () => {
  // Logic not needed for the purpose of this assignment
}

const handleNotificationClick = () => {
  // Logic not needed for the purpose of this assignment
}

const handleProfileClick = () => {
  // Logic not needed for the purpose of this assignment
}

const handleStoreClick = () => {
  // Logic not needed for the purpose of this assignment
}
</script>

<style lang="scss" scoped>
.main-header {
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

.main-header__logo {
  margin-right: 1rem;

  img {
    cursor: pointer;
  }
}

.main-header__brand {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

.main-header__stores {
  font-size: 0.9rem;
  font-weight: 500;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.main-header__icon {
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
