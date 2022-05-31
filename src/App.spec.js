import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import i18n from './i18n'
import router from './router'
import App from './App.vue'

const wrapper = mount(App, {
  i18n,
  global: {
    plugins: [router]
  }
})

describe('Language', () => {
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})