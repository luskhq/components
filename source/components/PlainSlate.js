import React from "react"
import {PropTypes} from "react"

import {Viewarea} from "./index"
import {Text} from "./index"

const PlainSlate = ({children}) => (
  <Viewarea size="narrow">
    <Text center>
      {children}
    </Text>
  </Viewarea>
)

PlainSlate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PlainSlate
