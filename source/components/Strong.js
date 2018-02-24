import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

const Strong = ({ children }) => 
  <strong className={c(s.fontWeight("600"))}>{children}</strong>
;

Strong.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Strong;
