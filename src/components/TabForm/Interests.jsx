import React from "react";

const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="football"
            checked={interests.includes("football")}
            onChange={handleChange}
          />
          Football
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="drawing"
            checked={interests.includes("drawing")}
            onChange={handleChange}
          />
          Drawing
        </label>
      </div>
      {errors.interests && <div className="error_msg">{errors.interests}</div>}
    </div>
  );
};

export default Interests;
