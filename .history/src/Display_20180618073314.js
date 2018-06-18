import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";
import Inactive from "./Inactive";
import MessageContainer from "./MessageContainer";
import withVisible from "./hoc/withVisible";

class Display extends React.Component {
  render() {
    return (
      <div>
        <Subscribe to={[TodoContainer]}>
          {todoContainer => (
            <div>
              <p>{todoContainer.getNb()}</p>
              <p>
                Nb Inactifs: <Inactive nb={todoContainer.getNbActive()} />
              </p>
              <Subscribe to={[MessageContainer]}>
                {MessageContainer => (
                  <div>
                    <p>Nb messages: {MessageContainer.getNb()}</p>
                    {MessageContainer.state.messages.map(message => (
                      <p>{message.content}</p>
                    ))}
                  </div>
                )}
              </Subscribe>
            </div>
          )}
        </Subscribe>

        <button>Je suis visible</button>
      </div>
    );
  }
}

export default withVisible(Display);
