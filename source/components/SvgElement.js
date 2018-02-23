import React from "react"
import PropTypes from "prop-types"

const SvgElement = ({children, ...otherProps}) => (
  <svg
    {...otherProps}
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/svg/2000">
    {children}
  </svg>
)

SvgElement.propTypes = {
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default SvgElement
