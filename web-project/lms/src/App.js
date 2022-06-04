import "./App.css";
import React from "react";
import LoginRegister from "../src/comp/loginRegister.js";
import Dashboard from "../src/comp/dashboard.js";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/user/userSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./comp/EmptyPage";
import WithoutNav from "./comp/WithoutNav";
import WithNav from "./comp/WithNav";
import Profile from "./comp/Profile";
import Courses from "./comp/Courses";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <Router>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<LoginRegister />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
