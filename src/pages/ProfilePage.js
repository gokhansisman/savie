import React from "react";
import SideBar from "../components/SideBar";
const ProfilePage = () => {
  return (
    <div>
      <SideBar>
        <div style={{ marginTop: "60px", padding: "10px" }}>
          <h2>Profile Page</h2>
          <h3>Personal Information</h3>
          <ul>
            <li>Gender</li>
            <li>Age</li>
            <li>Occupation</li>
            <li>Marital Status</li>
          </ul>
        </div>
      </SideBar>
    </div>
  );
};

export default ProfilePage;
