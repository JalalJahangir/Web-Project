import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Dashboard = () => {
  const user = useSelector(selectUser);

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
          <li class="nav-item">
            <a class="nav-link" href="#">
              {user.username}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
