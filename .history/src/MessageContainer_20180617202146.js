// BookContainer.js
import { Container } from "unstated";

class MessageContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  getNb() {
    return this.state.messages.length;
  }

  addTodo(message) {
    const newTodo = { content: todo };
    this.setState({ messages: [...this.state.messages, newTodo] });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  markTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return { ...todo, marked: !todo.marked };
        }
      })
    });
  }
}
export default TodoContainer;
