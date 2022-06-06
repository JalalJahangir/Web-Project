import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectView } from "../features/dashboard/dashboardSlice";
import { selectUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";
import NavBar from "./navBar";

// sidebar start
class Sidebar extends React.Component
{
  constructor(props)
  {
    super(props);
  };

  render()
  {
    return(
      <span>
        <div class="sidebar" data-color="white" data-active-color="danger">
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="active ">
                <a href="#">
                  <p class="sidet">Dashboard</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="sidet">Courses</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="sidet">Learners</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="sidet">Materials</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p class="sidet">Certificates</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </span>
    )
  };
};
// sidebar end

// card start
class Card extends React.Component
{
  constructor(props)
  {
    super(props);
  };

  render()
  {
    return (
      <div class="card">
        <div class="card__content">
          <h3 class="card__header">{this.props.title}</h3>
          <p class="card__info">{this.props.desc}</p>
        </div>
      </div>
    )
  }
};

class MainContent extends React.Component
{
  constructor(props)
  {
    super(props);
  };

  render()
  {
    return (
      <span>
        <div class="card__container" style={{marginLeft: '260px', display: 'grid'}}>
          <Card title='Courses' desc='10 courses' />
          <Card title='Materials' desc='20 books' />
        </div>
        <div class="card__container" style={{marginLeft: '260px', display: 'grid'}}>
          <Card title='Learners' desc='50 learners' />
          <Card title='Certificates' desc='5 certifications' />
        </div>
      </span>
    )
  };
};
// card end

// main dashboard
const Dashboard = () => {
  const user = useSelector(selectUser);
  const view = useSelector(selectView);
  const navigate = useNavigate();

  return (
  <span>
    <Sidebar/>
    <MainContent/>
  </span>);
};

export default Dashboard;
