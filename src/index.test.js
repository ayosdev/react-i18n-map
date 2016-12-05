import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from './index'
import { shallow, render } from 'enzyme'

describe('FormattedMessage', () => {

  test('return react component', () => {
    let wrapper = shallow(<FormattedMessage message="hello" />);
    expect(wrapper.contains("hello")).toBe(true)
  })

  test('return blank message', () => {
    let wrapper = shallow(<FormattedMessage />);
    expect(wrapper.text()).toBe('')
  })

  test('return interpolated message', () => {
    let wrapper = shallow(<FormattedMessage message="hello {foo}" values={ { foo: 'world'} } />);
    expect(wrapper.text()).toBe('hello world')
  })

})

describe('FormattedHTMLMessage', () => {

  test('return blank message', () => {
    let wrapper = render(<FormattedHTMLMessage />);
    expect(wrapper.text()).toBe('')
  })

  test('return interpolated message', () => {
    let wrapper = render(<FormattedHTMLMessage message="hello {foo}, yo {bar}" values={ { foo: 'world', bar: 'chris'} } />);
    expect(wrapper.text()).toBe('hello world, yo chris')
  })

})
