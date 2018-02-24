import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";
import Pressable from "./Pressable";

import c from "classnames";
import s from "../stylesheet";

class IconButton extends React.Component {
  componentDidMount() {
    if (this.props.autofocus) {
      this.focus();
    }
  }

  focus() {
    this.button.focus();
  }

  render() {
    const {
      disabled,
      pending,
      icon,
      theme,
      label,
      ...passingProps
    } = this.props;

    return (
      <Pressable
        {...passingProps}
        ref={ref => this.button = ref}
        title={label}
        aria-label={label}
        disabled={disabled || pending}
        className={c(
          s.display("block"),
          s.backgroundColor("transparent"),
          s.backgroundColor("black-alpha-5", ":hover"),
          s.backgroundColor("black-alpha-15", ":active"),
          s.backgroundColor(pending && "black-alpha-15"),
          s.boxShadow("none"),
          s.borderRadius("50perc"),
          s.opacity(disabled && "50perc"),
          s.transition("background"),
        )}>
        <div
          className={c(
            s.display("flex"),
            s.alignItems("center"),
            s.justifyContent("center"),
            s.width("42"),
            s.height("42"),
          )}>
          <Icon name={icon} theme={theme} />
        </div>
      </Pressable>
    );
  }
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: Icon.propTypes.name,
  theme: Icon.propTypes.theme,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  className: PropTypes.string,
};

export default IconButton;
