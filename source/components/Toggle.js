import React from "react"
import PropTypes from "prop-types"

import Pressable from "./Pressable"
import Icon from "./Icon"

import c from "classnames"
import s from "../stylesheet"
import {pick} from "../stylesheet/utils"

class Toggle extends React.Component {

  componentDidMount() {
    if (this.props.autofocus) {
      this.focus()
    }
  }

  focus() {
    this.button.focus()
  }

  render() {
    const {active, label, theme, icon, ...passingProps} = this.props

    return (
      <Pressable
        {...passingProps}
        ref={(ref) => this.button = ref}
        aria-pressed={active}
        className={c(
          s.display("inline-block"),
          s.textDecoration("none"),
          s.borderRadius("1px"),
          s.transition("background-shadow"),
          active
            ? pick(theme, {
                "regular": [
                  s.backgroundColor("black-alpha-7"),
                  s.boxShadow("inset-subtle"),
                ],
                "light": [
                  s.backgroundColor("black-alpha-15"),
                  s.boxShadow("inset-subtle-2"),
                ],
              })
            : pick(theme, {
                "regular": [
                  s.backgroundColor("black-alpha-5", ":hover"),
                  s.backgroundColor("black-alpha-7", ":active"),
                  s.boxShadow("inset-subtle", ":active"),
                ],
                "light": [
                  s.backgroundColor("black-alpha-10", ":hover"),
                  s.backgroundColor("black-alpha-15", ":active"),
                  s.boxShadow("inset-subtle-2", ":active"),
                ],
              })
        )}>
        <div className={c(
            s.display("flex"),
            s.alignItems("center"),
            s.height("36"),
            s.paddingAll(["0", "12"]),
          )}>
          <div className={c(
              s.marginRight("6", "@small"),
            )}>
            <Icon name={icon} theme={theme} />
          </div>
          <div className={c(
              s.display("none"),
              s.display("initial", "@small"),
              s.fontWeight("600"),
              s.lineHeight("22"),
              s.textTransform("uppercase"),
              pick(theme, {
                "regular": s.color("white"),
                "light": s.color("custom-hoki"),
              }),
            )}>
            {label}
          </div>
        </div>
      </Pressable>
    )
  }

}

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  autofocus: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark"]),
  icon: Icon.propTypes.name,
}

export default Toggle
