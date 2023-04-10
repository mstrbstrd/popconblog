import React from "react";
import { Typography, CardMedia } from "@mui/material";
import meImage from "../imgs/me2.JPG"; // Import the image from the src/imgs folder

const AboutMe = () => {
  return (
    <div>
      <CardMedia
        component="img"
        alt="Your Name"
        sx={{
          mx: "auto",
          my: 2,
          display: "block",
          maxHeight: "25%", // Set max height to 50% of the original size
          maxWidth: "25%", // Set max width to 50% of the original size
          borderRadius: "50%", // Set the border radius to 50% to make it a circle
        }}
        image={meImage}
      />
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        Shaedan Hawse, also known as MSTRBSTRD (pronounced master bastard), is a
        freelance web developer with his firm Popular Consulting, which helps
        businesses and individuals build their online presence through web
        design, development and integrating machine learning and blockchain
        technology.
      </Typography>
      {/* <br />
      <Typography variant="body1" align="center">
        A founding member of Further Beyond, an art and music collective that
        aims to provide a platform for artists and creatives. Further Beyond is
        a community-driven platform that provides resources and support to
        artists of all kinds, helping them to reach new audiences and achieve
        their creative goals.
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        Also the founder of Popular Consensus, a decentralized, permissionless
        data-repository and polling application built upon blockchain technology
        to enable transparent and inclusive decision-making. Although it is
        still in the early stages of development, Popular Consensus has the
        potential to create a more equitable and just society through its
        innovative polling system and community-driven approach.
      </Typography> */}
      <br />
      <Typography variant="body1" align="center">
        As a generalist with a diverse range of interests and skills, Shae
        brings a unique perspective to everything he does. He is known for his
        creativity, problem-solving skills, and ability to think outside the
        box. Always seeking to learn and grow, both personally and
        professionally, he is committed to using his skills and talents to make
        a positive impact on the world and constantly pushing the boundaries of
        what is possible.
      </Typography>
      <br />
      <Typography variant="body1" align="center">
        * * *
      </Typography>
    </div>
  );
};

export default AboutMe;
