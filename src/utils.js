function isObject(obj) {
  return obj === Object(obj);
};

export function template(message, values = {}){

  if (!message) {
  	return ''
  }

  if (isObject(values) && Object.keys(values).length > 0) {
    // remove spaces
    message = message.replace(/(\{)\s*(\S+)\s*(?=})/img, "$1$2");
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
