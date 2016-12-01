import React from "react"
import {PropTypes} from "react"

import Pressable from "./Pressable"

import c from "classnames"
import s from "../stylesheet"

class TextButton extends React.Component {

  componentDidMount() {
    if (this.props.autofocus) {
      this.focus()
    }
  }

  focus() {
    this.button.focus()
  }

  render() {
    const {disabled, label, theme, ...passingProps} = this.props

    return (
      <Pressable
        {...passingProps}
        ref={(ref) => this.button = ref}
        aria-label={label}
        disabled={disabled}
        className={c(
          s.display("inline-block"),
          s.fontSize("13"),
          s.fontWeight("600"),
          s.textDecoration("none"),
          s.textTransform("uppercase"),
          (theme === "subtle") ? [
            s.color("custom-gull-gray"),
            s.color("custom-gull-gray-light", ":hover"),
            s.color("custom-gull-gray-dark", ":active"),
          ] : [
            s.color("oyster-blue"),
            s.color("oyster-blue-light", ":hover"),
            s.color("oyster-blue-dark", ":active"),
          ],
          s.backgroundColor("transparent"),
          s.boxShadow("none"),
          s.transition("color"),
        )}>
        {label}
      </Pressable>
    )
  }

}

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  theme: PropTypes.oneOf(["subtle"]),
}

export default TextButton
