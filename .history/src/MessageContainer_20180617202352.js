// BookContainer.js
import { Container } from "unstated";

class MessageContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.addMess = this.addMess.bind(this);
  }

  getNb() {
    return this.state.messages.length;
  }

  addMess(message) {
    const newMess = { content: message };
    this.setState({ messages: [...this.state.messages, newMess] });
  }
}
export default MessageContainer;
