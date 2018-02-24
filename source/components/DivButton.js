import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class DivButton extends React.Component {
  focus() {
    ReactDOM.findDOMNode(this.button).focus();
  }

  render() {
    const {
      children,
      onClick,
      onKeyDown,
      onKeyUp,
      disabled,
      ...passingProps
    } = this.props;

    return (
      <div
        {...passingProps}
        ref={ref => this.button = ref}
        role="button"
        aria-disabled={disabled}
        tabIndex={!disabled ? "0" : null}
        onClick={event => {
          if (!disabled && onClick) onClick();
          event.stopPropagation();
        }}
        onKeyDown={event => {
          if (onKeyDown) onKeyDown();

          if (event.keyCode === 32) {
            event.preventDefault();
          }

          if (event.keyCode === 13) {
            if (!disabled && onClick) onClick();
            event.stopPropagation();
          }
        }}
        onKeyUp={event => {
          if (onKeyUp) onKeyUp();

          if (event.keyCode === 32) {
            if (!disabled && onClick) onClick();
            event.stopPropagation();
          }
        }}>
        {children}
      </div>
    );
  }
}

DivButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export default DivButton;
