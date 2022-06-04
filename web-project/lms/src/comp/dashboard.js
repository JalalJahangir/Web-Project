import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectView } from "../features/dashboard/dashboardSlice";
import { selectUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import NavBar from "./navBar";

const Dashboard = () => {
  const user = useSelector(selectUser);
  const view = useSelector(selectView);
  const navigate = useNavigate();

  return <h1>DASHBOARD</h1>;
};

export default Dashboard;
