import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";
import Inactive from "./Inactive";
import MessageContainer from "./MessageContainer";

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
            <Subscribe to={[MessageContainer]}>
              {MessageContainer => ( 

                )}
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Display;
