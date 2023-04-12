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
          text="POPULAR CONSUMPTION POPULAR CONSUMPTION" // Duplicate the text for a continuous banner
          imageUrl={backgroundImage}
          fontSize={{ xs: '2rem', sm: '2rem', md: '1rem' }}
        />
      </Hero>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Home blogPosts={blogPosts} />
      </Container>
    </Box>
  );
}

export default HomeContainer;

