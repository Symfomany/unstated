import React from "react";
import withVisible from "./hoc/withVisible";

const Message = ({ visible, handleVisible }) => {
  return (
    <h3 onClick={handleVisible} style={{ color: visible ? "blue" : "red" }}>
      J'aime le JS et je suis love de react
    </h3>
  );
};

export default withVisible(Message);
