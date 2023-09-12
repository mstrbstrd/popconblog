import React, { useState } from 'react';
import { Card, CardMedia } from '@mui/material';

const CoverComponent = ({ imageUrl }) => {
  const [slideLeft, setSlideLeft] = useState(false);

  const handleImageClick = () => {
    setSlideLeft(!slideLeft);
  };

  return (
    <Card
      style={{
        borderRadius: '15px',
        margin: '20px auto',
        maxWidth: '600px',
        transform: slideLeft ? 'translateX(-200px)' : 'none',
        transition: 'transform 0.5s',
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Album cover"
        style={{ borderRadius: '15px' }}
        onClick={handleImageClick}
      />
    </Card>
  );
};

export default CoverComponent;

