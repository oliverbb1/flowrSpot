import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { performUpdateUser, performGetCurrentUser } from "../store/user/slice";
import {
  selectEditErrorMessage,
  selectCurrentUser,
  selectModal,
} from "../store/user/selectors";
import "./editProfile.css";
import Modal from "../layout/Modal";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const editError = useSelector(selectEditErrorMessage);
  const currentUser = useSelector(selectCurrentUser);
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    date_of_birth: "",
  });

  useEffect(() => {
    dispatch(performGetCurrentUser());
  }, []);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        password: "",
        password_confirmation: "",
        date_of_birth: "",
      });
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(performUpdateUser(formData));
  };

  const formatErrorMessages = (errorMessages) => {
    if (errorMessages && errorMessages.length > 0) {
      return errorMessages.map((message) => {
        return <p key={message}>{message}</p>;
      });
    } else {
      return null;
    }
  };

  const closeModal = () => {
    navigate("/profile");
  };

  return (
    <div>
      <form className="editForm" onSubmit={handleSubmit}>
        <div className="editFormContainer">
          <h2 className="alignCenter">Edit Profile</h2>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />
          <label htmlFor="date_of_birth">Date of Birth</label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
          />
          <button type="submit">Update Profile</button>
          {!modal && (
            <p className="error-message">{formatErrorMessages(editError)}</p>
          )}
        </div>
      </form>
      {modal && (
        <Modal
          title="Congratulations!"
          content="You have successfully edited your profile”"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EditProfile;
