import { shallowMount } from '@vue/test-utils'

import SlideSource from './SlideSource.vue'

const wrapper = shallowMount(SlideSource)

describe('SlideSource', () => {
  it('is SlideSource a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
