import React from "react"
import PropTypes from "prop-types"

import sanitizeHtml from "sanitize-html"

const sanitize = (rawHtml) => (
  sanitizeHtml(rawHtml, {
    allowedTags: [],
    allowedAttributes: [],
  })
)

const RawText = ({rawHtml, className, ...otherProps}) => (
  <div {...otherProps} className={className}>
    {sanitize(rawHtml)}
  </div>
)

RawText.propTypes = {
  rawHtml: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default RawText
