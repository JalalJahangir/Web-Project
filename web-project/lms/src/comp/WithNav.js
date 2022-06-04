import React from "react";
import NavBar from "./navBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { Outlet, Navigate } from "react-router-dom";

export default () => {
  const user = useSelector(selectUser);
  if (user === null) {
    return <Navigate to="/login"></Navigate>;
  }
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
