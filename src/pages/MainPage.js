import React from "react";
import SideBar from "../components/SideBar";
import GroupBar from "../components/GroupBar";
import GroupBar2 from "../components/GroupBar2";

import HorizontalBar from "../components/HorizontalBar";

const MainPage = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  var nutrition = localStorage.nutrition;
  var waste = localStorage.waste;
  var energy = localStorage.energy;
  var vehicle = localStorage.vehicle;
  var food = localStorage.food;
  var pharmaceuticals = localStorage.pharmaceuticals;
  var techDevices = localStorage.techDevices;
  var furniture_books = localStorage.furniture_books;

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
          <h3 className="tip-header">Weekly Tips!</h3>
          <div className="tip-section">
            The construction of a new house generated 80 tonnes of CO2, but the
            renovation of an existing house emitted only 15 tonnes. The
            difference is more than 5 times.
          </div>
          <div className="tip-section-2">
            Grow your own vegetables. About 13% of personal carbon footprint
            comes from food! Of that, 35% is from transporting the food.
            Ambitious gardeners that use their garden to replace 20% of bought
            food, reduce their carbon footprint by about 150 kg of CO2 per year!
          </div>
          <GroupBar
            nutrition={nutrition}
            waste={waste}
            energy={energy}
            vehicle={vehicle}
          />
          <GroupBar2
            food={food}
            pharmaceuticals={pharmaceuticals}
            techDevices={techDevices}
            furniture_books={furniture_books}
          />
        </div>
      </SideBar>
    </div>
  );
};

export default MainPage;
