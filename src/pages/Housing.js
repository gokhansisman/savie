import React from "react";
import SideBar from "../components/SideBar";
import VerticalBar from "../components/VerticalBar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import HorizontalBar from "../components/HorizontalBar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
const Housing = () => {
  const [food, setFood] = React.useState(0);
  const [foodInput, setFoodInput] = React.useState(0);

  const [result_food, set_result_food] = React.useState(0);
  const [pharmaceuticals, setPharmaceuticals] = React.useState(0);
  const [result_pharmaceuticals, result_setPharmaceuticals] = React.useState(0);

  const [techDevices, setTechDevices] = React.useState(0);
  const [result_techDevices, result_SettechDevices] = React.useState(0);

  const [furniture_books, set_furniture_books] = React.useState(0);
  const [result_furniture_books, result_set_furniture_books] =
    React.useState(0);

  const [holidaysSport, setholidaysSport] = React.useState(0);
  const [result_holidaysSport, result_set_holidaysSport] = React.useState(0);

  const [kcal, setKcal] = React.useState(0);

  const handleChange = (event) => {
    setFood(event.target.value);
  };

  const calculateFood = () => {
    let _result_food = (foodInput * food) / 1000;
    set_result_food(_result_food.toFixed(2));
  };

  function saveFood() {
    localStorage.setItem("food", result_food);
  }
  const calculatePharmaceuticals = () => {
    let _result_pharmaceuticals = (pharmaceuticals * 2.1) / 1000;
    result_setPharmaceuticals(_result_pharmaceuticals.toFixed(2));
  };
  function savePharmaceuticals() {
    localStorage.setItem("pharmaceuticals", result_pharmaceuticals);
  }
  function saveTechDevices() {
    localStorage.setItem("techDevices", result_techDevices);
  }
  const calculateTechDevices = () => {
    let _result_TechDevices = (techDevices * 1.86) / 1000;
    result_SettechDevices(_result_TechDevices.toFixed(2));
  };
  function saveFurniture_books() {
    localStorage.setItem("furniture_books", result_furniture_books);
  }

  const calculate_furniture_books = () => {
    let _result_furniture_books = (furniture_books * 0.47) / 1000;
    result_set_furniture_books(_result_furniture_books.toFixed(2));
  };
  function saveHolidaysSport() {
    localStorage.setItem("holidays_sport", result_holidaysSport);
  }
  const calculate_result_holidaysSport = () => {
    let _result_holidaysSport = (holidaysSport * 0.56) / 1000;
    result_set_holidaysSport(_result_holidaysSport.toFixed(2));
  };

  return (
    <div>
      <SideBar>
        <div style={{ marginTop: "60px", padding: "10px" }}>
          <h2>Housing</h2>
          <div className="nutrition-main-container">
            <h3>Food & Drink</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Price in Euro per year"
                id="outlined-start-adornment"
                value={foodInput}
                onChange={(e) => setFoodInput(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />
              <Box sx={{ minWidth: 240 }}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Food and Drink
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={food}
                    label="FoodDrink"
                    onChange={handleChange}
                  >
                    <MenuItem value={0.72}>Heavy meat eater</MenuItem>
                    <MenuItem value={0.56}>Medium eater</MenuItem>
                    <MenuItem value={0.47}>Low eater</MenuItem>
                    <MenuItem value={0.39}>Pescatarian</MenuItem>
                    <MenuItem value={0.38}>Vegetarian</MenuItem>
                    <MenuItem value={0.29}>Vegan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button variant="outlined" onClick={calculateFood}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip label={`${result_food + " CO2"}`} variant="outlined" />
              </Stack>
              <Button variant="outlined" onClick={saveFood}>
                Save
              </Button>
            </div>
            <div>
              <VerticalBar data={result_food} _label="Kg CO2/day" />
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Pharmaceuticals</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Price in Euro per year"
                id="outlined-start-adornment"
                value={pharmaceuticals}
                onChange={(e) => setPharmaceuticals(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />

              <Button variant="outlined" onClick={calculatePharmaceuticals}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={`${result_pharmaceuticals + " CO2"}`}
                  variant="outlined"
                />
              </Stack>
              <Button variant="outlined" onClick={savePharmaceuticals}>
                Save
              </Button>
            </div>
            <div>
              <HorizontalBar
                data={result_pharmaceuticals}
                _label="Kg CO2/day"
              />
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Technical devices</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Price in Euro per year"
                id="outlined-start-adornment"
                value={techDevices}
                onChange={(e) => setTechDevices(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />

              <Button variant="outlined" onClick={calculateTechDevices}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={`${result_techDevices + " CO2"}`}
                  variant="outlined"
                />
              </Stack>
              <Button variant="outlined" onClick={saveTechDevices}>
                Save
              </Button>
            </div>
            <div>
              <HorizontalBar data={result_techDevices} _label="Kg CO2/day" />
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Furnutire & Books</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Price in Euro per year"
                id="outlined-start-adornment"
                value={furniture_books}
                onChange={(e) => set_furniture_books(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />

              <Button variant="outlined" onClick={calculate_furniture_books}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={`${result_furniture_books + " CO2"}`}
                  variant="outlined"
                />
              </Stack>
              <Button variant="outlined" onClick={saveFurniture_books}>
                Save
              </Button>
            </div>
            <div>
              <HorizontalBar
                data={result_furniture_books}
                _label="Kg CO2/day"
              />
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Holidays & Sport</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Price in Euro per year"
                id="outlined-start-adornment"
                value={holidaysSport}
                onChange={(e) => setholidaysSport(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />

              <Button
                variant="outlined"
                onClick={calculate_result_holidaysSport}
              >
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip
                  label={`${result_holidaysSport + " CO2"}`}
                  variant="outlined"
                />
              </Stack>
              <Button variant="outlined" onClick={saveHolidaysSport}>
                Save
              </Button>
            </div>
            <div>
              <HorizontalBar data={result_holidaysSport} _label="Kg CO2/day" />
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Housing;
