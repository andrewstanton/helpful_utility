import React from "react";
import ReactDOM from "react-dom";

export class Portal extends React.Component {
  element = null;

  render() {
    this.element = document.querySelector(this.props.selector);
    if (this.element === undefined || this.element === null) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}
