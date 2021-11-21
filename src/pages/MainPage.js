import React from "react";
import SideBar from "../components/SideBar";
import GroupBar from "../components/GroupBar";
import HorizontalBar from "../components/HorizontalBar";

const MainPage = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  var nutrition = localStorage.nutrition;
  var waste = localStorage.waste;
  var energy = localStorage.energy;
  var vehicle = localStorage.vehicle;

  return (
    <div>
      {" "}
      <SideBar>
        <div style={{ marginTop: "60px", padding: "10px" }}>
          <h2>Welcome, {auth.firstName}!</h2>
          <h3>
            Please, calculate and save your calculations. Than you will them
            together in final analysis.
          </h3>
          <GroupBar
            nutrition={nutrition}
            waste={waste}
            energy={energy}
            vehicle={vehicle}
          />
        </div>
      </SideBar>
    </div>
  );
};

export default MainPage;
