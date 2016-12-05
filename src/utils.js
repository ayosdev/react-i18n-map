function isObject(obj) {
  return obj === Object(obj);
};

export function template(message, values = {}){
  if (isObject(values) && Object.keys(values).length > 0) {
    Object.keys(values).forEach((item) => {
      message = message.split(`{${item}}`).join(values[item])
    })
  }
  return message
}

export let defaultProps = {
  values : {},
  tagName: 'span',
}