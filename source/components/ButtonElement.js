import React from "react"
import {PropTypes} from "react"
import ReactDOM from "react-dom"

class ButtonElement extends React.Component {

  focus() {
    ReactDOM.findDOMNode(this.button).focus()
  }

  render() {
    const {type, children, ...otherProps} = this.props

    return (
      <button
        {...otherProps}
        ref={(ref) => this.button = ref}
        type={type}
        >
        {children}
      </button>
    )
  }

}

ButtonElement.propTypes = {
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]).isRequired,
  children: PropTypes.node.isRequired,
}

ButtonElement.defaultProps = {
  type: "button",
}

export default ButtonElement
