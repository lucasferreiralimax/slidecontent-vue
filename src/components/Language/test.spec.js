import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Language from './index.vue'

import { SUPPORT_LOCALES as supportLocales } from '@/i18n';

const wrapper = mount(Language)

describe('Language', () => {
  it('is Language a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let item of supportLocales) {
    it('validation button banguage locales', () => {
      const btn = wrapper.find(`[data-testid="test-${item}"]`)

      expect(btn.exists()).toBeTruthy()
      expect(btn.text()).toBe(item)
    })
  }
})

