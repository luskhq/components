import React from "react"
import {PropTypes} from "react"

function SvgElement ({children, ...otherProps}) {
  return (
    <svg
      {...otherProps}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/svg/2000"
      >
      {children}
    </svg>
  )
}

SvgElement.propTypes = {
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default SvgElement