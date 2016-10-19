import React from "react"

import c from "classnames"
import s from "../stylesheet"

const DropdownSeparator = () => {
  <div className={c(
      s.height("1px"),
      s.marginAll(["6", "0"]),
      s.backgroundColor("oyster-background"),
    )}/>
}

export default DropdownSeparator
