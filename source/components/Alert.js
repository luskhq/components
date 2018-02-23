import React from "react"
import PropTypes from "prop-types"

import Text from "./Text"
import Group from "./Group"

import c from "classnames"
import s from "../stylesheet"

class Alert extends React.Component {

  getChildContext() {
    return {theme: this.props.theme}
  }

  render() {
    const {theme, children} = this.props

    return (
      <Group>
        <div className={c(
            s.paddingAll(["12", "15", "15"]),
            s.borderRadius("4px"),
            s.backgroundColor((theme === "warning") && "custom-banana-mania"),
            s.backgroundColor((theme === "error") && "custom-beauty-bush"),
          )}>
          {children}
        </div>
      </Group>
    )
  }
}

Alert.childContextTypes = {
  theme: PropTypes.oneOf([
    "warning",
    "error",
  ]),
}

Alert.propTypes = {
  theme: PropTypes.oneOf([
    "warning",
    "error",
  ]),
  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  theme: "warning",
  children: <Text noMargin>There seems to be a connection problem. Please check your internet access and try again.</Text>,
}

export default Alert
