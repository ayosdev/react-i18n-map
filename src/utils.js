import React from 'react'
import ReactDOM from 'react-dom/server'

function isObject(obj) {
  return obj === Object(obj);
};

export function template(message, values = {}, rest = {}){

  if (!message) {
  	return ''
  }

  if (isObject(values) && Object.keys(values).length > 0) {
    // remove spaces
    message = message.replace(/(\{)\s*(\S+)\s*(?=})/img, "$1$2");
    Object.keys(values).forEach((item) => {
      message = message.split(`{${item}}`).join(values[item])
    })

    return message
  }

  if (isObject(rest) && Object.keys(rest).length > 0) {
    // remove spaces
    message = message.replace(/(\{)\s*(\S+)\s*(?=})/img, "$1$2");
    Object.keys(rest).forEach((item) => {
      let element = rest[item]

      if ( React.isValidElement(element) ) {
        element = ReactDOM.renderToStaticMarkup( element )
      }

      message = message.split(`{${item}}`).join( element )
    })

    return message
  }

  return message
}

export let defaultProps = {
  values : {},
  tagName: 'span',
}
