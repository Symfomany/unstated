import React, { Component } from "react";
import { Subscribe } from "unstated";
import TodoContainer from "./TodoContainer";

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

  handleClick(addTodo) {
    if (this.inputRef.current.value) {
      addTodo(this.inputRef.current.value);
      this.inputRef.current.value = "";
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="your new todo" ref={this.inputRef} />

        <Subscribe to={[TodoContainer]}>
          {todoContainer => (
            <button onClick={() => this.handleClick(todoContainer.addTodo)}>
              Ajouter la todo
            </button>
          )}
        </Subscribe>
      </div>
    );
  }
}

export default AddTodo;
