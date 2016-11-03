import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

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
      (theme === "warning") ? [
        s.backgroundColor("oyster-yellow"),
        s.borderAll(["1px", "solid", "custom-hockey-pockey"], "@small"),
      ] : [
        s.backgroundColor("dark-purple"),
      ]
    )}>
    <span className={c(
        s.fontSize("15"),
        s.lineHeight("tight"),
        s.color((theme === "warning") ? "custom-yellow-metal" : "white"),
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
