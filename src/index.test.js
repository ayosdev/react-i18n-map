import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from './index'
import { shallow, mount } from 'enzyme'

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
    let wrapper = mount(<FormattedHTMLMessage />);
    expect(wrapper.text()).toBe('')
  })

  it('failing test', () => {
    expect(false).toBe(true)
  })

  it('allows us to set props', () => {
    const wrapper = mount(<FormattedHTMLMessage message="heya" />);
    expect(wrapper.props().message).toBe("heya");
    wrapper.setProps({ message: "foo" });
    expect(wrapper.props().message).toBe("foo");
  });

  test('return interpolated message', () => {
    let wrapper = mount(<FormattedHTMLMessage message="hello {foo}, yo {bar}" values={ { foo: 'world', bar: 'chris'} } />);
    expect(wrapper.text()).toBe('hello world, yo chris')
  })

  test('return interpolated message with with normal props', () => {
    let wrapper = mount(<FormattedHTMLMessage message="hello {foo}, yo {bar}" foo="world" bar="chris" />);
    expect(wrapper.text()).toBe('hello world, yo chris')
  })

  test('return interpolated message with with react element as props', () => {
    const element = <span>chris</span>
    let wrapper = mount(<FormattedHTMLMessage message="hello {foo}, yo {bar}" foo="world" bar={ element } />);
    expect(wrapper.html()).toBe('<span>hello world, yo <span>chris</span></span>')
  })


})
