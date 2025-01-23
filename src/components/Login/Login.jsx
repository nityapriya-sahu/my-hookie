import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please enter valid credentials");
    } else {
      console.log("login successful", { email, password });
    }
  };
  return (
    <div className="main_container">
      <h1>Login</h1>
      <form action="" className="form_container" onSubmit={handleLogin}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h5>forgot password?</h5>
        <button type="submit">Login</button>
      </form>
      <button>Continue with Google</button>
      {/* <button>Continue with Phone</button> */}
      <h5>
        Don't have an Account? | <Link to={"/signup"}>Sign Up</Link>
      </h5>
    </div>
  );
};

export default Login;
