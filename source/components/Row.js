import React from "react"
import PropTypes from "prop-types"
import {Children} from "react"

import c from "classnames"
import s from "../stylesheet"

const Row = ({children, marginDirection, distribute, distributeVertically}) => (
  <div className={c(
      s.display("flex"),
      s.justifyContent(distribute && "space-between"),
      s.alignItems(distributeVertically && "center"),
    )}>
    {Children.map(children, (child, index) => (
      <div
        key={index}
        className={c(
          s.flexShrink("0"),
          s.marginRight((marginDirection === "right") && "12"),
          s.marginLeft((marginDirection === "left") && "12"),
          s.margin(distribute && "0"),
        )}>
        {React.cloneElement(child)}
      </div>
    ))}
  </div>
)

Row.propTypes = {
  children: PropTypes.node.isRequired,
  marginDirection: PropTypes.oneOf(["left", "right"]),
  distribute: PropTypes.bool,
}

Row.defaultProps = {
  marginDirection: "right",
}

export default Row
