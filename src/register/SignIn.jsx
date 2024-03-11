import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { performUserLogin } from "../store/user/slice";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(performUserLogin({ email, password }));
    // console.log(`Email: ${email} Password: ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="formContainer">
          <h1>Welcome Back</h1>
          <div className="inputContainer">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login to your Account</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;