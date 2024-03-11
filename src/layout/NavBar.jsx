import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>FlowrSpot</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="/flowers">Flowers</a>
          </li>
          <li>
            <a href="#">Latest Sightings</a>
          </li>
          <li>
            <a href="/flowers/favorites">Favorites</a>
          </li>
          <div>
            <a className="loginBtn" href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>New Account</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
