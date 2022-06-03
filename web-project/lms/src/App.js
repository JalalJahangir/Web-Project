import "./App.css";
import React from "react";
import LoginRegister from "../src/comp/loginRegister.js";
import Dashboard from "../src/comp/dashboard.js";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/user/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Dashboard /> : <LoginRegister />}</div>;
};

export default App;
