import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

export default function configureStore(initialState = {}) {
  // Note: A redux application needs only one store.

  return createStore(rootReducer, applyMiddleware(thunk));
}
