import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";
import Inactive from "./Inactive";

class Display extends React.Component {
  render() {
    return (
      <Subscribe to={[TodoContainer]}>
        {todoContainer => (
          <div>
            <p>{todoContainer.getNb()}</p>
            <p>
              Nb Inactifs: <Inactive nb={todoContainer.getNbActive()} />
            </p>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Display;
