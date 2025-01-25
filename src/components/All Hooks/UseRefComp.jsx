import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const UseRefComp = () => {
  const [counter, setCounter] = useState(0);

  //   const [count, setCount] = useState(0);
  //This useEffect go to infite loop
  //   useEffect(() => {
  //     setCount(() => count + 1);
  //   });

  const count = useRef(0);
  //   console.log(count.current);
  useEffect(() => {
    // console.log(count.current, "useeffect");

    count.current = count.current + 1;
  });

  //   ------------------------------------------------

  const inputElem = useRef();
  const btnClick = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "red";
  };

  return (
    <div className="main1_container">
      <div className="use_state1_container">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h4>{counter}</h4>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>Count Rendered: {count.current}</h1>
      </div>
      <hr />
      <div className="use_state1_container">
        <input type="text" name="name" id="" ref={inputElem} />
        <button onClick={btnClick}>Click</button>
      </div>
    </div>
  );
};

export default UseRefComp;
