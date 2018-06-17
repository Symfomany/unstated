import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";
import MessageContainer from "./MessageContainer";

/**
 *
 */
class AddTodo extends Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  handleClick(addTodo, addMess) {
    if (this.inputRef.current.value) {
      addMess(this.inputRef.current.value);
      addTodo(this.inputRef.current.value);
      this.inputRef.current.value = "";
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="your new todo" ref={this.inputRef} />

        <Subscribe to={[TodoContainer, MessageContainer]}>
          {(todoContainer, messageContainer) => (
            <button
              onClick={() =>
                this.handleClick(
                  todoContainer.addTodo,
                  messageContainer.addMess
                )
              }
            >
              Ajouter la todo
            </button>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default AddTodo;
