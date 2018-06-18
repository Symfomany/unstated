import { combineReducers } from "redux";
import SimpleReducer from "./SimpleReducer";
import VisibleReducer from "./VisibleReducer";

const RootReducer = combineReducers({
  SimpleReducer,
  VisibleReducer
});

export default RootReducer;
