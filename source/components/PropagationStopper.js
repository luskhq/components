import React from "react";
import PropTypes from "prop-types";

class PropagationStopper extends React.Component {
  stopPropagation(event) {
    event.stopPropagation();
  }

  render() {
    const { children, ...passingProps } = this.props;

    return (
      <div
        {...passingProps}
        onClick={this.stopPropagation}
        onKeyUp={this.stopPropagation}
        onKeyDown={this.stopPropagation}
        onKeyPress={this.stopPropagation}>
        {children}
      </div>
    );
  }
}

PropagationStopper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PropagationStopper;
