import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { performUserLogin } from "../store/user/slice";
import { selectErrorMessage, selectUser } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import Modal from "../layout/Modal";

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const error = useSelector(selectErrorMessage);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user && user !== null) {
      setShowModal(true);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(performUserLogin({ email, password }));

    setEmail("");
    setPassword("");
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };
  const handleConfirm = () => {
    navigate("/profile");
  };
  return (
    <div>
      <div className="positon-r">
        {showModal && (
          <Modal
            title="Congratulations!"
            content="You have successfully logged
            into FlowrSpot!"
            onClose={handleClose}
            onConfirm={handleConfirm}
          />
        )}
      </div>
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
