import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

const MaxWidthConstraint = ({children, size}) => (
  <div className={c(
      s.maxWidth((size === "narrow") ? "780" : "1350"),
      s.marginAll(["0", "auto"]),
    )}>
    {children}
  </div>
)

MaxWidthConstraint.propTypes = {
  size: PropTypes.oneOf(["narrow"]),
  children: PropTypes.node.isRequired,
}

export default MaxWidthConstraint
