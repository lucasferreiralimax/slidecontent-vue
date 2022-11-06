import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SlideSource from './index.vue'

const wrapper = mount(SlideSource)

describe('SlideSource', () => {
  it('is SlideSource a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('is SlideSource contains svg logo Github', () => {
    expect(wrapper.find('.source h3 > svg').exists()).toBeTruthy()
  })

  it('is SlideSource contains text Código Fonte', () => {
    expect(wrapper.find('.source h3').text()).toBe('Código Fonte')
  })

  it('is SlideSource contains element code', () => {
    expect(wrapper.find('.source code').exists()).toBeTruthy()
  })
})
