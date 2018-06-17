import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const initialState = {
  nb: 0
};

export default function configureStore(initialState = {}) {
  // Note: A redux application needs only one store.

  return createStore(
    RootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
