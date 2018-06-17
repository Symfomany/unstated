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
    const newMess = { content: message };
    this.setState({ messages: [...this.state.messages, newMess] });
  }
}
export default MessageContainer;
