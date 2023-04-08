<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(navItem, index) in navItems"
        :key="index"
        class="list__item"
        :class="{ active: navItem.path === currentRoutePath }"
      >
        <router-link :to="navItem.path" class="item__link">
          <div class="link__icon">
            <img :src="navItem.icon" :alt="navItem.name" />
          </div>
          <div class="link__name">
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

const navItems = ref([
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
])

const route = useRoute()
const router = useRouter()

const currentRoutePath = computed(() => {
  const currentRoute = route.path
  for (let i = 0; i < navItems.value.length; i++) {
    const navItem = navItems.value[i]
    if (currentRoute.startsWith(navItem.path)) {
      return navItem.path
    }
  }
  return ''
})

onMounted(() => {
  router.push({ name: 'Currencies' })
})
</script>

<style lang="scss" scoped>
.nav {
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
}

.list {
  &__item {
    width: 100%;
  }
}

.item {
  &__link {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: #333;
    text-decoration: none;
  }
}

.link {
  &__icon {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__name {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

.active {
  background-color: #fff;
}
</style>
