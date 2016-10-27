import React from "react"
import {PropTypes} from "react"

import {Spinner} from "./index"

import c from "classnames"
import s from "../stylesheet"

const LoadingSlate = ({theme}) => (
  <div className={c(
      s.display("flex"),
      s.alignItems("center"),
      s.justifyContent("center"),
      s.height((theme === "fullHeight") ? "100perc" : "300"),
      s.paddingBottom("15"),
    )}>
    <Spinner />
  </div>
)

LoadingSlate.propTypes = {
  theme: PropTypes.oneOf(["fullHeight"]),
}

export default LoadingSlate
