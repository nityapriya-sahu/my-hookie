import React from "react";

const ForCallback = () => {
  console.log("Header called");

  return (
    <div>
      <h1>: 🙃Header :</h1>
    </div>
  );
};

//If we add React.memo() then when call from useCallback comp. then it will nor re-render again & again.

//But here one issue is when we pass any props in it, then this trick will not work. So to acheive it we use useCallback()

export default React.memo(ForCallback);
