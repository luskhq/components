import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Cushion = ({children, theme}) => (
  <div className={c(
    s.paddingAll(theme === "wide" ? ["24", "24", "30"] : ["15", "15", "21"]),
    s.paddingAll(theme === "wide" ? ["30", "30", "42"] : ["21", "21", "45"], "@small"),
    s.paddingAll(theme === "wide" ? ["66", "105", "105"] : ["45", "75", "75"], "@medium"),
  )}>
    {children}
  </div>
)

Cushion.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["wide"]),
}

export default Cushion
