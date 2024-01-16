import React from 'react';
import { Box, Container } from '@mui/material';
import Hero from './Hero';
import SVGMaskedText from './SVGMaskedText';
import PressKit from './PressKit';
import VideoHero from './VideoHero';

import backgroundImage from '../imgs/digifire2.png'; // Update this path to your actual background image

function PressKitContainer() {
  const videoUrl = '../videos/digifire.mp4';
  return (
    <Box>
      <Hero videoUrl={videoUrl}>
        <SVGMaskedText
          text="Fire! Under The Light Of The Moon."
          imageUrl={backgroundImage} // Adjust the font sizes as you need
        />
      </Hero>
      <PressKit />
      {/* <Container maxWidth="md" sx={{ mt: 4 }}>
        <PressKit />
      </Container> */}
    </Box>
  );
}

export default PressKitContainer;


