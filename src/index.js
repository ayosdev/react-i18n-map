import { template, defaultProps } from './utils'

export function FormattedMessage(props) {
  let { message, values, tagName: Element } = props
  message = template(values, message)
  return <Element>{ message }</Element>
}

FormattedMessage.defaultProps = defaultProps

export function FormattedHTMLMessage(props) {
  let { message, values, tagName: Element } = props
  message = template(values, message)
  return <Element>{ message }</Element>
}

FormattedHTMLMessage.defaultProps = defaultProps
