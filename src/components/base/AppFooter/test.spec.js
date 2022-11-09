import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppFooter from './index.vue'

import pkg from '../../../../package.json';

const wrapper = mount(AppFooter)
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

describe('AppFooter', () => {
  it('is AppFooter a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is AppFooter contains div footer', () => {
    expect(wrapper.find('.footer').exists()).toBeTruthy()
  })

  it('is AppFooter contains credits', () => {
    expect(wrapper.find('.footer a').element.href).toBe('https://github.com/lucasferreiralimax/slidecontent-vue')
    expect(wrapper.find('.footer a').text()).toBe(`Versão Vue${vueVersion}Versão SlideContent${appVersion}SlideContentVue@lucasferreiralimax`)
  })

  it('is AppFooter contains svg logo Github', () => {
    expect(wrapper.find('.footer a > svg').exists()).toBeTruthy()
  })
})
