import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router'

describe('App.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the router view', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
