import React from "react"
import PropTypes from "prop-types"

import c from "classnames"
import s from "../stylesheet"

import {apply} from "../stylesheet/utils"
import md5 from "md5"

const Avatar = ({url, email, theme, size, ...otherProps}) => (
  <div
    {...otherProps}
    style={{
      backgroundImage: (url) ? `url("${url}")` : `url("https://secure.gravatar.com/avatar/${md5(email)}?size=120&default=identicon")`,
      backgroundSize: "cover",
    }}
    className={c(
      s.position("relative"),
      s.flexGrow("0"),
      s.flexShrink("0"),
      s.margin("auto"),
      s.backgroundColor("white"),
      s.borderColor("white"),
      s.borderStyle("solid"),
      s.borderWidth((theme === "circle" && size === "large") ? "3px" : "2px"),
      s.borderRadius((theme === "circle") ? "50perc" : "4px"),
      apply(null, () => {
        if (theme === "circle") {
          if (size === "large") {
            return [
              s.width("60"),
              s.height("60"),
            ]
          }

          return [
            s.width("42"),
            s.height("42"),
          ]
        }

        if (size === "small") {
          return [
            s.width("30"),
            s.height("30"),
          ]
        }

        if (size === "large") {
          return [
            s.width("42"),
            s.height("42"),
          ]
        }

        return [
          s.width("36"),
          s.height("36"),
        ]
      }),
    )} />
)

Avatar.propTypes = {
  src: PropTypes.string,
  email: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.oneOf([
    "large",
    "small",
  ]),
}

export default Avatar
