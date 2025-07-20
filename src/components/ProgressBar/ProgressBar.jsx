import React, { useEffect, useState } from "react";

const ProgressBarComponent = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //   width: `${progress}%`,
          //To add animation
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        // add accessibility
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};
const ProgressBar = () => {
  const bars = [1, 3, 5, 10, 20, 40, 50, 80, 90, 100];
  return (
    <div className="progress_container">
      <h1>Progress Bar</h1>
      {bars.map((nos) => (
        <ProgressBarComponent key={nos} progress={nos} />
      ))}
    </div>
  );
};

export default ProgressBar;
