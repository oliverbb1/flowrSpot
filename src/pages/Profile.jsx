import React, { useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../store/user/selectors";
import { performGetCurrentUser, performUserLogout } from "../store/user/slice";
import profilePicture from "../images/profile.png";
import { IoCloseCircleOutline } from "react-icons/io5";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(performGetCurrentUser());
  }, [currentUser]);
  // console.log(currentUser);

  const logoutHandler = () => {
    dispatch(performUserLogout());
    navigate("/login");
  };
  const closeProfileModal = () => {
    navigate("/");
  };
  const editProfile = () => {
    navigate("/edit-profile");
  };
  return (
    <>
      {currentUser && (
        <div className="userInfo">
          <div className="absolute">
            <IoCloseCircleOutline size={30} onClick={closeProfileModal} />
          </div>
          <div className="userInfoFlex">
            <img src={profilePicture} alt="" />
            <h1>
              {currentUser.first_name} {currentUser.last_name}
            </h1>
          </div>
          <div className="userInfoDown">
            <p>First Name:</p>
            <h1>{currentUser.first_name}</h1>
            <p>Last Name</p>
            <h1>{currentUser.last_name}</h1>
          </div>
          <div className="logoutbtn">
            <button onClick={editProfile}>Edit Profile</button>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
