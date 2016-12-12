import { template, defaultProps } from './utils'
import React from 'react'

export class FormattedMessage extends React.Component {
  constructor(){
    super()
  }
  render() {
    let { message, values, tagName: Element, ...rest } = this.props
    message = template(message, values, rest)
    return <Element>{ message }</Element>
  }
}

FormattedMessage.defaultProps = defaultProps

export class FormattedHTMLMessage extends React.Component {
  constructor(){
    super()
  }

  render() {
    let { message, values, tagName: Element, ...rest } = this.props
    message = template(message, values, rest)
    return <Element dangerouslySetInnerHTML={ {__html: message } } />
  }
}

FormattedHTMLMessage.defaultProps = defaultProps

let ReactI18nMap = {
  FormattedMessage
  , FormattedHTMLMessage
}

export default ReactI18nMap
