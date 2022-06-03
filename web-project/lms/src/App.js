import "./App.css";
import React from "react";
import LoginRegister from "../src/comp/loginRegister.js";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/user/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="App">{user ? <h1>Logged in</h1> : <LoginRegister />}</div>
  );
};

export default App;
