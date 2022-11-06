import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Language from './index.vue'

const wrapper = mount(Language)

describe('Language', () => {
  it('is Language a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

