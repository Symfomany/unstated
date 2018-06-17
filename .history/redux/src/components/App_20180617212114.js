import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAction } from "../actions/SimpleAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.simpleAction = this.simpleAction.bind(this);
    this.addAction = this.addAction.bind(this);
  }

  simpleAction() {
    this.props.SimpleAction();
  }

  addAction() {
    this.props.SimpleAction();
  }

  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  SimpleAction: () => dispatch(SimpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
