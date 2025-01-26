import React, { useCallback, useState } from "react";
import ForCallback from "./ForCallback";

const USeCallback = () => {
  const [counter, setCounter] = useState(0);

  const newFn = useCallback(() => {
    console.log("new Fn called");
  }, []);
  //if we add counter variable in dependency "[counter]" then it behaves as usual
  return (
    <div className="main_container">
      <ForCallback newFn={newFn} />
      <div className="use_state1_container">
        <button onClick={() => setCounter(counter + 1)}>Count</button>
        <h3>{counter}</h3>
      </div>
    </div>
  );
};

export default USeCallback;
