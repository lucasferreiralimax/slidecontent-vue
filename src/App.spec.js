import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import router from './router'
import App from './App.vue'

const wrapper = mount(App, {
  global: {
    plugins: [router]
  }
})

describe('App test', () => {
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
