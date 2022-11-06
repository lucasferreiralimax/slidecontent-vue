import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NotFound from './index.vue'

const wrapper = mount(NotFound)

describe('NotFound', () => {
  it('is NotFound a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
