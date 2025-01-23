import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        {/* simple routing  */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
