import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Text = ({children, center, hero, noMargin, ...otherProps}, {theme}) => (
  <p {...otherProps} className={c(
    s.marginBottom(noMargin === true ? "0" : "15"),
    s.fontSize(hero === true ? "21" : "15"),
    s.lineHeight("1.4"),
    s.color("oyster-blue-grey"),
    s.color(theme === "themeWarning" && "custom-yellow-metal"),
    s.color(theme === "themeError" && "custom-matrix"),
    s.textAlign(center && "center"),
  )}>
    {children}
  </p>
)

Text.propTypes = {
  noMargin: PropTypes.bool,
  center: PropTypes.bool,
  hero: PropTypes.bool,
}

Text.contextTypes = {
  theme: PropTypes.oneOf(["warning", "error"]),
}

export default Text
