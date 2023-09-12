import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const VideoHeroContainer = styled(Box)(({ theme }) => ({
  height: '50vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden', // Hide video overflow
}));

const BackgroundVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Cover entire container
  zIndex: -1, // Place behind other content
});

function VideoHero({ children, videoUrl }) {
  return (
    <VideoHeroContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      {children}
    </VideoHeroContainer>
  );
}

export default VideoHero;
