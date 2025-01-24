import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);

  //Without Dependency array
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    // console.log("1st useeffect called");
  });

  //Without Dependency
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    // console.log("2nd useeffect called");
  }, []);

  //Without Dependency array value
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    // console.log("3rd useeffect called");
  }, [count]);
  return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  );
};

export default UseEffectComp;
