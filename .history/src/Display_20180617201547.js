import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";

class Display extends React.Component {
  render() {
    return (
      <Subscribe to={[TodoContainer]}>
        {todoContainer => <p>{todoContainer.getNb()}</p>}
      </Subscribe>
    );
  }
}

export default Display;
