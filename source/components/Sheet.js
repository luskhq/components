import React from "react"
import PropTypes from "prop-types"

import Cushion from "./Cushion"
import Card from "./Card"
import Group from "./Group"

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
