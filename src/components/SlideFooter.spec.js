import { shallowMount } from '@vue/test-utils'

import SlideFooter from './SlideFooter.vue'

const wrapper = shallowMount(SlideFooter)

describe('SlideFooter', () => {
  it('is SlideFooter a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
