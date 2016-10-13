// Utils

const makeRem = (base) => (px) => `${px / base}rem`
const rem = makeRem(15)
const perc = (fraction) => `${fraction * 100}%`


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
]


// ============= RULES =============

// Spacing (Margin and Padding)

const spacing = [
  ["auto", "auto"],
  ["0", "0"],
  ["15", rem(15)],      // 1
  ["21", rem(21)],      // 1.4
  ["24", rem(24)],      // 1.6
  ["30", rem(30)],      // 2
  ["42", rem(42)],      // 2.8
  ["45", rem(45)],      // 3
  ["66", rem(66)],      // 4.4
  ["75", rem(75)],      // 5
  ["105", rem(105)],    // 7
  ["780", rem(780)],    // 52
  ["1350", rem(1350)],  // 90
]

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

// Typography

const fontSize = {
  name: "font-size",
  rules: spacing,
  media,
}

const lineHeight = {
  name: "line-height",
  rules: [
    ["1.4", "1.4"],
  ],
  media,
}

const textAlign = {
  name: "textAlign",
  rules:  [
    ["left", "left"],
    ["center", "center"],
    ["right", "right"],
  ],
  media,
}

// Colors

const colors = [
  ["inherit"],
  ["transparent"],
  ["black", "#000"],
  ["transparent-black", "rgba(0,0,0,0.2)"],
  ["white", "#fff"],
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
  ["oyster-blue-grey", "#5f7d94"],
  ["oyster-blue-grey-dark", "#4d6273"],
  ["custom-mischka", "#e3e3e7"],
  ["custom-yellow-metal", "#7e653c"],
  ["custom-matrix", "#aa4e59"],
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

// Visual

const boxShadow = {
  name: "box-shadow",
  rules: [
    ["subtle", "0 2px 3px rgba(0,0,0,0.1)"],
    ["strong", "0px 10px 15px rgba(0,0,0,0.30)"],
  ],
}


// ========== DEFINITIONS ==========

export default [

  // Positioning

  // Box-model

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

  // Typography

  fontSize,
  lineHeight,
  textAlign,

  // Colors

  color,
  backgroundColor,

  // Visual

  boxShadow,

  // Misc

]
