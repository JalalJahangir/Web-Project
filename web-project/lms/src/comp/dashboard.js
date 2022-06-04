import React from "react";
import { useSelector } from "react-redux";
import { selectView } from "../features/dashboard/dashboardSlice";
import { selectUser } from "../features/user/userSlice";
import "./dashboard.css";
import NavBar from "./navBar";

const Dashboard = () => {
  const user = useSelector(selectUser);
  const view = useSelector(selectView);

  if (view === "dashboard") {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
};

export default Dashboard;
