import React from "react";

const Message = ({ visible }) => {
  return (
    <h3 style={{ color: visible ? "blue" : "red" }}>
      J'aime le JS et je suis love de react
    </h3>
  );
};

export default Message;
