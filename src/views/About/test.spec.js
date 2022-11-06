import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import About from './index.vue'

const wrapper = mount(About)

describe('About', () => {
  it('is About a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
