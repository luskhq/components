import co from "color"

// Utils

const makeRem = (base) => (px) => `${px / base}rem`
const rem = makeRem(15)
// const perc = (fraction) => `${fraction * 100}%`
const comix = (c1, c2, perc) => co(c1).mix(co(c2), perc).hexString()


// ============= MEDIA =============

const media = [
  ["@tiny", "(min-width: 25em)"],
  ["@small", "(min-width: 40em)"],
  ["@medium", "(min-width: 60em)"],
  ["@large", "(min-width: 75em)"],
  ["@xlarge", "(min-width: 130em)"],
]


// ============= PSEUDO ============

const pseudo = [
  ":hover",
  ":active",
]


// ============= RULES =============

// Positioning

// Location (Top, Right, Bottom and Left)

const location = [
  ["auto"],
  ["0"],
  ["100perc", "100%"],
]

const position = {
  name: "position",
  rules: [
    ["static"],
    ["relative"],
    ["absolute"],
    ["fixed"],
  ],
  media,
}

const top = {
  name: "top",
  rules: location,
  media,
}

const right = {
  name: "right",
  rules: location,
  media,
}

const bottom = {
  name: "bottom",
  rules: location,
  media,
}

const left = {
  name: "left",
  rules: location,
  media,
}

const zIndex = {
  name: "z-index",
  rules: [
    ["5"],
  ],
}

const display = {
  name: "display",
  rules: [
    ["none"],
    ["inline"],
    ["inline-block"],
    ["block"],
    ["flex"],
  ],
  media,
}

const flexGrow = {
  name: "flex-grow",
  rules: [
    ["1"],
  ],
  media,
}

const flexShrink = {
  name: "flex-shrink",
  rules: [
    ["0"],
  ],
  media,
}

const flexDirection = {
  name: "flex-direction",
  rules: [
    ["row-reverse"],
  ],
  media,
}

const alignItems = {
  name: "align-items",
  rules: [
    ["center"],
  ],
  media,
}

const justifyContent = {
  name: "justify-content",
  rules: [
    ["center"],
  ],
  media,
}

// Spacing (WithMargin and Padding)

const spacing = [
  ["auto"],
  ["0"],
  ["3", rem(3)],        // 0.2
  ["6", rem(6)],        // 0.4
  ["9", rem(9)],        // 0.6
  ["12", rem(12)],      // 0.8
  ["13", rem(13)],      // 0.9 cca
  ["15", rem(15)],      // 1
  ["16", rem(16)],      // 1.1 cca
  ["21", rem(21)],      // 1.4
  ["24", rem(24)],      // 1.6
  ["30", rem(30)],      // 2
  ["36", rem(36)],      // 2.4
  ["42", rem(42)],      // 2.8
  ["45", rem(45)],      // 3
  ["51", rem(51)],      // 3.4
  ["54", rem(54)],      // 3.6
  ["66", rem(66)],      // 4.4
  ["75", rem(75)],      // 5
  ["105", rem(105)],    // 7
  ["135", rem(135)],    // 9
  ["240", rem(240)],    // 16
  ["780", rem(780)],    // 52
  ["1350", rem(1350)],  // 90
]

const width = {
  name: "width",
  rules: spacing,
  media,
}

const height = {
  name: "height",
  rules: spacing,
  media,
}

const minWidth = {
  name: "min-width",
  rules: spacing,
  media,
}

const maxWidth = {
  name: "max-width",
  rules: spacing,
  media,
}

const padding = {
  name: "padding",
  rules: spacing,
  media,
}

const paddingTop = {
  name: "padding-top",
  rules: spacing,
  media,
}

const paddingRight = {
  name: "padding-right",
  rules: spacing,
  media,
}

const paddingBottom = {
  name: "padding-bottom",
  rules: spacing,
  media,
}

const paddingLeft = {
  name: "padding-left",
  rules: spacing,
  media,
}

const margin = {
  name: "margin",
  rules: spacing,
  media,
}

const marginTop = {
  name: "margin-top",
  rules: spacing,
  media,
}

const marginRight = {
  name: "margin-right",
  rules: spacing,
  media,
}

const marginBottom = {
  name: "margin-bottom",
  rules: spacing,
  media,
}

const marginLeft = {
  name: "margin-left",
  rules: spacing,
  media,
}

const overflow = {
  name: "overflow",
  rules: [
    ["visible"],
    ["auto"],
    ["scroll"],
    ["hidden"],
  ],
  media,
}

// Typography

const fontSize = {
  name: "font-size",
  rules: spacing,
  media,
}

const fontWeight = {
  name: "font-weight",
  rules: [
    ["600"],
  ],
  media,
}

const lineHeight = {
  name: "line-height",
  rules: [
    ["tight", "1"],
    ["comfy", "1.4"],
  ],
  media,
}

const textAlign = {
  name: "text-align",
  rules:  [
    ["left"],
    ["center"],
    ["right"],
  ],
  media,
}

const textDecoration = {
  name: "text-decoration",
  rules:  [
    ["none"],
    ["underline"],
  ],
}

const textTransform = {
  name: "text-transform",
  rules:  [
    ["lowercase"],
    ["uppercase"],
  ],
}

// Colors

const colors = [
  ["inherit"],
  ["transparent"],
  ["black", "#000"],
  ["white", "#fff"],
  ["white-light", comix("#fff", "#000", "0.99")],
  ["white-dark", comix("#000", "#000", "0.98")],

  // Lusk Color Palette
  ["gray", "#9bb5c3"],
  ["dark-gray", "#3d5275"],
  ["light-gray", "#f1f1f3"],
  ["red", "#ff4b5b"],
  ["orange", "#ff6c47"],
  ["yellow", "#ffce3e"],
  ["turquoise", "#00d4a8"],
  ["aqua", "#49c6f2"],
  ["blue", "#4996f2"],
  ["purple", "#a08eed"],
  ["pink", "#f593ca"],
  ["dark-red", "#e84452"],
  ["dark-orange", "#ff5833"],
  ["dark-yellow", "#ffbb3e"],
  ["dark-turquoise", "#00c79e"],
  ["dark-aqua", "#44bce6"],
  ["dark-blue", "#428ae0"],
  ["dark-purple", "#9484e0"],
  ["dark-pink", "#f080bf"],

  // Colors defined as constants in Oyster which are not part of the Lusk
  // color palette
  ["oyster-blue-gray", "#5f7d94"],
  ["oyster-blue-gray-dark", "#4d6273"],
  ["oyster-blue", "#428ae0"],
  ["oyster-blue-light", comix("#fff", "#428ae0", "0.2")],
  ["oyster-blue-dark", comix("#000", "#428ae0", "0.06")],
  ["oyster-green", "#3bccac"],
  ["oyster-green-light", comix("#fff", "#3bccac", "0.2")],
  ["oyster-green-dark", comix("#000", "#3bccac", "0.06")],
  ["oyster-red", "#ea6979"],
  ["oyster-red-light", comix("#fff", "#ea6979", "0.2")],
  ["oyster-red-dark", comix("#000", "#ea6979", "0.06")],
  ["oyster-background", "#f1f1f3"],

  // Colors specified inline in Oyster components which are not part of the
  // Lusk color palette
  ["custom-mischka", "#e3e3e7"],
  ["custom-mischka-2", "#dedee4"],
  ["custom-yellow-metal", "#7e653c"],
  ["custom-matrix", "#aa4e59"],
  ["custom-iron", "#e4e4e6"],
  ["custom-heather", "#b8c7d1"],
  ["custom-puerto-rico", "#3cc69c"],
  ["custom-gull-gray", "#9ba9b5"],
  ["custom-gull-gray-light", comix("#fff", "#9ba9b5", "0.15")],
  ["custom-gull-gray-dark", comix("#000", "#9ba9b5", "0.06")],

  // Alpha Colors variants
  ["black-alpha-5", "rgba(0,0,0,.05)"],
  ["black-alpha-15", "rgba(0,0,0,.15)"],
]

const color = {
  name: "color",
  rules: colors,
  pseudo,
}

const backgroundColor = {
  name: "background-color",
  rules: colors,
  pseudo,
}

const fill = {
  name: "fill",
  rules: colors,
}

// Visual

const borderColor = {
  name: "border-color",
  rules: colors,
}

const borderStyle = {
  name: "border-style",
  rules: [
    ["solid"],
  ],
}

const borderWidth = {
  name: "border-width",
  rules: [
    ["1"],
  ],
}

const borderRadius = {
  name: "border-radius",
  rules: [
    ["50perc", "50%"],
    ["3", rem(3)], // 0.2rem
  ],
}

const opacity = {
  name: "opacity",
  rules: [
    ["50perc", ".5"],
  ],
}

const boxShadow = {
  name: "box-shadow",
  rules: [
    ["none"],
    ["subtle", "0 2px 3px rgba(0,0,0,0.1)"],
    ["subtle-2", "0 3px 8px rgba(0,0,0,0.2)"],
    ["subtle-3", "0 3px 4px -1px rgba(0,0,0,0.1)"],
    ["subtle-4", "0 3px 8px -1px rgba(0,0,0,0.3)"],
    ["strong", "0px 10px 15px rgba(0,0,0,0.30)"],
  ],
  pseudo,
}

// Misc

const transform = {
  name: "transform",
  rules: [
    ["translate-y-3", `translateY(${rem(3)})`], // 0.2rem
  ],
}

const transformOrigin = {
  name: "transform-origin",
  rules: [
    ["top-left", "top left"],
    ["top-right", "top right"],
  ],
}

const animationName = {
  name: "animation-name",
  rules: [
    ["dropdown-button-open"],
  ],
}

const animationDuration = {
  name: "animation-duration",
  rules: [
    ["100ms"],
  ],
}

const transition = {
  name: "transition",
  rules: [
    ["background", "background-color .15s"],
    ["background-shadow", "background-color .15s, box-shadow .15s"],
  ],
}


// ========== DEFINITIONS ==========

export default [

  // Positioning

  position,
  top,
  right,
  bottom,
  left,
  zIndex,

  // Box-model

  display,

  flexGrow,
  flexShrink,
  flexDirection,
  alignItems,
  justifyContent,

  width,
  height,
  minWidth,
  maxWidth,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  overflow,

  // Typography

  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textDecoration,
  textTransform,

  // Colors

  color,
  backgroundColor,
  fill,

  // Visual

  borderColor,
  borderStyle,
  borderWidth,
  borderRadius,
  opacity,
  boxShadow,

  // Misc

  transform,
  transformOrigin,

  animationName,
  animationDuration,

  transition,

]
