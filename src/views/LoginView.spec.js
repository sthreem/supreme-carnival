import { shallowMount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginView.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(LoginView, {
      global: {
        components: {
          LoginForm,
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the LoginForm component', () => {
    const wrapper = shallowMount(LoginView, {
      global: {
        components: {
          LoginForm,
        },
      },
    })
    expect(wrapper.findComponent(LoginForm).exists()).toBe(true)
  })

  it('renders the title and subtitle correctly', () => {
    const wrapper = shallowMount(LoginView, {
      global: {
        components: {
          LoginForm,
        },
      },
    })
    expect(wrapper.find('#login-title').text()).toBe('Sign In')
    expect(wrapper.find('.login-page__subtitle').text()).toBe(
      'Please enter your email and password'
    )
  })
})
