import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Setting from "./Setting";

const TabForm = () => {
  //Keep the data on central place which is this tab. it helps to easily maintain data.
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    interests: ["coding", "football", "drawing"],
    theme: "dark",
  });

  //Handle errors
  const [errors, setErrors] = useState({});
  //creatre a state who is track which tab is active now.
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interests";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleBackClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmitClick = () => {
    //Make API call
    console.log(data, "Data Saved");
  };
  return (
    <div>
      <div className="tab_container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`each_tab ${activeTab === index ? "active_tab" : ""}`}
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab_body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="tab_button_container">
        {activeTab > 0 && (
          <button className="tab_btn" onClick={handleBackClick}>
            Back
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="tab_btn" onClick={handleNextClick}>
            Next
          </button>
        )}
        <button className="tab_btn" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TabForm;
