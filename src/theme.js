import { createTheme } from "@mui/material/styles";
import { pink, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[600],
      light: pink[200],
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[200],
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h3: {
      fontWeight: 500,
      letterSpacing: "-0.02em",
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

export default theme;
