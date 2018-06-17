import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store";
import { Provider } from "react-redux";

/*
This is handled using the Provider React binding from react-redux. To make the store available to every component in the app, it makes sense to call this binding in the app’s entry point, in this case, index.js . Provider takes store and children as props. Calling configureStore() method from src/store.js creates the redux store, which is passed as props to Provider.
*/
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
