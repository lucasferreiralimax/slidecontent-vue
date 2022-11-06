import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SlideItem from './index.vue'

const wrapper = mount(SlideItem)

describe('SlideItem', () => {
  it('is SlideItem a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('is SlideItem contains div .slide-item', () => {
    expect(wrapper.find('.slide-item').exists()).toBeTruthy()
  })

  it('is SlideItem contains a item null props', async () => {
    await wrapper.setProps({
      title: null,
      img: null,
      url: null,
      target: null,
    })
    expect(wrapper.vm.title).toBeNull()
    expect(wrapper.vm.img).toBeNull()
    expect(wrapper.vm.url).toBeNull()
    expect(wrapper.vm.target).toBeNull()
  })

  it('is SlideItem contains a item defined props', async () => {
    await wrapper.setProps({
      title: 'SlideContentVue',
      img: './assets/test.jpg',
      url: 'https://github.com/lucasferreiralimax/slidecontent-vue',
      target: '_blank',
    })
    expect(wrapper.vm.title).toBeDefined()
    expect(wrapper.vm.img).toBeDefined()
    expect(wrapper.vm.url).toBeDefined()
    expect(wrapper.vm.target).toBeDefined()
  })

  it('is SlideItem contains a item props contains values', async () => {
    await wrapper.setProps({
      title: 'SlideContentVue',
      img: './assets/test.jpg',
      url: 'https://github.com/lucasferreiralimax/slidecontent-vue',
      target: '_self',
    })
    expect(wrapper.vm.title).toBe('SlideContentVue')
    expect(wrapper.vm.img).toBe('./assets/test.jpg')
    expect(wrapper.vm.url).toBe('https://github.com/lucasferreiralimax/slidecontent-vue')
    expect(wrapper.vm.target).toBe('_self')
  })
})
