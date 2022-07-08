import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InfoPreview from '@/components/InfoPreview.vue'

describe('InfoPreview', () => {
  it('renders the component', () => {
    const wrapper = mountComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the component as selected item', () => {
    const wrapper = mountComponent({ isSelected: true })
    expect(wrapper.classes()).toContain('info-preview--selected')
  })

  const mountComponent = (props = {}) =>
    mount(InfoPreview, {
      props: { 
        info: {
          description: 'description',
          thumbnail: '1520081754.jpg/preview',
          title: 'Title'
        },
        ...props
      }
    })
})