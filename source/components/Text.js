import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

import { pick } from "../stylesheet/utils";

const Text = (
  { children, center, hero, noMargin, ...otherProps },
  { theme },
) => (
  <p
    {...otherProps}
    className={c(
      s.marginBottom(noMargin ? "0" : "15"),
      s.fontSize(hero ? "21" : "15"),
      s.textAlign(center && "center"),
      s.lineHeight("comfy"),
      pick(theme, {
        regular: s.color("oyster-blue-gray"),
        warning: s.color("custom-yellow-metal"),
        error: s.color("custom-matrix"),
      }),
    )}>
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node,
  noMargin: PropTypes.bool,
  center: PropTypes.bool,
  hero: PropTypes.bool,
};

Text.contextTypes = {
  theme: PropTypes.oneOf(["warning", "error"]),
};

export default Text;
