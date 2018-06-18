import { combineReducers } from "redux";
import SimpleReducer from "./SimpleReducer";
import VisibleReducer from "./VisibleReducer";

export default combineReducers({
  SimpleReducer,
  VisibleReducer
});
