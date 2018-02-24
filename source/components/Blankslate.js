import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

const Blankslate = ({ children }) => (
  <div
    className={c(
      s.display("flex"),
      s.minHeight("240"),
      s.paddingAll(["36", "45", "51"]),
      s.backgroundColor("custom-mischka"),
      s.borderRadius("4px"),
    )}>
    <div className={c(s.margin("auto"), s.maxWidth("240"))}>{children}</div>
  </div>
);

Blankslate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blankslate;
