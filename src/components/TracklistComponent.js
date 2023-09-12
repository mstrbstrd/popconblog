import React, { useState } from 'react';
import { Card, Typography } from '@mui/material';

const TracklistComponent = ({ tracklist }) => {
  const [slideRight, setSlideRight] = useState(false);

  const handleTracklistClick = () => {
    setSlideRight(!slideRight);
  };

  return (
    <Card
      style={{
        borderRadius: '15px',
        margin: '20px auto',
        maxWidth: '600px',
        transform: slideRight ? 'translateX(200px)' : 'none',
        transition: 'transform 0.5s',
      }}
      onClick={handleTracklistClick}
    >
      <Typography variant="h4" style={{ padding: '10px' }}>Tracklist</Typography>
      <ul>
        {tracklist.map((track, index) => (
          <li key={index} style={{ padding: '5px' }}>
            {track}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TracklistComponent;
