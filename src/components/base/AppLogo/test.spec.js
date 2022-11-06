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
})
