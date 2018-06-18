import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p>
        Le nombre est : <b>{this.props.nb}</b>
      </p>
    );
  }
}

export default Display;
