import App from '../src/App.vue'
import { mount } from '@vue/test-utils'

describe('the App', () => {
  const wrapper = mount(App, {})

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
