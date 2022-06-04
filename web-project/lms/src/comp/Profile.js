import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = user.dob.toLocaleDateString("en-US", DATE_OPTIONS);

  return (
    <div class="mx-auto" style={{ width: "460px", marginTop: "10px" }}>
      <div class="card">
        <h1 className="heading">Profile</h1>
        <img className="userProfilePic" src={user.profilePic} alt=""></img>
        <h3 className="profileEntry">User Name: {user.username}</h3>
        <h3 className="profileEntry">Email: {user.email}</h3>
        <h3 className="profileEntry">Phone: {user.phone}</h3>
        <h3 className="profileEntry">Address: {user.address}</h3>
        <h3 className="profileEntry">Date of Birth: {date}</h3>
      </div>
    </div>
  );
};

export default Profile;
