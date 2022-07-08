import { describe, it, expect } from 'vitest'

import { mount, RouterLinkStub } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  it('renders the component', () => {
    const wrapper = mountComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  const mountComponent = () =>
    mount(TheHeader, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
})