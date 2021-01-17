import { shallowMount } from '@vue/test-utils'

import SlideContent from './SlideContent.vue'

const wrapper = shallowMount(SlideContent)

describe('SlideContent', () => {
  it('is SlideContent a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
