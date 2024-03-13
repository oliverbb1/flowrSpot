import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { performUserRegister } from "../store/user/slice";
import { useSelector } from "react-redux";
import { selectErrorMessage } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import Modal from "../layout/Modal";
import "./signup.css";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setShowModal(true);
    }
  }, [error]);

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
    // if (
    //   !user.first_name ||
    //   !user.last_name ||
    //   !user.email ||
    //   !user.date_of_birth ||
    //   !user.password
    // ) {
    //   console.log("Please fill in all fields");
    // }
    dispatch(performUserRegister(user));
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
      password: "",
    });
  };
  const closeModal = () => {
    navigate("/login");

    setShowModal(false);
  };

  return (
    <div>
      <div className="positon-r">
        {showModal && !error && (
          <Modal
            title="Congratulations!"
            content="You have successfully signed
          up for FlowrSpot!”"
            onClose={closeModal}
          />
        )}
      </div>
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
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
