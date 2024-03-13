import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { performUserLogin } from "../store/user/slice";
import { selectErrorMessage } from "../store/user/selectors";

const SignIn = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorMessage);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(performUserLogin({ email, password }));

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
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
