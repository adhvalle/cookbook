import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InfoDetailed from '@/components/InfoDetailed.vue'

describe('InfoDetailed', () => {
  it('renders the component', () => {
    const wrapper = mountComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the component with favourite button', () => {
    const wrapper = mountComponent({ showFavouritesButton: true })
    expect(wrapper.find('[data-test="info-detailed__favourites"]').exists()).toBeTruthy()
  })

  it('emits on-toggle-favourite event when favourite button is clicked', () => {
    const wrapper = mountComponent({ showFavouritesButton: true })
    wrapper.find('[data-test="info-detailed__favourites"]').trigger('click')
    expect(wrapper.emitted('on-toggle-favourite')).toBeTruthy()
  })

  const mountComponent = (props = {}) =>
    mount(InfoDetailed, {
      props: { 
        info: {
          description: 'description',
          details: {
            area: 'area',
            category: 'category',
            video: 'video'
          },
          image: '1520081754.jpg',
          thumbnail: '1520081754.jpg/preview',
          title: 'Title'
        },
        ...props
      }
    })
})