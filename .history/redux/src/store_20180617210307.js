import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

export default function configureStore(initialState = {}) {
  // Note: A redux application needs only one store.

  return createStore(RootReducer, applyMiddleware(thunk));
}
