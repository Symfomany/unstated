import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";

class Todos extends React.Component {
  render() {
    return (
      <ul>
        <Subscribe to={[TodoContainer]}>
          {todoContainer =>
            todoContainer.state.todos.map(todo => (
              <li key={todo.id}>
                <span
                  className={todo.marked ? "marked" : null}
                  onClick={() => todoContainer.markTodo(todo.id)}
                >
                  {todo.description}
                </span>
                <button onClick={() => todoContainer.removeTodo(todo.id)}>
                  X
                </button>
              </li>
            ))
          }
        </Subscribe>
      </ul>
    );
  }
}

export default Todos;
