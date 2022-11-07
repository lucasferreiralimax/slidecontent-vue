import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import AppNavigation from './index.vue'

const wrapper = mount(AppNavigation, {
  global: {
    plugins: [router]
  }
})

describe('AppNavigation test', () => {
  it('is AppNavigation a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is AppNavigation render links', () => {
    wrapper.findAll('.link').forEach((item) => {
      expect(item).toBeTruthy()
    })
  })
  it('is AppNavigation render icons', () => {
    expect(wrapper.find('[data-testid="HomeIcon"]')).toBeTruthy()
    expect(wrapper.find('[data-testid="MenuBookIcon"]')).toBeTruthy()
  })
})
