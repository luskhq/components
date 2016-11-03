import React from "react"
import {PropTypes} from "react"

import c from "classnames"
import s from "../stylesheet"

const Heading = ({element, children, center, noMargin, ...passingProps}) => {
  const Element = element

  return (
    <Element {...passingProps} className={c(
        s.color("custom-limed-spruced"),
        s.textAlign(center && "center"),
        (element === "h2") && [
          s.marginBottom(noMargin ? "0" : "15"),
          s.marginBottom(noMargin ? "0" : "30", "@medium"),
          s.fontSize("24"),
          s.fontWeight("400"),
          s.lineHeight("comfy-2"),
        ],
        (element === "h3") && [
          s.marginBottom(noMargin ? "0" : "9"),
          s.fontSize("18"),
          s.fontWeight("600"),
          s.lineHeight("tight-2"),
        ],
      )}>
      {children}
    </Element>
  )
}

Heading.propTypes = {
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  center: PropTypes.bool,
  noMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  element: "h2",
}

export default Heading
