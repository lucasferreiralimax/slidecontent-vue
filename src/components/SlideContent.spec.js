import { shallowMount } from '@vue/test-utils'

import SlideContent from './SlideContent.vue'

const wrapper = shallowMount(SlideContent)

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
})
