import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

import {pick, apply} from "../stylesheet/utils"

const Text = ({children, center, hero, noMargin, ...otherProps}, {theme}) => (
  <p
    {...otherProps}
    className={c(
      s.marginBottom(noMargin ? "0" : "15"),
      s.fontSize(hero ? "21" : "15"),
      s.textAlign(center && "center"),
      s.lineHeight("comfy"),
      apply(theme, (theme) => {
        const color = pick(theme, {
          regular: "oyster-blue-gray",
          warning: "custom-yellow-metal",
          error: "custom-matrix",
        })

        return [
          s.color(`${color}`),
        ]
      }),
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
