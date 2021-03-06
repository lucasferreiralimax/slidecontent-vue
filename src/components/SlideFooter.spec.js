import { shallowMount } from '@vue/test-utils'

import SlideFooter from './SlideFooter.vue'

const wrapper = shallowMount(SlideFooter)

describe('SlideFooter', () => {
  it('is SlideFooter a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('is SlideFooter contains div footer', () => {
    expect(wrapper.find('.footer').exists()).toBeTruthy()
  })

  it('is SlideFooter contains credits', () => {
    expect(wrapper.find('.footer a').element.href).toBe('https://github.com/lucasferreiralimax/slidecontent-vue')
    expect(wrapper.find('.footer a').text()).toBe('SlideContentVue@lucasferreiralimax')
  })

  it('is SlideFooter contains svg logo Github', () => {
    expect(wrapper.find('.footer a > svg').exists()).toBeTruthy()
  })
})
