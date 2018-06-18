import { SIMPLE_VISIBLE } from "../constants";

/*
 * initite state
 */
const initialState = {
  visible: true
};
/*
Reducers specify how the application's state changes in response to actions sent to the store.
Remember that actions only describe what happened, 
but don't describe how the application's state changes.
*/
const VisibleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_VISIBLE:
      return { ...state, ...{ visible: !state.visible } };
    default:
      return state;
  }
};

export default VisibleReducer;
