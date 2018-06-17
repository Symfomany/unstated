import React, { Component } from "react";
import { connect } from "react-redux";
import { SimpleAction } from "./actions/SimpleAction";

class App extends Component {
  render() {
    return (
      <div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
