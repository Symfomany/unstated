const SimpleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case "SIMPLE_ADD_ACTION":
      return { nb: state.nb + action.payload };
    default:
      return state;
  }
};

export default SimpleReducer;
