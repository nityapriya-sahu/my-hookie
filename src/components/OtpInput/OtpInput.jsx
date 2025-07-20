import React, { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNT = 5;

const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  //Let's use useRef for automatic next input box focus once filled.
  const refArr = useRef([]);

  //It's for auto focus on first input box
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const onHandleChange = (value, index) => {
    // console.log(value);

    // it checks vaalue is a num or not
    if (isNaN(value)) return;

    //it's for not accept space
    const newValue = value.trim();
    const newArr = [...inputArr];
    //here slice do - only last input add in input & not more than one input
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    //it's for auto focus to the next inputbox
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    // console.log(e);
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1].focus();
    }
  };
  return (
    <div className="vaidate_otp_container">
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            className="otp_input"
            type="text"
            key={index}
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => onHandleChange(e.target.value, index)}
            //for backspace should work properly
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
