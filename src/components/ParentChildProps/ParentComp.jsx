import React, { useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  // BASIC
  // const [message, setMessage] = useState("Hello from Parent !");
  // const updateMessage = () => {
  //   setMessage("Mesage updated from child !");
  // };

  // ==================================
  // ADVANCED
  const [msg, setMsg] = useState("Waiting for child msg...");

  const handleChildMsg = (childMsg) => {
    setMsg(childMsg);
  };
  return (
    // BASIC
    // <div className="todo_main_container">
    //   <h2>Parent Component</h2>
    //   <p>{message}</p>
    //   <ChildComp onBtnClick={updateMessage} />
    // </div>

    // ---------------------------------------
    // ADVANCED
    <div className="todo_main_container">
      <h2>Parent Component</h2>
      <p>{msg}</p>
      <ChildComp onBtnClick={handleChildMsg} />
    </div>
  );
};

export default ParentComp;
