import React from "react";
import PropTypes from "prop-types";

import SvgElement from "./SvgElement";

import c from "classnames";
import s from "../stylesheet";

// prettier-ignore
const icons = {
  add: <path d="M5,5 L2,5 L2,7 L5,7 L5,10 L7,10 L7,7 L10,7 L10,5 L7,5 L7,2 L5,2 L5,5 Z" />,
  hire: <path d="M2.9142132,4.72129659 L1.5,6.13550959 L5.0355342,9.67104379 L10.6923882,4.01418959 L9.2781742,2.59997559 L5.03553357,6.84261696 L2.9142132,4.72129659 Z" />,
  move: <path d="M9.30618553,8.39618187 L9.30618553,9.39618187 L4.30618553,9.39618187 L4.30618553,7.39618187 L5.89197197,7.39618187 L2.59907875,4.10328865 L4.01329231,2.68907509 L7.30618553,5.98196831 L7.30618553,4.39618187 L9.30618553,4.39618187 L9.30618553,8.39618187 Z" transform="translate(5.952632, 6.042628) rotate(-45.000000) translate(-5.952632, -6.042628)" />,
  reject: <path d="M4.58578644,6 L2.25233392,8.33345251 L3.66654749,9.74766608 L6,7.41421356 L8.33345251,9.74766608 L9.74766608,8.33345251 L7.41421356,6 L9.74766608,3.66654749 L8.33345251,2.25233392 L6,4.58578644 L3.66654749,2.25233392 L2.25233392,3.66654749 L4.58578644,6 L4.58578644,6 Z" />,
  default: <path />,
}

const TinyIcon = ({ name, theme, ...passingProps }) => (
  <SvgElement {...passingProps} viewBox="0 0 12 12" width=".8em" height=".8em">
    <g className={c(s.fill(theme === "light" ? "white" : "gray"))}>
      {icons[name] || icons.default}
    </g>
  </SvgElement>
);

TinyIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)),
  theme: PropTypes.oneOf(["light"]),
};

export default TinyIcon;
