import React from "react";
import PropTypes from "prop-types";

import Viewarea from "./Viewarea";
import Title from "./Title";
import Text from "./Text";

const FailSlate = ({ title, children }) => (
  <Viewarea size="narrow">
    <Title center>{title}</Title>
    <Text center hero>
      {children}
    </Text>
  </Viewarea>
);

FailSlate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FailSlate;
