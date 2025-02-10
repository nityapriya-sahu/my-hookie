import React from "react";

const Profile = ({ data, setData, errors }) => {
  //   console.log(data);
  const { name, email, age } = data;

  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile_container">
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter your Name..."
        value={name}
        onChange={(e) => handleChange(e, "name")}
      />
      {errors.name && <div className="error_msg">{errors.name}</div>}
      <label>Email: </label>
      <input
        type="email"
        placeholder="Enter your Email..."
        value={email}
        onChange={(e) => handleChange(e, "email")}
      />
      {errors.email && <div className="error_msg">{errors.email}</div>}

      <label>Age: </label>
      <input
        type="number"
        placeholder="Enter your Age..."
        value={age}
        onChange={(e) => handleChange(e, "age")}
      />
      {errors.age && <div className="error_msg">{errors.age}</div>}
    </div>
  );
};

export default Profile;
