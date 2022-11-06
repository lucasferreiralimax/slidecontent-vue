import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SlideContent from './index.vue'

const wrapper = mount(SlideContent)

describe('SlideContent', () => {
  it('is SlideContent a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('is SlideContent contains buttons navigation', async () => {
    await wrapper.setProps({ nav: true })
    expect(wrapper.vm.nav).toBeTruthy()
    expect(wrapper.find('.btn.prev').exists()).toBeTruthy()
    expect(wrapper.find('.btn.next').exists()).toBeTruthy()
  })

  it('is SlideContent not contains buttons navigation', async () => {
    await wrapper.setProps({ nav: false })
    expect(wrapper.vm.nav).toBeFalsy()
    expect(wrapper.find('.btn.prev').exists()).toBeFalsy()
    expect(wrapper.find('.btn.next').exists()).toBeFalsy()
  })

  it('is SlideContent contains div slots', () => {
    expect(wrapper.find('.slide-slots').exists()).toBeTruthy()
  })

  it('is SlideContent contains border', async () => {
    await wrapper.setProps({ border: true })
    expect(wrapper.vm.border).toBeTruthy()
    expect(wrapper.classes()).toContain('border')
  })

  it('is SlideContent contains squared option', async () => {
    await wrapper.setProps({ squared: true })
    expect(wrapper.vm.squared).toBeTruthy()
    expect(wrapper.classes()).toContain('squared')
  })
})
