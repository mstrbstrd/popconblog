import React from 'react';
import { Box, Container } from '@mui/material';
import Hero from './Hero';
import SVGMaskedText from './SVGMaskedText';
import Home from './Home';

import backgroundImage from '../imgs/oilhero.png';

function HomeContainer({ blogPosts }) {
  return (
    <Box>
      <Hero>
      <SVGMaskedText
  text="POPULAR CONSUMPTION" // Duplicate the text for a continuous banner
  imageUrl={backgroundImage}
  fontSize={{ xs: '1rem', sm: '1rem', md: '2rem', lg: '2.5rem' }} // Add lg key with a smaller size
/>
      </Hero>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Home blogPosts={blogPosts} />
      </Container>
    </Box>
  );
}

export default HomeContainer;

