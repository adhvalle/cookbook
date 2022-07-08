import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InfoSlider from '@/widgets/InfoSlider.vue'

describe('InfoSlider', () => {
  it('renders the component', () => {
    const wrapper = mountComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits on-click event when one product is clicked', () => {
    const wrapper = mountComponent()
    wrapper.find('[data-test="info-slider__item"]').trigger('click')
    expect(wrapper.emitted('on-click')).toEqual([[0]])
  })

  const mountComponent = (props = {}) =>
    mount(InfoSlider, {
      props: { 
        itemsList: [
          {
            description: 'description',
            details: {
              area: 'area',
              category: 'category',
              video: 'H5SmjR-fxUs'
            },
            image: '1520081754.jpg',
            title: 'Title'
          },
          {
            description: 'description',
            details: {
              area: 'area',
              category: 'category',
              video: 'H5SmjR-fxUs'
            },
            image: '1520081754.jpg',
            title: 'Title'
          }
        ],
        ...props
      }
    })
})