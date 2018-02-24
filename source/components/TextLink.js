import React from "react";
import PropTypes from "prop-types";

import Pressable from "./Pressable";

import c from "classnames";
import s from "../stylesheet";

import { pick } from "../stylesheet/utils";

const TextLink = ({ children, className, ...props }, { theme }) => (
  <Pressable
    {...props}
    className={c(
      s.textDecoration("underline"),
      s.color("inherit"),
      s.transition("transform"),
      pick(theme, {
        regular: [
          s.color("oyster-blue", ":hover"),
          s.color("oyster-blue-dark-2", ":active"),
        ],
        warning: [
          s.color("custom-yellow-metal-darker", ":hover"),
          s.color("custom-yellow-metal-dark", ":active"),
        ],
        error: [
          s.color("custom-matrix-darker", ":hover"),
          s.color("custom-matrix-dark", ":active"),
        ],
      }),
    )}>
    {children}
  </Pressable>
);

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TextLink.contextTypes = {
  theme: PropTypes.oneOf(["warning", "error"]),
};

export default TextLink;
