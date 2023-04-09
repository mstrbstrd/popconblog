import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import blogPosts from "./blogPosts";
import theme from "./theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <NavBar />
          <Box sx={{ flexGrow: 1, py: 4 }}>
            <Container maxWidth="md">
              <Routes>
                <Route index element={<Home blogPosts={blogPosts} />} />
                <Route
                  path="/blog/:title"
                  element={<BlogPost blogPosts={blogPosts} />}
                />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
