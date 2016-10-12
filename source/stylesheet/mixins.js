const addPaddingAll = (stylesheet) => {
  if (!(stylesheet.padding && stylesheet.paddingTop && stylesheet.paddingRight && stylesheet.paddingBottom && stylesheet.paddingLeft)) {
    console.error("Coulnd't add `paddingAll` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`")
    return stylesheet
  }

  stylesheet.paddingAll = (values, arg) => {

    switch (values.length) {
      case 1:
        return stylesheet.padding(values[0], arg)
      case 2:
        return [
          stylesheet.paddingTop(values[0], arg),
          stylesheet.paddingRight(values[1], arg),
          stylesheet.paddingBottom(values[0], arg),
          stylesheet.paddingLeft(values[1], arg),
        ]
      case 3:
        return [
          stylesheet.paddingTop(values[0], arg),
          stylesheet.paddingRight(values[1], arg),
          stylesheet.paddingBottom(values[2], arg),
          stylesheet.paddingLeft(values[1], arg),
        ]
      case 4:
        return [
          stylesheet.paddingTop(values[0], arg),
          stylesheet.paddingRight(values[1], arg),
          stylesheet.paddingBottom(values[2], arg),
          stylesheet.paddingLeft(values[3], arg),
        ]
    }
  }

  return stylesheet
}

const addPaddingX = (stylesheet) => {
  if (!(stylesheet.paddingLeft && stylesheet.paddingRight)) {
    console.error("Coulnd't add `paddingX` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `paddingRight`, `paddingLeft`")
    return stylesheet
  }

  stylesheet.paddingX = (value, arg) => {
    return [
      stylesheet.paddingLeft(value, arg),
      stylesheet.paddingRight(value, arg),
    ]
  }

  return stylesheet
}

const addPaddingY = (stylesheet) => {
  if (!(stylesheet.paddingTop && stylesheet.paddingBottom)) {
    console.error("Coulnd't add `paddingY` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `paddingTop`, `paddingBottom`")
    return stylesheet
  }

  stylesheet.paddingY = (value, arg) => {
    return [
      stylesheet.paddingTop(value, arg),
      stylesheet.paddingBottom(value, arg),
    ]
  }

  return stylesheet
}

const addMixins = (stylesheet) => {
  addPaddingAll(stylesheet)
  addPaddingX(stylesheet)
  addPaddingY(stylesheet)
  return stylesheet
}

export default addMixins
