import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

const Cushion = ({children, theme}) => (
  <div className={c(
      (theme === "wide") ? [
        s.paddingAll(["24", "24", "30"]),
        s.paddingAll(["30", "30", "42"], "@small"),
        s.paddingAll(["66", "105", "105"], "@medium"),
      ] : [
        s.paddingAll(["15", "15", "21"]),
        s.paddingAll(["21", "21", "45"], "@small"),
        s.paddingAll(["45", "75", "75"], "@medium"),
      ]
    )}>
    {children}
  </div>
)

Cushion.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["wide"]),
}

export default Cushion
