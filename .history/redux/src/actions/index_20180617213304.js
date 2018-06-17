const SimpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

const SimpleAddAction = () => dispatch => {
  dispatch({ type: "SIMPLE_ADD_ACTION", payload: 1 });
};

export { SimpleAction, SimpleAddAction };
