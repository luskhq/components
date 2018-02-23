import React from "react"
import PropTypes from "prop-types"

class FormElement extends React.Component {

  render() {
    const {children, ...props} = this.props
    return (
      <form
        {...props}
        noValidate={true}
        autoComplete="off">
        {children}
      </form>
    )
  }

}

FormElement.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default FormElement
