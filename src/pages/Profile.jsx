import React, { useEffect } from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../store/user/selectors";
import { performGetCurrentUser } from "../store/user/slice";
import profilePicture from "../images/profile.png";
import { IoCloseCircleOutline } from "react-icons/io5";
const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(performGetCurrentUser());
  }, [currentUser]);

  console.log(currentUser);
  return (
    <>
      {currentUser && (
        <div className="userInfo">
          <div className="absolute">
            <IoCloseCircleOutline size={30} />
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
        </div>
      )}
    </>
  );
};

export default Profile;
