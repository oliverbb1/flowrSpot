import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { performUserRegister } from "../store/user/slice";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import { selectErrorMessage } from "../store/user/selectors";
import "./signup.css";

const SignUp = () => {
  const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  // const [message, setMessagee] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formattedUser = {
    //   ...user,
    //   date_of_birth: Date.parse(user.date_of_birth), // Pretvaranje datuma u UNIX timestamp
    // };
    dispatch(performUserRegister(user));
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
      password: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formContainer">
        <h1>Create an Account</h1>
        <div className="nameAndSurname">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your Name"
              value={user.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your Last Name"
              value={user.last_name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="date_of_birth">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            placeholder="Enter Your Date Of Birth"
            // autoComplete="off"
            // max={}
            value={user.date_of_birth}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default SignUp;
