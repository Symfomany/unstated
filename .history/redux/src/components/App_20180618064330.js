import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAction, SimpleAddAction, SimpleRemoveAction } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);
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
        <button onClick={this.addAction}>Add one</button>
        <button onClick={this.removeAction}>Remove one</button>
        <p>{this.props.nb}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nb: state.SimpleReducer.nb
});
const mapDispatchToProps = dispatch => ({
  SimpleAddAction: () => dispatch(SimpleAddAction()),
  SimpleRemoveAction: () => dispatch(SimpleRemoveAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
