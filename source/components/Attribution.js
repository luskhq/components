import React from "react"
import PropTypes from "prop-types"

import Time from "./Time"

import c from "classnames"
import s from "../stylesheet"

const Attribution = ({author, created}) => (
  <div className={c(
      s.fontSize("12"),
      s.color("custom-cadet-blue"),
    )}>
    {(author) ? <span>{author}, </span> : "Unknown author, "}
    <Time dateTime={created} />
  </div>
)

Attribution.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string.isRequired,
}

export default Attribution
