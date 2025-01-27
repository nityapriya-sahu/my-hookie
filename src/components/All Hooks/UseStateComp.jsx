import React, { useState } from "react";
import "./styles.css";

const UseStateComp = () => {
  const [color, setColor] = useState("Red");
  const [carData, setCarData] = useState({
    carName: "Bugatti",
    color: "White",
    model: "M-Series",
  });
  const [counter, setCounter] = useState(0);

  const handleCarData = () => {
    setCarData({ ...carData, carName: "Mercedes" });
  };
  //   ------------------
  const handleIncrement = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
    // setCounter((prev) => prev + 1);
  };
  return (
    <div className="main1_container">
      <div className="use_state1_container">
        <h1>This is {color} Color!</h1>
        <button onClick={() => setColor("Blue")}>Blue</button>
      </div>
      <hr />
      {/* ------------------------------------- */}
      <div className="use_state1_container">
        <h5 style={{ color: "red" }}>Using one state as Object</h5>
        <h4>This is {carData.carName}</h4>
        <h5>The color is {carData.color}</h5>
        <h5>Model is {carData.model}</h5>
        <button onClick={handleCarData}>Change</button>
      </div>
      <hr />
      {/* ------------------------------------- */}
      <div className="use_state1_container">
        <h1>Counter: {counter}</h1>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default UseStateComp;
