import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import BlogPost from "./components/BlogPost";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import getBlogPosts from "./blogPosts";
import About from "./components/AboutMe.js";
import PressKit from "./components/PressKit.js";

import theme from "./theme";
import "./index.css";
import HomeContainer from "./components/HomeContainer";
import PressKitContainer from "./components/PressKitContainer";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then((posts) => setBlogPosts(posts));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
            position: 'relative',
            zIndex: 0,
          }}
        >
          <NavBar />
          <Box sx={{ flexGrow: 1, py: 4 }}>
            <Routes>
              <Route
                path="/"
                element={<HomeContainer blogPosts={blogPosts} />}
                index
              />
              <Route
                path="/blog/:title"
                element={<BlogPost blogPosts={blogPosts} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/press-kit" element={<PressKitContainer />} /> {/* Updated line */}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

