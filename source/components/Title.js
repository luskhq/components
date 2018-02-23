import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

const Title = ({element, children, center, ...otherProps}) => {
  const Element = element

  return (
    <Element
      {...otherProps}
      className={c(
        s.marginBottom("30"),
        s.fontSize("48"),
        s.fontWeight("600"),
        s.lineHeight("tight-2"),
        s.color("oyster-gray-dark"),
        s.textAlign(center && "center"),
      )}>
      {children}
    </Element>
  )
}

Title.propTypes = {
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Title.defaultProps = {
  element: "h1",
}

export default Title
