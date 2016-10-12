import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Cushion = ({children, theme}) => (
  <div className={c(
      s.paddingTop(theme && "24" : "15"),
      s.paddingTop(theme && "30" : "21", "@small"),
      s.paddingTop(theme && "45" : "45", "@medium"),
      s.paddingRight(theme && "24" : "15"),
      s.paddingRight(theme && "30" : "21", "@small"),
      s.paddingRight(theme && "105" : "75", "@medium"),
      s.paddingBottom(theme && "30" : "21"),
      s.paddingBottom(theme && "42" : "45", "@small"),
      s.paddingBottom(theme && "105" : "75", "@medium"),
      s.paddingLeft(theme && "24" : "15"),
      s.paddingLeft(theme && "30" : "21", "@small"),
      s.paddingLeft(theme && "105" : "75", "@medium"),
    )}>
    {children}
  </div>
)

Cushion.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["wide"]),
}

export default Cushion
