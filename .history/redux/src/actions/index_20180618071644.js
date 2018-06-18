import {
  SIMPLE_ADD_ACTION,
  SIMPLE_REMOVE_ACTION,
  SIMPLE_VISIBLE
} from "../constants";

/*
Actions are payloads of information that send data from your application to your store. 
They are the only source of information for the store. 
You send them to the store using store.dispatch().
Remember that actions only describe what happened,
but don't describe how the application's state changes.
*/
const SimpleRemoveAction = () => dispatch => {
  dispatch({ type: SIMPLE_REMOVE_ACTION, payload: 2 });
};
const SimpleAddAction = () => dispatch => {
  dispatch({ type: SIMPLE_ADD_ACTION, payload: 1 });
};

const SimpleVisibleAction = () => dispatch => {
  dispatch({ type: SIMPLE_VISIBLE, payload: null });
};

export { SimpleAddAction, SimpleRemoveAction };
