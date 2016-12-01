import React from "react"
import {PropTypes} from "react"

import Row from "./Row"

import c from "classnames"
import s from "../stylesheet"

const Toolbar = ({children}) => (
  <div className={c(
      s.marginBottom("15"),
      s.marginBottom("36", "@medium"),
    )}>
    <Row distribute>
      {children}
    </Row>
  </div>
)

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Toolbar
