import React from "react"
import {PropTypes} from "react"
import {Pressable} from "./index"
import {SmallIcon} from "./index"

import c from "classnames"
import s from "../stylesheet"

class DropdownOption extends React.Component {

  focus() {
    this.button.focus()
  }

  render() {
    const {label, hint, icon, showCheckbox, checked, ...passingProps} = this.props

    return (
      <Pressable
        {...passingProps}
        ref={(ref) => this.button = ref}
        className={c(
            s.display("block"),
            s.width("100perc"),
            s.paddingAll(["9", "15"]),
            s.textDecoration("none"),
            s.backgroundColor("oyster-background", ":hover"),
            s.backgroundColor("custom-iron", ":active"),
          )}>
        <div className={c(
            s.display("flex"),
          )}>
          <div className={c(
              s.display("flex"),
              s.flexGrow("1"),
              s.alignItems("center"),
            )}>
            {icon &&
              <div className={c(
                  s.flexShrink("0"),
                  s.marginRight("6"),
                )}>
                <SmallIcon name={icon} />
              </div>
            }

            <div className={c(
                s.fontSize("13"),
                s.color("oyster-blue-gray"),
              )}>
              {label}
            </div>

            {(hint) &&
              <div className={c(
                  s.marginLeft("6"),
                  s.fontSize("12"),
                  s.color("custom-heather"),
                )}>
                {hint}
              </div>
            }
          </div>

          {showCheckbox &&
            <div className={c(
                s.backgroundColor(checked ? "oyster-green" : "oyster-background"),
                s.borderColor(checked ? "custom-puerto-rico" : "custom-mischka"),
                s.borderStyle("solid"),
                s.borderWidth("1"),
                s.borderRadius("3"),
              )}>
              <SmallIcon name={checked ? "checked" : "_empty"} theme="light"/>
            </div>
          }

        </div>
      </Pressable>
    )
  }

}

DropdownOption.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  icon: SmallIcon.propTypes.name,
  showCheckbox: PropTypes.bool,
  checked: PropTypes.bool,
}

export default DropdownOption
