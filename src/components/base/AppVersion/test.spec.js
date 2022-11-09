import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppVersion from './index.vue'

import pkg from '../../../../package.json';

const wrapper = mount(AppVersion)
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

describe('AppVersion test', () => {
  it('is AppVersion a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('AppVersion validation SlideContent version', () => {
    expect(wrapper.vm.appVersion).toBe(appVersion)
  })
  it('AppVersion validation vue version', () => {
    expect(wrapper.vm.vueVersion).toBe(vueVersion)
  })
  it('AppVersion validation text version', () => {
    expect(wrapper.text()).toBe(`Versão Vue${vueVersion}Versão SlideContent${appVersion}`)
  })
})
