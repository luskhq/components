import React from "react"
import {PropTypes} from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"

import ButtonElement from "./ButtonElement"

class Pressable extends React.Component {

  focus() {
    ReactDOM.findDOMNode(this.pressable).focus()
  }

  render() {
    const {children, ...props} = this.props

    let Element
    if (props.href) Element = "a"
    else if (props.to) Element = Link
    else Element = ButtonElement

    return (
      <Element {...props} ref={(ref) => this.pressable = ref}>
        {children}
      </Element>
    )
  }
}

Pressable.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Pressable
