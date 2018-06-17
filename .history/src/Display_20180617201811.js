import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";

class Display extends React.Component {
  render() {
    return (
      <Subscribe to={[TodoContainer]}>
        {todoContainer => (
          <div>
            <p>{todoContainer.getNb()}</p>
            <p>Nb actifs: {todoContainer.getNbActive()}</p>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Display;
