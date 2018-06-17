// BookContainer.js
import { Container } from "unstated";

class TodoContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Blabla",
          marked: false
        },
        {
          id: 2,
          description: "Test",
          marked: false
        }
      ]
    };
    this.id = 3;
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
  }

  getNb() {
    return this.state.todos.length;
  }
  getNbActive() {
    return this.state.todos.filter(elt => elt.marked === false).length;
  }
  addTodo(todo) {
    const newTodo = { id: this.id++, marked: false, description: todo };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
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
