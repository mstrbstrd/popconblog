import React, { useState } from 'react';
import { Container, Paper, Typography, List, ListItem, Link } from '@mui/material';
import albumcover from '../imgs/futlotm_cover.jpeg';
import AlbumComponent from './AlbumComponent'; // Adjust the path as needed
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function PressKit() {
  const albumCoverUrl = albumcover;
  const [slideLeft, setSlideLeft] = useState(false);
  const tracklist = [
    'Incongruent',
    'Screaming Into The Void',
    'So Hard Baby',
    'Bloom',
    'Spring (Interlude)',
    'Man In The Mirror',
    'Nishi',
    'Call (feat. GRL)',
    'The Dream',
    'You',
    'Vices',
    'Him',
    'Death',
    '...'
  ];

  const handleImageClick = () => {
    setSlideLeft(!slideLeft);
  };

        {/* Styling enhancements */}
const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.03)', // Light gray background
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
  };
  
  const headerStyle = {
    borderBottom: '2px solid #D71A60', // Black bottom border
    paddingBottom: '10px',
    marginBottom: '20px',
    color: '#D71A60'
  };
  
  const bodyStyle = {
    lineHeight: '1.6', // Increase line height for better readability
  };

  return (
    <Container>
      <AlbumComponent tracklist={tracklist} imageUrl={albumCoverUrl} />

{/* Press Release */}
<div style={sectionStyle}>
  <Typography variant="h4" align="center" sx={{ fontFamily: "'Teko', sans-serif", color: '#D71A60', textDecoration: 'underline' }} paragraph>Press Release</Typography>
  <Typography variant="h6" align="justify" style={bodyStyle} paragraph>
    The latest album by MSTRBSTRD. A genre-bending foray into art pop, this album is an exploration of human existence - our fleeting sparks amidst the unending cosmos. Drawing on diverse influences from David Bowie to MGMT, and Ariel Pink to Amen Dunes, MSTRBSTRD offers a unique blend of alternative rock, electronic, pop, experimental indie, and new-wave music. The album wrestles with isolation, hopelessness, struggle, nihilism, existentialism, and absurdism. Amidst this darkness, however, it's a testament to human resilience and the power of art as a form of self-expression.
    In "Fire! Under the Light of the Moon", listeners will encounter the profound melancholy found in works like The Book of Disquiet. From the upbeat yet introspective track "Man In The Mirror," to the multitude of sounds and themes, MSTRBSTRD takes listeners on an auditory journey that pushes the boundaries of contemporary pop music.
    Over three years, MSTRBSTRD, a true independent artist, poured heart and soul into this album. The majority of the work, from lyrics to instrumentation, recording, mixing, and mastering, was done single-handedly. This project is not just music; it's a snapshot of a life lived authentically, amid heartbreak, depression, and ADHD. It stands as an ode to living and loving freely and honestly, to beautiful friendships, and to resilience against all odds.
  </Typography>
</div>

{/* Artist Biography */}
<div style={sectionStyle}>
  <Typography variant="h4" align="center" sx={{ fontFamily: "'Teko', sans-serif", color: '#D71A60', textDecoration: 'underline' }} paragraph>Artist Bio</Typography>
  <Typography variant="h6" align="justify" style={bodyStyle} paragraph>
    Meet MSTRBSTRD (pronounced "Master Bastard"), the artistic pseudonym for Shaedan Hawse, a multidimensional artist who defies easy categorization. Though initially renowned for his emotive acoustic compositions, MSTRBSTRD marks Hawse’s pivot into a more experimental realm. Seamlessly blending indie-electronic, hip-hop, and art-pop elements, he crafts a unique auditory landscape that captivates and intrigues.
    Shaedan Hawse has always viewed music as more than mere entertainment—it’s a form of exploration, an ongoing experiment in sonic storytelling. His eclectic influences, ranging from Aphex Twin and Bon Iver to Tyler, the Creator and David Bowie, shine through in his music, which borrows elements from various genres to construct something wholly unique. The result is MSTRBSTRD: a complex blend of rhythm, melody, and message that invites listeners to dig deeper and explore the layers of sound and emotion.
    As an independent artist, Hawse takes the reins at every stage of MSTRBSTRD’s artistic development. From conceptualization and lyrics to instrumentation, recording, mixing, and mastering, each element passes through his hands. The work is intensely personal, informed by his own experiences with heartbreak, depression, and ADHD. This isn’t just music; it’s a deeply intimate snapshot of a life lived authentically, capturing the ebbs and flows, the highs and lows, and everything in between.
    The immersive quality of MSTRBSTRD’s sound is no accident. With an astute ear for detail, Hawse's compositions are intricate sonic tapestries that engage the listener on multiple levels. Whether it’s the dreamy, lo-fi guitar strains of indie-pop tracks or the adrenaline-pumping dynamism of his more energetic numbers, each song is a world unto itself, full of hidden nuances waiting to be discovered.
    For MSTRBSTRD, the musical experience is a journey without a final destination, an ever-evolving foray into the limitless possibilities of sound. It’s this insatiable curiosity and willingness to take risks that sets MSTRBSTRD apart in the indie music scene. With a fearless approach to artistry and an unwavering commitment to artistic growth, MSTRBSTRD is poised to continue captivating audiences, one unforgettable track at a time.
  </Typography>
</div>


      {/* Music Video Information */}
      <Typography style={{ color: '#D71A60'}} sx={{ fontFamily: "'Teko', sans-serif", color: '#D71A60', textDecoration: 'underline' }} variant="h2" align="center" paragraph>Music Videos</Typography>
<div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto' }}>
    <iframe 
        width="100%" 
        height="500" 
        src="https://www.youtube.com/embed/T-PdrF6qnBY?si=mvbktuhFuFb1PEE1" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ margin: '20px 0' }}>
    </iframe>
    <iframe 
        width="100%" 
        height="500" 
        src="https://www.youtube.com/embed/BPIuubkp33Q?si=CZS1nieMJtO2tNBE" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ margin: '20px 0' }}>
    </iframe>
    <iframe 
        width="100%" 
        height="500" 
        src="https://www.youtube.com/embed/5gphi-A5BBA?si=xfAA9AOPDjNxEfhd" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ margin: '20px 0' }}>
    </iframe>
    <iframe 
        width="100%" 
        height="500" 
        src="https://www.youtube.com/embed/pvfj-O1X-28?si=3KTJqu-APOD9oLXy" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ margin: '20px 0' }}>
    </iframe>
</div>

      {/* Contact Information */}
{/* Social Media */}
<div style={{ marginTop: '40px', padding: '20px', background: '#f5f5f5', borderRadius: '15px' }}>
    <Typography variant="h3" align="center" paragraph sx={{ fontFamily: "'Teko', sans-serif", color: '#D71A60', textDecoration: 'underline' }} style={{ marginBottom: '20px', fontWeight: 'bold', color: '#D71A60' }}>
        Follow MSTRBSTRD
    </Typography>
    <Typography variant="h6" align="center" paragraph style={{ marginBottom: '30px', color: '#666' }}>
        Stay updated with the latest music, events, and more.
    </Typography>
    <div style={{ textAlign: 'center' }}>
        <Link href="https://open.spotify.com/artist/26vC6CchkXS9MfrrWktxX0?si=VEDKePxxRTadTA6RBW7kMg" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <img src="/spotify-icon.svg" alt="Spotify" width="50" />
        </Link>
        <Link href="https://music.apple.com/ca/artist/mstrbstrd/1531256103" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <img src="/apple-music-icon.svg" alt="Apple Music" width="50" />
        </Link>
        <Link href="https://instagram.com/mstrbstrd" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <InstagramIcon fontSize="large" style={{ color: '#C13584', fontSize: '50px' }} />
        </Link>
        <Link href="https://twitter.com/mstrbstrdd" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
        <img src="/xlogo.svg" alt="X" width="45" />
        </Link>
    </div>
    <Typography variant="h5" align="center" style={{ marginTop: '40px', color: '#555', fontWeight: 'bold' }}>
    For inquiries: <Link href="mailto:shae@mstrbstrd.com" style={{ textDecoration: 'underline', color: '#D71A60' }}>shae@mstrbstrd.com</Link>
</Typography>
</div>
    </Container>
  );
}

export default PressKit;

