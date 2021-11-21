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
import Snackbar from "@mui/material/Snackbar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
const LifeStyle = () => {
  const [consumption, setConsumption] = React.useState(0);
  const [kcal, setKcal] = React.useState(0);
  const [trash, setTrash] = React.useState(0);
  const [_trash, _setTrash] = React.useState(0);
  const [energy, setEnergy] = React.useState(0);
  const [_energy, _setEnergy] = React.useState(0);
  const [vehicle, setVehicle] = React.useState(0);
  const [_vehicle, _setVehicle] = React.useState(0);
  const [liter, setLiter] = React.useState(0);

  const [fuel, setFuel] = React.useState(0);

  const [result, setResult] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setConsumption(event.target.value);
  };

  const handleChangeFuel = (event) => {
    setFuel(event.target.value);
  };
  function calculate() {
    let _result = (consumption / 2000) * kcal;
    setResult(_result.toFixed(2));
  }

  function calculateWaste() {
    let _trash = trash * 1.19;
    _setTrash(_trash.toFixed(2));
  }
  function calculateEnergy() {
    let _energy = energy * 0.4 * 365;
    _setEnergy(_energy.toFixed(2));
  }
  function calculateVehicle() {
    let _vehicle = vehicle;
    let __vehicle = (fuel / liter) * _vehicle;
    _setVehicle(__vehicle.toFixed(2));
  }
  function saveNutrition() {
    localStorage.setItem("nutrition", result);
    setOpen(true);
  }
  function saveTrash() {
    localStorage.setItem("waste", _trash);
    setOpen(true);
  }
  function saveEnergy() {
    localStorage.setItem("energy", _energy);
    setOpen(true);
  }
  function saveVehicle() {
    localStorage.setItem("vehicle", _vehicle);
    setOpen(true);
  }

  return (
    <div>
      <SideBar>
        <div style={{ marginTop: "60px", padding: "10px" }}>
          <h2>Living</h2>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Saved"
          />
          <div className="nutrition-main-container">
            <h3>Nutrition</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Amount of Kcal per day"
                id="outlined-start-adornment"
                value={kcal}
                onChange={(e) => setKcal(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kcal</InputAdornment>
                  ),
                }}
              />
              <Box sx={{ minWidth: 240 }}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Type of consumption
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={consumption}
                    label="Consumption"
                    onChange={handleChange}
                  >
                    <MenuItem value={2.89}>Vegans</MenuItem>
                    <MenuItem value={3.81}>Vegeterians</MenuItem>
                    <MenuItem value={3.91}>Fish-eaters</MenuItem>
                    <MenuItem value={4.67}>
                      Low meat-eaters(~50g / day)
                    </MenuItem>
                    <MenuItem value={5.63}>
                      Medium meat-eaters(50-99 g/day)
                    </MenuItem>
                    <MenuItem value={7.19}>High meat-eaters(100g/day)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button variant="outlined" onClick={calculate}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip label={`${result + " CO2"}`} variant="outlined" />
              </Stack>
              <Button variant="outlined" onClick={saveNutrition}>
                Save
              </Button>
            </div>
            <div>
              <VerticalBar data={result} _label="Kg CO2/day" />
              <div>
                <span>Tips</span>
              </div>
            </div>
          </div>
          <br />

          <div className="nutrition-main-container">
            <h3>Waste(trash)</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Kg of trash per year"
                id="outlined-start-adornment"
                value={trash}
                onChange={(e) => setTrash(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  ),
                }}
              />

              <Button variant="outlined" onClick={calculateWaste}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip label={`${_trash + " CO2"}`} variant="outlined" />
              </Stack>
              <Button variant="outlined" onClick={saveTrash}>
                Save
              </Button>
            </div>
            <div>
              <VerticalBar data={_trash} _label=" Kg CO2/year" />
              <div>
                <span>Tips</span>
              </div>
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Energy Consumption</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Energy consumption per year"
                id="outlined-start-adornment"
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kWh</InputAdornment>
                  ),
                }}
              />

              <Button variant="outlined" onClick={calculateEnergy}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip label={`${_energy + "CO2"}`} variant="outlined" />
              </Stack>
              <Button variant="outlined" onClick={saveEnergy}>
                Save
              </Button>
            </div>
            <div>
              <VerticalBar data={_energy} _label=" Kg CO2/year" />
              <div>
                <span>Tips</span>
              </div>
            </div>
          </div>
          <br />
          <div className="nutrition-main-container">
            <h3>Vehicle</h3>
            <div className="lifestyle-main-container">
              <TextField
                label="Avarage mileage per day"
                id="outlined-start-adornment"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">km</InputAdornment>
                  ),
                }}
              />
              <Box sx={{ minWidth: 240 }}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Type of fuel
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fuel}
                    label="Consumption"
                    onChange={handleChangeFuel}
                  >
                    <MenuItem value={1.95}>Gasoline</MenuItem>
                    <MenuItem value={2.24}>Diesel</MenuItem>
                    <MenuItem value={1.69}>Natural-gas</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                label="Consumption of vehicle liters per km"
                id="outlined-start-adornment"
                value={liter}
                onChange={(e) => setLiter(e.target.value)}
                sx={{ m: 1, width: "25ch" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">l/km</InputAdornment>
                  ),
                }}
              />
              <Button variant="outlined" onClick={calculateVehicle}>
                Calculate
              </Button>
              <Stack direction="row" spacing={1}>
                <Chip label={`${_vehicle + " CO2"}`} variant="outlined" />
              </Stack>
              <Button variant="outlined" onClick={saveVehicle}>
                Save
              </Button>
            </div>
            <div>
              <VerticalBar data={_vehicle} _label="Kg CO2/day" />
              <div>
                <span>Tips</span>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default LifeStyle;
