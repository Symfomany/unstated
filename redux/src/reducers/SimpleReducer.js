import {
  SIMPLE_ADD_ACTION,
  SIMPLE_REMOVE_ACTION,
  SIMPLE_RESET
} from "../constants";

/*
 * initite state
 */
const initialState = {
  nb: 0
};
/*
Reducers specify how the application's state changes in response to actions sent to the store.
Remember that actions only describe what happened, 
but don't describe how the application's state changes.
*/
const SimpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_RESET:
      return { ...state, ...{ nb: 0 } };
    case SIMPLE_ADD_ACTION:
      return { ...state, ...{ nb: state.nb + action.payload } };
    case SIMPLE_REMOVE_ACTION:
      return { ...state, ...{ nb: state.nb - action.payload } };
    default:
      return state;
  }
};

export default SimpleReducer;
