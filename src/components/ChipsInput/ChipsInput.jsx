import React, { useState } from "react";

const ChipsInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleClickEnter = (e) => {
    // logic to add chips
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setChips((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    //to delete something from array we need to first create a copy of that array then delete from copieed array
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  };
  return (
    <div>
      <h1>Chips Input</h1>
      <div className="input_container">
        <input
          type="text"
          className="input_box"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleClickEnter(e)}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {chips.map((item, index) => (
          <div key={index} className="chips_container">
            {item}
            <button
              style={{ padding: "5px", borderRadius: "5px" }}
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
