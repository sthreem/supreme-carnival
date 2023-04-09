import { shallowMount } from '@vue/test-utils'
import CurrenciesView from '@/views/CurrenciesView.vue'
import { useRoute } from 'vue-router'

jest.mock('vue-router')

describe('CurrenciesView', () => {
  beforeEach(() => {
    useRoute.mockReturnValue({
      name: '',
    })
  })

  it('displays the right section if the route name is AddCurrency', () => {
    useRoute.mockReturnValue({
      name: 'AddCurrency',
    })
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.find('.currencies__right').isVisible()).toBe(true)
  })

  it('displays the right section if the route name is EditCurrency', () => {
    useRoute.mockReturnValue({
      name: 'EditCurrency',
    })
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.find('.currencies__right').isVisible()).toBe(true)
  })

  it('does not display the right section if the route name is not AddCurrency or EditCurrency', () => {
    useRoute.mockReturnValue({
      name: 'Currencies',
    })
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.find('.currencies__right').isVisible()).toBe(false)
  })

  it('renders a ListHeader component', () => {
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.findComponent({ name: 'ListHeader' })).toBeTruthy()
  })

  it('renders a ListSearch component', () => {
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.findComponent({ name: 'ListSearch' })).toBeTruthy()
  })

  it('renders a ListDisplay component', () => {
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.findComponent({ name: 'ListDisplay' })).toBeTruthy()
  })

  it('renders a router-view component with the name "currency"', () => {
    const wrapper = shallowMount(CurrenciesView)
    expect(
      wrapper.findComponent({ name: 'RouterView', props: { name: 'currency' } })
    ).toBeTruthy()
  })

  it('adds the currencies__left--shrink class when the right section is visible', async () => {
    useRoute.mockReturnValue({
      name: 'AddCurrency',
    })
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.find('.currencies__left').classes()).toContain(
      'currencies__left--shrink'
    )
  })

  it('removes the currencies__left--shrink class when the right section is not visible', async () => {
    useRoute.mockReturnValue({
      name: 'Currencies',
    })
    const wrapper = shallowMount(CurrenciesView)
    expect(wrapper.find('.currencies__left').classes()).not.toContain(
      'currencies__left--shrink'
    )
  })
})
