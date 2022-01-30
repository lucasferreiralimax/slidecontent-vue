import { shallowMount, createLocalVue  } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

import App from './App.vue'

const wrapper = shallowMount(App, {
  localVue,
  router
})

describe('App', () => {
  it('is App a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
