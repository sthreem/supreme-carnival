import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import HomeNav from '@/components/HomeNav.vue'

describe('HomeView.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        components: {
          HomeHeader,
          HomeNav,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the HomeHeader and HomeNav components', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        components: {
          HomeHeader,
          HomeNav,
        },
      },
    })
    expect(wrapper.findComponent(HomeHeader).exists()).toBe(true)
    expect(wrapper.findComponent(HomeNav).exists()).toBe(true)
  })

  it('renders the router-view component', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        components: {
          HomeHeader,
          HomeNav,
        },
      },
    })
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
