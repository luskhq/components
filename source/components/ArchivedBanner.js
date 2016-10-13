import React from "react"
import MaxWidthConstraint from "./MaxWidthConstraint"

import c from "classnames"
import s from "../stylesheet"

const ArchivedBanner = () => (
  <div className={c(
    s.backgroundColor("#e3e3e7"),
  )}>
    <MaxWidthConstraint>
      <div className={c(
        s.paddingAll(["30", "75"]),
        s.fontSize("21"),
        s.color("#4d6273"),
      )}>
        This position is archived
      </div>
    </MaxWidthConstraint>
  </div>
)

export default ArchivedBanner
