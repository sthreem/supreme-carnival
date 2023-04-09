<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li
        v-for="(navItem, index) in navItems"
        :key="index"
        class="main-nav__item"
        :class="{ 'main-nav__item--active': navItem === activeNavItem }"
      >
        <router-link :to="navItem.path" class="main-nav__link">
          <div class="main-nav__icon">
            <img :src="navItem.icon" :alt="navItem.name" />
          </div>
          <div class="main-nav__name">
            {{ navItem.name }}
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AnalyticsIcon from '@/assets/icons/home-nav/Analytics.svg'
import OffersIcon from '@/assets/icons/home-nav/Discounts.svg'
import LoyaltyIcon from '@/assets/icons/home-nav/Loyalty.svg'
import CurrenciesIcon from '@/assets/icons/home-nav/Currencies.svg'
import DispatchIcon from '@/assets/icons/home-nav/Driver.svg'
import ConfigurationsIcon from '@/assets/icons/home-nav/Settings.svg'

const navItems = [
  {
    name: 'Analytics',
    icon: AnalyticsIcon,
    path: '/analytics',
  },
  {
    name: 'Offers',
    icon: OffersIcon,
    path: '/offers',
  },
  {
    name: 'Loyalty',
    icon: LoyaltyIcon,
    path: '/loyalty',
  },
  {
    name: 'Currencies',
    icon: CurrenciesIcon,
    path: '/currencies',
  },
  {
    name: 'Dispatch',
    icon: DispatchIcon,
    path: '/dispatch',
  },
  {
    name: 'Configurations',
    icon: ConfigurationsIcon,
    path: '/configurations',
  },
]

const route = useRoute()
const router = useRouter()

const activeNavItem = computed(() => {
  const currentPath = route.path
  const matchingNavItem = navItems.find((navItem) =>
    currentPath.startsWith(navItem.path)
  )
  return matchingNavItem || null
})

onMounted(() => {
  router.push({ name: 'Currencies' })
})
</script>

<style lang="scss" scoped>
.main-nav {
  width: 100%;
  height: 100%;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__item {
    width: 100%;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: #333;
    text-decoration: none;
  }

  &__icon {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__name {
    font-size: 1.2rem;
    font-weight: 500;
  }

  &__item--active {
    background-color: #fff;
  }
}
</style>
