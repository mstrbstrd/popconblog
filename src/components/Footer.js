import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 3 }}>
      <Container maxWidth="md">
        <Typography variant="body1">&copy; 2023 Popular Consulting</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
