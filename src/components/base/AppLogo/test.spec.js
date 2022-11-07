import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import AppLogo from './index.vue'

const wrapper = mount(AppLogo, {
  global: {
    plugins: [router]
  }
})

describe('AppLogo test', () => {
  it('is AppLogo a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is AppLogo render text SlideContentVue', () => {
    expect(wrapper.text()).toBe('SlideContentVue')
  })
  it('is AppLogo render img logo', () => {
    const logo = wrapper.find('[alt="Vue logo"]')

    expect(logo).toBeTruthy()
    expect(logo.element.getAttribute('alt')).toBe('Vue logo')
    expect(logo.element.getAttribute('width')).toBe('100')
  })
})
