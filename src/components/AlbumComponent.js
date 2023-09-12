import React, { useState, useRef, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';

const AlbumComponent = ({ tracklist, imageUrl }) => {
  const [slide, setSlide] = useState(false);
  const coverRef = useRef(null);
  const [slideAmount, setSlideAmount] = useState('0px');
  const [coverDimensions, setCoverDimensions] = useState({ width: '0px', height: '0px' });
  const [fontSize, setFontSize] = useState('14px'); // Default font size

  const updateDimensions = () => {
    if (coverRef.current) {
      const { offsetWidth, offsetHeight } = coverRef.current;
      setSlideAmount(`${offsetWidth / 2}px`);
      setCoverDimensions({ width: `${offsetWidth}px`, height: `${offsetHeight}px` });

      // Calculating font size and spacing dynamically
      const baseFontSize = 14; // You can adjust this value as needed
      const calculatedFontSize = Math.min((offsetHeight - 10) / tracklist.length, baseFontSize);
      setFontSize(`${calculatedFontSize}px`);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [tracklist.length]);

  const handleAlbumClick = () => {
    setSlide(!slide);
  };

  return (
    <div onClick={handleAlbumClick} style={{ position: 'relative', maxWidth: '600px', margin: '20px auto'}}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: slide ? slideAmount : '0px',
          zIndex: 1,
          borderRadius: '15px',
          backgroundColor: 'white',
          padding: '10px',
          width: coverDimensions.width,
          height: coverDimensions.height,
          transition: 'left 0.5s',
          overflowY: 'auto', // Enable scrolling
        }}
      >
        {tracklist.map((track, index) => (
          <div key={index} style={{
            borderBottom: index < tracklist.length - 1 ? '1px solid #d1d1d1' : 'none',
            padding: '10px 0',
            fontSize: fontSize, // Dynamic font size
          }}>
            {index + 1}. {track} {/* Adding track numbers */}
          </div>
        ))}
      </div>
      <Card
        ref={coverRef}
        style={{
          position: 'relative',
          zIndex: 2,
          left: slide ? `-${slideAmount}` : '0px',
          transition: 'left 0.5s',
          borderRadius: '15px',
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt="Album cover"
          style={{ borderRadius: '15px' }}
        />
      </Card>
    </div>
  );
};

export default AlbumComponent;


