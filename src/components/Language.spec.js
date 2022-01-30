import { shallowMount } from '@vue/test-utils'
import i18n from '@/i18n'

import Language from './Language.vue'

const wrapper = shallowMount(Language, {
  i18n
})

describe('Language', () => {
  it('is Language a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
