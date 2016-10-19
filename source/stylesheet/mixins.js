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

const addMarginAll = (stylesheet) => {
  if (!(stylesheet.margin && stylesheet.marginTop && stylesheet.marginRight && stylesheet.marginBottom && stylesheet.marginLeft)) {
    console.error("Coulnd't add `marginAll` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`")
    return stylesheet
  }

  stylesheet.marginAll = (values, arg) => {

    switch (values.length) {
      case 1:
        return stylesheet.margin(values[0], arg)
      case 2:
        return [
          stylesheet.marginTop(values[0], arg),
          stylesheet.marginRight(values[1], arg),
          stylesheet.marginBottom(values[0], arg),
          stylesheet.marginLeft(values[1], arg),
        ]
      case 3:
        return [
          stylesheet.marginTop(values[0], arg),
          stylesheet.marginRight(values[1], arg),
          stylesheet.marginBottom(values[2], arg),
          stylesheet.marginLeft(values[1], arg),
        ]
      case 4:
        return [
          stylesheet.marginTop(values[0], arg),
          stylesheet.marginRight(values[1], arg),
          stylesheet.marginBottom(values[2], arg),
          stylesheet.marginLeft(values[3], arg),
        ]
    }
  }

  return stylesheet
}

const addMarginX = (stylesheet) => {
  if (!(stylesheet.marginLeft && stylesheet.marginRight)) {
    console.error("Coulnd't add `marginX` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `marginRight`, `marginLeft`")
    return stylesheet
  }

  stylesheet.marginX = (value, arg) => {
    return [
      stylesheet.marginLeft(value, arg),
      stylesheet.marginRight(value, arg),
    ]
  }

  return stylesheet
}

const addMarginY = (stylesheet) => {
  if (!(stylesheet.marginTop && stylesheet.marginBottom)) {
    console.error("Coulnd't add `marginY` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `marginTop`, `marginBottom`")
    return stylesheet
  }

  stylesheet.marginY = (value, arg) => {
    return [
      stylesheet.marginTop(value, arg),
      stylesheet.marginBottom(value, arg),
    ]
  }

  return stylesheet
}

const addBorderAll = (stylesheet) => {
  if (!(stylesheet.borderColor && stylesheet.borderStyle && stylesheet.borderWidth)) {
    console.error("Coulnd't add `paddingAll` mixin: The following rules have to be defined on the stylesheet object to be able to add it: `borderColor`, `borderStyle`, `borderWidth`")
    return stylesheet
  }

  stylesheet.borderAll = (values, arg) => {

    switch (values.length) {
      case 2:
        return [
          stylesheet.borderWidth(values[0], arg),
          stylesheet.borderStyle(values[1], arg),
        ]
      case 3:
        return [
          stylesheet.borderWidth(values[0], arg),
          stylesheet.borderStyle(values[1], arg),
          stylesheet.borderColor(values[2], arg),
        ]
    }
  }

  return stylesheet
}

const addMixins = (stylesheet) => {
  addPaddingAll(stylesheet)
  addPaddingX(stylesheet)
  addPaddingY(stylesheet)
  addMarginAll(stylesheet)
  addMarginX(stylesheet)
  addMarginY(stylesheet)
  addBorderAll(stylesheet)
  return stylesheet
}

export default addMixins
