import React from "react";
import SideBar from "../components/SideBar";
import GroupedBar from "../components/GroupBar";
const Housing = () => {
  return (
    <div>
      <SideBar>
        <div style={{ marginTop: "60px" }}>
          <h2>Hello</h2>
          <GroupedBar />
        </div>
      </SideBar>
    </div>
  );
};

export default Housing;
