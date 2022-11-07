import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppLanguage from './index.vue'

import { SUPPORT_LOCALES as supportLocales } from '@/i18n';

const wrapper = mount(AppLanguage)

describe('AppLanguage', () => {
  it('is AppLanguage a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  for(let item of supportLocales) {
    it('validation button banguage locales', () => {
      const btn = wrapper.find(`[data-testid="test-${item}"]`)

      expect(btn.exists()).toBeTruthy()
      expect(btn.text()).toBe(item)
      expect(btn.find('img').element.getAttribute('alt')).toBe(item)
      expect(btn.find('img').element.getAttribute('src')).toBe(`./assets/flags/${item}.svg`)
    })
  }
})

