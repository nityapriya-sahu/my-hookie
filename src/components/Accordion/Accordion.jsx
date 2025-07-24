import React, { useState } from "react";
import jsonData from "./data.json";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <h1>Accordion</h1>
      <div className="acc_container">
        {jsonData.map((item, index) => (
          <div key={index} className="container">
            <div className="title_text" onClick={() => handleToggle(index)}>
              {item.title}
              {openIndex === index ? (
                <span style={{ float: "right" }}>&#8595;</span>
              ) : (
                <span style={{ float: "right" }}>&#8593;</span>
              )}
            </div>
            {openIndex === index && (
              <div className="msg_text">{item.message}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
