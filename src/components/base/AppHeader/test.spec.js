import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import AppHeader from './index.vue'

const wrapper = mount(AppHeader, {
  global: {
    plugins: [router]
  }
})

describe('AppHeader test', () => {
  it('is AppHeader a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('AppHeader render language', () => {
    expect(wrapper.find('.language')).toBeTruthy()
  })
  it('AppHeader render logo', () => {
    expect(wrapper.find('.logo')).toBeTruthy()
  })
  it('AppHeader render mavigation', () => {
    expect(wrapper.find('#nav')).toBeTruthy()
  })
})
