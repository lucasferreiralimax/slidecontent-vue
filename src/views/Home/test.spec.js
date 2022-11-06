import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from './index.vue'

const wrapper = mount(Home)

describe('Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
