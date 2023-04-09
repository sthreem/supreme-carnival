import { shallowMount } from '@vue/test-utils'
import GenericView from '@/views/GenericView.vue'

describe('GenericView', () => {
  it('renders a heading', () => {
    const wrapper = shallowMount(GenericView)
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('renders a subheading', () => {
    const wrapper = shallowMount(GenericView)
    expect(wrapper.find('h2').exists()).toBe(true)
  })
})
