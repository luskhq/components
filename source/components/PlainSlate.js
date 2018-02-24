import React from "react";
import PropTypes from "prop-types";

import Viewarea from "./Viewarea";
import Text from "./Text";

const PlainSlate = ({ children }) => (
  <Viewarea size="narrow">
    <Text center>{children}</Text>
  </Viewarea>
);

PlainSlate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlainSlate;
