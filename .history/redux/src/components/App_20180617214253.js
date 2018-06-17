import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAction, SimpleAddAction, SimpleRemoveAction } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.simpleAction = this.simpleAction.bind(this);
    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  simpleAction() {
    this.props.SimpleAction();
  }

  addAction() {
    this.props.SimpleAddAction();
  }

  removeAction() {
    this.props.SimpleRemoveAction();
  }
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.addAction}>Add one</button>
        <button onClick={this.removeAction}>Remove one</button>
        <p>{this.props.SimpleReducer.nb}</p>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  SimpleAction: () => dispatch(SimpleAction()),
  SimpleAddAction: () => dispatch(SimpleAddAction()),
  SimpleRemoveAction: () => dispatch(SimpleRemoveAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
