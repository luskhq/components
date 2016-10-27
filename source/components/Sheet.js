import React from "react"
import {PropTypes} from "react"

import {Cushion} from "./index"
import {Card} from "./index"
import {Group} from "./index"

const Sheet = ({children}) => (
  <Group>
    <Card>
      <Cushion>
        {children}
      </Cushion>
    </Card>
  </Group>
)

Sheet.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sheet
