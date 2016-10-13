import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const MaxWidthConstraint = ({children, size}) => (
  <div className={c(
    s.maxWidth(size && "780"),
    s.maxWidth("1350", "@medium"),
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
