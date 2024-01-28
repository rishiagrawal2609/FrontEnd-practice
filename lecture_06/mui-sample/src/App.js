import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Avatar,
  Button,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Avatar className="logo" src={logo} />
          <Typography flexGrow={1} variant="h5">
            Title of my page
          </Typography>
          <Button variant="outlined" color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className="center">
      <Button variant="outlined">Hello from MUI</Button>
      <Button
        className="mybutton"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Click me!
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Hello"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      </div>
      <BottomNavigation
      
        className="bottomNav"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
