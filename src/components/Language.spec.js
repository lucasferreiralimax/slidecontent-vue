import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import i18n from '../i18n'
import Language from '../components/Language.vue'

const wrapper = mount(Language, {
  i18n
})

describe('Language', () => {
  it('is Language a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

