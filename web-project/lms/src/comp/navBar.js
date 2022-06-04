import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";

import "./dashboard.css";

const NavBar = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <h1 className="appheading">Brilliant Pro</h1>
        </a>

        <ul class="navbar-nav ml-auto justify-content-between">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Courses
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img className="dashboardProfile" src={user.profilePic}></img>
              {user.username}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Profile
              </a>
              <a class="dropdown-item" onClick={(e) => handleLogout(e)}>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
