import React from "react";

const ChildComp = ({ onBtnClick }) => {
  // ADVANCED
  const messages = [
    "Hello Parent! This is Child 1.",
    "Child says: React is awesome!",
    "Message from Child: Let's keep learning!",
  ];
  return (
    //BASIC
    // <div className="todo_main_container">
    //   <h3>Child Component</h3>
    //   <button onClick={onBtnClick}>Update</button>
    // </div>
    // <button onClick={onBtnClick}>Update</button>

    //------------------------------------
    //ADVANCED
    <div className="todo_main_container">
      <h3>Child Component</h3>
      {messages.map((msg, index) => (
        <button onClick={() => onBtnClick(msg)}>
          Send Message {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ChildComp;
