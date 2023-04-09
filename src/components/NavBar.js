import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { img } from "react";
import logo from "../popcon.png";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="My Blog" style={{ height: "40px" }} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
