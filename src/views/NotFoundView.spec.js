import { shallowMount } from '@vue/test-utils'
import NotFoundView from '@/views/NotFoundView.vue'

describe('NotFoundView', () => {
  it('renders the not found message', () => {
    const wrapper = shallowMount(NotFoundView)

    expect(wrapper.find('h1').text()).toBe('404 Not Found')
    expect(wrapper.find('p').text()).toBe(
      'The page you are looking for does not exist.'
    )
  })
})
