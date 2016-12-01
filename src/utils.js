export function template(values, message){
  if (Object.keys(values).length > 0) {
    Object.keys(values).forEach((item) => {
      message = message.split(`{${item}}`).join(values[item])
    })
  }
  return message
}

export defaultProps = {
  values : {},
  tagName: 'span',
}