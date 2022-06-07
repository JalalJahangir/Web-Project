import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import "./dashboard.scss";

const NavBar = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand">
          <h1 className="appheading">Brilliant Pro</h1>
        </a>

        <ul class="navbar-nav ml-auto justify-content-between">
          <li class="nav-item active">
            <Link to={"/"} class="nav-link">
              Dashboard
            </Link>
          </li>
          <li class="nav-item">
            <Link to={"/courses"} class="nav-link">
              Courses
            </Link>
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
              <img
                className="dashboardProfile"
                src={user.profilePic}
                alt=""
              ></img>
              {user.username}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <button class="dropdown-item" onClick={(e) => handleProfile(e)}>
                Profile
              </button>
              <button class="dropdown-item" onClick={(e) => handleLogout(e)}>
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
