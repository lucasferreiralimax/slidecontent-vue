import { shallowMount } from '@vue/test-utils'

import SlideItem from './SlideItem.vue'

const wrapper = shallowMount(SlideItem)

describe('SlideItem', () => {
  it('is SlideItem a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
