import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

const Hint = ({children, center, ...otherProps}) => (
  <p {...otherProps} className={c(
      s.marginBottom("15"),
      s.fontSize("13"),
      s.lineHeight("comfy"),
      s.color("custom-tower-gray"),
      s.textAlign(center && "center"),
    )}>
    {children}
  </p>
)

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}

export default Hint
