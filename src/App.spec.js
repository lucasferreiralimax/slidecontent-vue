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
  it('App render header', () => {
    expect(wrapper.find('.header').exists()).toBeTruthy()
  })
  it('App render main', () => {
    expect(wrapper.find('main').exists()).toBeTruthy()
  })
  it('App render footer', () => {
    expect(wrapper.find('.footer').exists()).toBeTruthy()
  })
})
