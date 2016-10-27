import React from "react"
import {PropTypes} from "react"

import {Card} from "./index"
import {Viewarea} from "./index"
import {Cushion} from "./index"
import {Group} from "./index"
import {Logo} from "./index"

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
