import React, { useState, useRef, useEffect } from 'react';
import { Card, CardMedia, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const AlbumComponent = ({ tracklist, imageUrl }) => {
  const [slide, setSlide] = useState(false);
  const coverRef = useRef(null);
  const [slideAmount, setSlideAmount] = useState('0px');
  const [coverDimensions, setCoverDimensions] = useState({ width: '0px', height: '0px' });
  const [fontSize, setFontSize] = useState('14px');
  const audioRef = useRef(null);

  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const updateDimensions = () => {
    if (coverRef.current) {
      const { offsetWidth, offsetHeight } = coverRef.current;
      setSlideAmount(`${offsetWidth / 2}px`);
      setCoverDimensions({ width: `${offsetWidth}px`, height: `${offsetHeight}px` });
      
      // Adjust font size based on the number of tracks and card height
      const baseFontSize = Math.min(offsetHeight / (tracklist.length * 2), 14);
      setFontSize(`${baseFontSize}px`);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [tracklist]);

  const handleAlbumClick = () => {
    setSlide(!slide);
  };

  const handleTrackClick = (e, trackNumber, trackName) => {
    e.stopPropagation();
    const sanitizedTrackName = trackName.replace(/\(.*?\)/g, '').trim().toLowerCase().replace(/\s+/g, '');
    const formattedTrackNumber = String(trackNumber).padStart(2, '0');
    const expectedAudioFileName = `/music/${formattedTrackNumber}_${sanitizedTrackName}_FUTLOTM_FINALMASTER.wav`;

    if (audioRef.current) {
      if (audioRef.current.src.endsWith(expectedAudioFileName)) {
        if (audioRef.current.paused) {
          audioRef.current.play().catch(error => {
            console.error("Audio playback failed:", error);
          });
          setCurrentlyPlaying(trackNumber);
        } else {
          audioRef.current.pause();
          setCurrentlyPlaying(null);
        }
      } else {
        audioRef.current.src = expectedAudioFileName;
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
        setCurrentlyPlaying(trackNumber);
      }
    }
  };

  return (
    <div onClick={handleAlbumClick} style={{ position: 'relative', maxWidth: '600px', margin: '20px auto' }}>
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
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {tracklist.map((track, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: index < tracklist.length - 1 ? '1px solid #d1d1d1' : 'none',
              padding: '5px 0',
              fontSize: fontSize,
              cursor: 'pointer'
            }}
            onClick={(e) => handleTrackClick(e, index + 1, track)}
          >
            <IconButton size="small">
              {(currentlyPlaying === index + 1 && !audioRef.current.paused) ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            {index + 1}. {track}
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
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default AlbumComponent;
