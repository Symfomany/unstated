import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState = {}) {
  // Note: A redux application needs only one store.

  return createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk))); // Debug in chrome
}
