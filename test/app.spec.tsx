import * as React from 'react'
import { mount, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'

configure({ adapter: new Adapter() })

test('Welcome to Electron', () => {
  const wrapper = mount(<App />)
  const p = wrapper.find('header p')
  expect(p.text()).toBe('Welcome to React')
})
