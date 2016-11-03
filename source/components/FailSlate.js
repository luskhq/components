import React from "react"
import {PropTypes} from "react"

import {Viewarea} from "./index"
import {Title} from "./index"
import {Text} from "./index"

const FailSlate = ({title, children}) => (
  <Viewarea size="narrow">
    <Title center>{title}</Title>
    <Text center hero>
      {children}
    </Text>
  </Viewarea>
)

FailSlate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default FailSlate
