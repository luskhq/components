import React from "react";
import PropTypes from "prop-types";

import c from "classnames";
import s from "../stylesheet";

import { pick } from "../stylesheet/utils";

const Group = ({ children, spacing }) => (
  <div
    className={c(
      pick(spacing, {
        regular: [s.marginBottom("15")],
        medium: [s.marginBottom("15"), s.marginBottom("30", "@medium")],
        large: [s.marginBottom("21"), s.marginBottom("45", "@medium")],
      }),
    )}>
    {children}
  </div>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(["large", "medium"]),
  last: PropTypes.bool,
};

export default Group;
