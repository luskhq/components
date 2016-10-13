import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Card = ({children, raised}) => (
  <div className={c(
      s.boxShadow(raised ? "strong" : "subtle"),
      s.backgroundColor("white"),
    )}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  raised: PropTypes.bool,
}

export default Card
