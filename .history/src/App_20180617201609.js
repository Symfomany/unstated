import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "unstated";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Display from "./Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <AddTodo />
          <Todos />
          <Display />
        </Provider>
      </div>
    );
  }
}

export default App;
