import React, { useState } from "react";
import Modal from "./Modal";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="counter_main_container">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <h2>Other Content</h2>
    </>
  );
};

export default ModalDemo;
