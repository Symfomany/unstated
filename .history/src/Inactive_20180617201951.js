import React, { Component } from "react";

class Inactive extends React.Component {
  render() {
    return <h3>Nb actifs: {this.props.nb}</h3>;
  }
}

export default Inactive;
