import React from "react"
import {PropTypes} from "react"

import {ellipsize} from "ellipsize"

const Ellipsize = ({text, length}) => (
  <div className="Ellipsize">{ellipsize(text, length)}</div>
)

Ellipsize.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number,
}

Ellipsize.defaultProps = {
  length: 300,
}

export default Ellipsize
