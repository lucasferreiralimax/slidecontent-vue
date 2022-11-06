import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppVersion from './index.vue'

import pkg from '../../../../package.json';

const wrapper = mount(AppVersion)

describe('AppVersion test', () => {
  it('is AppVersion a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('AppVersion validation pkg', () => {
    expect(wrapper.vm.appVersion).toBe(pkg.version)
  })
})
