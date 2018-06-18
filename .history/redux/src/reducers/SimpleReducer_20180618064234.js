import {
  SIMPLE_ACTION,
  SIMPLE_ADD_ACTION,
  SIMPLE_REMOVE_ACTION
} from "../constants/ActionTypes";

/*
 * initite state
 */
const initialState = {
  nb: 0,
  visible: true
};

const SimpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ADD_ACTION:
      return { ...state, ...{ nb: state.nb + action.payload, visible: true } };
    case SIMPLE_REMOVE_ACTION:
      return { nb: state.nb - action.payload, visible: false };
    default:
      return state;
  }
};

export default SimpleReducer;
