import React from "react"
import {PropTypes} from "react"
import FlatButton from "./FlatButton"
import IconButton from "./IconButton"
import RaisedButton from "./RaisedButton"

import c from "classnames"
import s from "../stylesheet"

class Dropdown extends React.Component {

  constructor() {
    super()
    this.state = {open: false, focused: false}
    this.focus = this.focus.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenuOnEsc = this.closeMenuOnEsc.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.renderHandler = this.renderHandler.bind(this)
  }

  componentWillUnmount() {
    if (this.closeDropdownTimeout) clearInterval(this.closeDropdownTimeout)
  }

  handleClick() {
    this.focus()
    this.toggleMenu()
  }

  focus() {
    this.button.focus()
  }

  toggleMenu() {
    this.setState({open: !this.state.open})
  }

  closeMenuOnEsc(event) {
    if ((event.keyCode === 27) && (this.state.open)) {
      this.setState({open: false})
    }
  }

  handleFocus() {
    this.setState({focused: true})
  }

  handleBlur() {
    this.setState({focused: false})
    this.closeDropdownTimeout = setTimeout(() => {
      if (!this.state.focused) {
        this.setState({open: false})
      }
    }, 150)
  }

  render() {
    const {children, alignMenu} = this.props
    const {open} = this.state

    return (
      <span className={c(
          s.position("relative"),
          s.display("inline-block"),
        )}>

        {this.renderHandler()}

        {(open) ?
          <DropdownMenu
            alignMenu={alignMenu}
            children={children}
            handleFocus={this.handleFocus}
            handleBlur={this.handleBlur}
            closeMenuOnEsc={this.closeMenuOnEsc}
            />
        : null}
      </span>
    )
  }

  renderHandler() {
    const {type, ...passingProps} = this.props
    switch (type) {
      case "flat":
        return (
          <FlatButton
            {...passingProps}
            ref={(ref) => this.button = ref}
            icon="expand"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            />
        )
      case "icon":
        return (
          <IconButton
            {...passingProps}
            ref={(ref) => this.button = ref}
            label="More"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            />
        )
      default:
        return (
          <RaisedButton
            {...passingProps}
            ref={(ref) => this.button = ref}
            icon="expand"
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            />
        )
      }
  }
}

class DropdownMenu extends React.Component {

  componentDidMount() {
    window.addEventListener("keydown", this.props.closeMenuOnEsc)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.closeMenuOnEsc)
  }

  render () {
    const {alignMenu, children, handleFocus, handleBlur} = this.props

    return (
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={c(
          s.position("absolute"),
          s.top("100perc"),
          s.zIndex("5"),
          s.width("240"),
          s.backgroundColor("white"),
          s.paddingAll(["6", "0", "9"]),
          s.overflow("hidden"),
          s.boxShadow("subtle-2"),
          s.borderRadius("3"),
          s.transform("translate-y-3"),
          s.animationName("dropdown-button-open"),
          s.animationDuration("100ms"),
          (alignMenu === "left") && [
            s.left("0"),
            s.transformOrigin("top-left"),
          ],
          (alignMenu === "right") && [
            s.right("0"),
            s.transformOrigin("top-right"),
          ],
        )}>
        {children}
      </div>
    )
  }
}

Dropdown.propTypes = {
  alignMenu: PropTypes.oneOf(["left", "right"]),
  type: PropTypes.oneOf(["button", "icon", "flat"]),
  children: PropTypes.node.isRequired,
}

Dropdown.defaultProps = {
  alignMenu: "left",
  type: "button",
}

export default Dropdown
