import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // For Async Operation
import RootReducer from "./reducers"; // Root redcers is the base
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

/*
The Store is the object that brings them together. The store has the following responsibilities:

Holds application state;
Allows access to state via getState();
Allows state to be updated via dispatch(action);
Registers listeners via subscribe(listener);
Handles unregistering of listeners via the function returned by subscribe(listener).
*/
export default function configureStore(initialState = {}) {
  // Note: A redux application needs only one store.

  return createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  ); // Debug in chrome
}
