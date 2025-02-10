import React, { useState } from "react";

const ConditionalRender = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="todo_main_container">
      <h2>Conditional Rendering</h2>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <h3>This is the hidden section. Now you can see it!</h3>}
    </div>
  );
};

export default ConditionalRender;
