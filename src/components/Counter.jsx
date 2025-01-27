import React, { useReducer, useState } from "react";

const Counter = () => {
  const changeCount = (state, action) => {
    console.log({ state, action }, "state");
    if (action.type === "sub") {
      return state.count > 0 ? { count: state.count - 1 } : state;
    } else if (action.type === "add") {
      return { count: state.count + 1 };
    }
  };
  const [state, dispatch] = useReducer(changeCount, { count: 0 });

  return (
    <div>
      <div className="counter_main_container">
        <button onClick={() => dispatch({ type: "sub" })}>-</button>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: "add" })}>+</button>
      </div>
    </div>
  );
};

export default Counter;
