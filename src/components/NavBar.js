import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../popcon.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Your Logo" style={{ height: "60px" }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
