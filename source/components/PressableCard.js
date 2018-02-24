import React from "react";
import PropTypes from "prop-types";

import Pressable from "./Pressable";

import c from "classnames";
import s from "../stylesheet";

const PressableCard = ({ children, ...otherProps }) => (
  <Pressable
    {...otherProps}
    className={c(
      s.position("relative"),
      s.zIndex("1", ":hover"),
      s.backgroundColor("white"),
      s.backgroundColor("black-lighter", ":hover"),
      s.backgroundColor("black-lightest", ":active"),
      s.boxShadow("subtle"),
      s.boxShadow("strong-2", ":hover"),
      s.boxShadow("subtle", ":active"),
    )}>
    {children}
  </Pressable>
);

PressableCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PressableCard;
