import React from "react"
import {PropTypes} from "react"

import Icon from "./Icon"
import {Pressable} from "./index"

import c from "classnames"
import s from "../stylesheet"
import {pick, apply} from "../stylesheet/utils"

class RaisedButton extends React.Component {

  componentDidMount() {
    if (this.props.autofocus) {
      this.focus()
    }
  }

  focus() {
    this.button.focus()
  }

  render() {
    const {iconPosition, label, theme, disabled, pending, labelPending, size, icon, ...passingProps} = this.props

    return (
      <Pressable
        {...passingProps}
        ref={(ref) => this.button = ref}
        disabled={disabled || pending}
        className={c(
          s.display("inline-block"),
          s.textDecoration("none"),
          s.textTransform("uppercase"),
          s.borderRadius("3"),
          s.transition("background-shadow"),
          pick(size, {
            regular: s.fontSize("13"),
            large: s.fontSize("15"),
            fullwidth: [
              s.width("100perc"),
              s.fontSize("16"),
            ],
          }),
          apply(theme, (theme) => {
            const color = pick(theme, {
              regular: "custom-gull-gray",
              action: "oyster-blue",
              create: "oyster-green",
              danger: "oyster-red",
              light: "white",
            })

            if (disabled) {
              return [
                s.backgroundColor("custom-mischka-2"),
                s.backgroundColor("custom-mischka-2", ":hover"),
                s.boxShadow("none"),
                s.boxShadow("none", ":hover"),
              ]
            }

            if (pending) {
              return [
                s.backgroundColor(`${color}-dark`),
                s.boxShadow("subtle-3"),
              ]
            }

            return [
              s.backgroundColor(color),
              s.backgroundColor(`${color}-light`, ":hover"),
              s.backgroundColor(`${color}-dark`, ":active"),
              s.boxShadow("subtle-3"),
              s.boxShadow("subtle-4", ":hover"),
              s.boxShadow("subtle-3", ":active"),
            ]
          }),
      )}>
        <RaisedButtonInner
          iconPosition={iconPosition}
          label={label}
          theme={theme}
          pending={pending}
          labelPending={labelPending}
          size={size}
          icon={icon}
          />
      </Pressable>
    )
  }

}

class RaisedButtonInner extends React.Component {

  render() {
    const {iconPosition, label, theme, pending, labelPending, size, icon} = this.props

    return (
      <div className={c(
          s.display("flex"),
          s.alignItems("center"),
          s.justifyContent("center"),
          s.flexDirection(iconPosition === "left" && "row-reverse"),
          pick(size, {
            large: [
              s.height("51"),
              s.minWidth("135"),
              s.paddingAll(["0", "24"]),
            ],
            condensed: [
              s.height("36"),
              s.paddingAll(["0", "12"]),
            ],
            fullwidth: [
              s.height("54"),
            ],
            regular: [
              s.height("45"),
              s.minWidth("105"),
              s.paddingAll(["0", "15"]),
            ],
          }),
        )}>
        <div className={c(
          s.color(theme === "light" ? "oyster-blue-gray" : "white"),
          s.fontWeight("600"),
          s.textAlign("center"),
        )}>
          {(pending) ? labelPending : label}
        </div>
        {(icon) &&
          <div className={c(
            s.marginAll(iconPosition === "left" ? ["auto", "9", "auto", "auto"] : ["auto", "auto", "auto", "9"]),
          )}>
            {(theme === "light")
              ? <Icon name={icon} />
              : <Icon name={icon} theme="light" />
            }
          </div>
        }
      </div>
    )
  }

}

RaisedButton.propTypes = {
  autofocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPending: PropTypes.string,
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),
  theme: PropTypes.oneOf([
    "action",
    "create",
    "danger",
    "light",
  ]),
  size: PropTypes.oneOf([
    "large",
    "condensed",
    "fullwidth",
  ]),
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  icon: Icon.propTypes.name,
  iconPosition: PropTypes.oneOf([
    "left",
  ]),
}

export default RaisedButton
