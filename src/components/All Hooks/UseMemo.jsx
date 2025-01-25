import React, { useMemo, useState } from "react";

const USeMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const calculateCube = (num) => {
    console.log("calculation done!");

    return Math.pow(num, 3);
  };

  //   const result = calculateCube(number);

  const result = useMemo(() => calculateCube(number), [number]);

  return (
    <div className="main_container">
      <div className="use_state1_container">
        <input
          type="number"
          name="input"
          id="name"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h3>Cube of the given number is : {result}</h3>
        <button onClick={() => setCounter(counter + 1)}>Check</button>
        <h4>Counter:{counter}</h4>
      </div>
    </div>
  );
};

export default USeMemo;
