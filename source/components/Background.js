import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

const Background = ({ children }) => (
  <div
    className={c(
      s.minHeight("100vh"),
      s.backgroundImage("background"),
      s.backgroundPosition("center"),
      s.backgroundSize("cover"),
    )}>
    {children}
  </div>
);

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
