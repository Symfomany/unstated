import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

export default function configureStore(initialState = initialState) {
  // Note: A redux application needs only one store.

  return createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  ); // Debug in chrome
}
