import {
  SIMPLE_ACTION,
  SIMPLE_ADD_ACTION,
  SIMPLE_REMOVE_ACTION
} from "../constants/ActionTypes";

const SimpleAction = () => dispatch => {
  dispatch({ type: SIMPLE_ACTION, payload: "result_of_simple_action" });
};

const SimpleRemoveAction = () => dispatch => {
  dispatch({ type: SIMPLE_REMOVE_ACTION, payload: 2 });
};
const SimpleAddAction = () => dispatch => {
  dispatch({ type: SIMPLE_ADD_ACTION, payload: 1 });
};

export { SimpleAction, SimpleAddAction };
