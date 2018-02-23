import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

import {pick} from "../stylesheet/utils"

const Toast = ({label, theme, k = Date.now()}) => (
  <div
    key={k}
    className={c(
      s.position("fixed"),
      s.right("0"),
      s.bottom("0"),
      s.bottom("45", "@small"),
      s.right("25perc", "@small"),
      s.right("35perc", "@medium"),
      s.left("0"),
      s.left("25perc", "@small"),
      s.left("35perc", "@medium"),
      s.zIndex("10"),
      s.paddingAll(["15", "24"]),
      s.textAlign("center"),
      s.borderRadius("8px", "@medium"),
      s.boxShadow("subtle-5", "@small"),
      s.animationName("notification-slide-in"),
      s.animationDuration("300ms"),
      pick(theme, {
        "regular": s.backgroundColor("dark-purple"),
        "warning": [
          s.backgroundColor("oyster-yellow"),
          s.borderAll(["1px", "solid", "custom-hockey-pockey"], "@small"),
        ],
      })
    )}>
    <span className={c(
        s.fontSize("15"),
        s.lineHeight("tight"),
        pick(theme, {
          "regular": s.color("white"),
          "warning": s.color("custom-yellow-metal"),
        })
      )}>
      {label}
    </span>
  </div>
)

Toast.propTypes = {
  theme: PropTypes.oneOf([
    "warning",
  ]),
  label: PropTypes.string.isRequired,
  k: PropTypes.number,
}

export default Toast
