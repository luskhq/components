import React from "react"
import {PropTypes} from "react"

import MaxWidthConstraint from "./MaxWidthConstraint"

import c from "classnames"
import s from "../stylesheet"

const Viewarea = ({children, size}) => (
  <MaxWidthConstraint size={size}>
    <div className={c(
        s.paddingAll(["15", "15", "30"]),
        s.paddingAll(["30", "75", "105"], "@medium"),
      )}>
      {children}
    </div>
  </MaxWidthConstraint>
)

Viewarea.propTypes = {
  size: PropTypes.oneOf(["narrow"]),
  children: PropTypes.node.isRequired,
}

export default Viewarea
