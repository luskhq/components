import React from "react"

import {SvgElement} from "./index"

import c from "classnames"
import s from "../stylesheet"

const Spinner = () => (
  <SvgElement
    width="72"
    height="72"
    viewBox="0 0 72 72">
    <path d="m 62.782179,34.221922 c 0,15.7712 -11.99206,28.5594 -26.78129,28.5594 -14.78923,0 -26.7812887,-12.7882 -26.7812887,-28.5594" fillOpacity="0" fill="#ffffff" strokeDasharray="0" strokeLinejoin="miter" strokeLinecap="round" strokeOpacity="1" stroke="#00d4a8" strokeMiterlimit="50" strokeWidth="18" className={c(
        s.animationName("run"),
        s.animationDuration("1600ms"),
        s.animationTimingFunction("ease-out"),
        s.animationIterationCount("infinite"),
      )} />
    <path d="m 62.782179,34.221922 c 0,15.7712 -11.99206,28.5594 -26.78129,28.5594 -14.78923,0 -26.7812887,-12.7882 -26.7812887,-28.5594" fillOpacity="0" fill="#ffffff" strokeDasharray="0" strokeLinejoin="miter" strokeLinecap="round" strokeOpacity="1" stroke="#ff6c47" strokeMiterlimit="50" strokeWidth="18" className={c(
        s.animationName("run"),
        s.animationDuration("1600ms"),
        s.animationDelay("90ms"),
        s.animationTimingFunction("ease-out"),
        s.animationIterationCount("infinite"),
      )} />
    <path d="m 62.782179,34.221922 c 0,15.7712 -11.99206,28.5594 -26.78129,28.5594 -14.78923,0 -26.7812887,-12.7882 -26.7812887,-28.5594" fillOpacity="0" fill="#ffffff" strokeDasharray="0" strokeLinejoin="miter" strokeLinecap="round" strokeOpacity="1" stroke="#ffce3e" strokeMiterlimit="50" strokeWidth="18" className={c(
        s.animationName("run"),
        s.animationDuration("1600ms"),
        s.animationDelay("9180ms"),
        s.animationTimingFunction("ease-out"),
        s.animationIterationCount("infinite"),
      )} />
    <path d="m 62.782179,34.221922 c 0,15.7712 -11.99206,28.5594 -26.78129,28.5594 -14.78923,0 -26.7812887,-12.7882 -26.7812887,-28.5594" fillOpacity="0" fill="#ffffff" strokeDasharray="0" strokeLinejoin="miter" strokeLinecap="round" strokeOpacity="1" stroke="#a08eed" strokeMiterlimit="50" strokeWidth="18" className={c(
        s.animationName("run"),
        s.animationDuration("1600ms"),
        s.animationDelay("270ms"),
        s.animationTimingFunction("ease-out"),
        s.animationIterationCount("infinite"),
      )} />
  </SvgElement>
)

export default Spinner
