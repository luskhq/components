import React from "react"

import RaisedButton from "./RaisedButton"

class SubmitButton extends React.Component {

  focus() {
    this.button.focus()
  }

  render() {
    return (
      <RaisedButton
        {...this.props}
        ref={(ref) => this.button = ref}
        type="submit" />
    )
  }

}

SubmitButton.defaultProps = {
  theme: "create",
}

export default SubmitButton
