import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../popcon.png";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <RouterLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="Your Logo" style={{ height: "60px" }} />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          component={RouterLink}
          to="/about"
          sx={{ color: (theme) => theme.palette.secondary.light }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
