import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Text = ({children, center, hero, noMargin, ...otherProps}, {theme}) => (
  <p {...otherProps} className={c(
      s.marginBottom(noMargin ? "0" : "15"),
      s.fontSize(hero ? "21" : "15"),
      s.textAlign(center && "center"),
      s.lineHeight("comfy"),
      s.color("oyster-blue-grey"),
      s.color(theme === "warning" && "custom-yellow-metal"),
      s.color(theme === "error" && "custom-matrix"),
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
