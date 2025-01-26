import React, { useReducer, useState } from "react";

const UseReducer = () => {
  //1. We declare a useReducer which takes a reducer func. and initial state i.e {count: 0}
  //2. We can declare this initial state like const initialState = {count:0}
  //3. Then that reducer method returns an array, so we will declare
  //4. This array returns a current state & dispatch method .
  //5. Then we will declare that reducer function above of where we declare useReducer method.
  //6. This reducer function takes two parameter i.e-> current state and action. Which returns an updated state.
  //7. Why state.count? => state is come from useReducer array & in this state we have the object property {count: 0}. so to access the count we write like this.
  //8. Now to update the state we use dispatch method on onClick\
  //9. Now in dispatch function we pass action also. dispatch({ type: "increase" }). Based on the type reducer fn. return the value.
  //10. Now we will add switch case which will work on action.

  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main_container">
      <div className="use_state1_container">
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        <h3>Counter: {state.count}</h3>
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
        <br />
        <input
          type="number"
          value={state.count}
          onChange={(e) =>
            dispatch({ type: "input", payload: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default UseReducer;
