// UserContainer.js
import { Container } from "unstated";

class UserContainer extends Container {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.add = this.add.bind(this);
  }

  add(user) {
    const user = { id: this.id++, user: user };
    this.setState({
      users: [...this.state.users, user]
    });
  }
}
export default UserContainer;
