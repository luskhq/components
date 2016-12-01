import React from "react"
import {PropTypes} from "react"

import Card from "./Card"
import Viewarea from "./Viewarea"
import Cushion from "./Cushion"
import Group from "./Group"
import Logo from "./Logo"

const NarrowLayout = ({children}) => (
  <Viewarea size="narrow">
    <Card theme="raised">
      <Cushion theme="wide">
        <Group spacing="medium">
          <Logo />
        </Group>
        {children}
      </Cushion>
    </Card>
  </Viewarea>
)

NarrowLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NarrowLayout
