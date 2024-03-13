import React from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { performUserLogout } from "../store/user/slice";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

const NavBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(performUserLogout());
  };

  // const token = localStorage.getItem("accessToken");
  return (
    <div className="navbar">
      <div className="logo">
        <p>FlowrSpot</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Flowers</a>
          </li>
          <li>
            <a href="#">Latest Sightings</a>
          </li>
          {user && (
            <li>
              <a href="/favorite">Favorites</a>
            </li>
          )}

          <div>
            {user ? (
              <a>
                <button onClick={logoutHandler}>Logout</button>
              </a>
            ) : (
              <div>
                <a className="loginBtn" href="/login">
                  <button>Login</button>
                </a>
                <a href="/register">
                  <button>New Account</button>
                </a>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
