import React, { useState } from 'react';
import { Container, Card, CardMedia, Typography, Paper, List, ListItem, Link } from '@mui/material';
import albumcover from '../imgs/futlotm_cover.jpeg';
import AlbumComponent from './AlbumComponent'; // Adjust the path as needed


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

  const paperStyle = {
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Translucent background
  };

  const handleImageClick = () => {
    setSlideLeft(!slideLeft);
  };

  return (
    <Container>
      <AlbumComponent tracklist={tracklist} imageUrl={albumCoverUrl} />


      {/* Press Release */}
      <Paper style={paperStyle}>
        <Typography variant="h5" >The latest album by MSTRBSTRD. A genre-bending foray into art pop, this album is an exploration of human existence - our fleeting sparks amidst the unending cosmos. Drawing on diverse influences from David Bowie to MGMT, and Ariel Pink to Amen Dunes, MSTRBSTRD offers a unique blend of alternative rock, electronic, pop, experimental indie, and new-wave music. The album wrestles with isolation, hopelessness, struggle, nihilism, existentialism, and absurdism. Amidst this darkness, however, it's a testament to human resilience and the power of art as a form of self-expression.
In "Fire! Under the Light of the Moon", listeners will encounter the profound melancholy found in works like The Book of Disquiet. From the upbeat yet introspective track "Man In The Mirror," to the multitude of sounds and themes, MSTRBSTRD takes listeners on an auditory journey that pushes the boundaries of contemporary pop music.
Over three years, MSTRBSTRD, a true independent artist, poured heart and soul into this album. The majority of the work, from lyrics to instrumentation, recording, mixing, and mastering, was done single-handedly. This project is not just music; it's a snapshot of a life lived authentically, amid heartbreak, depression, and ADHD. It stands as an ode to living and loving freely and honestly, to beautiful friendships, and to resilience against all odds.
          sparks amidst the unending cosmos.</Typography>
        <Typography paragraph>
          
        </Typography>
      </Paper>

      {/* Artist Biography */}
      <Paper>
        <Typography variant="h2">Artist Bio\</Typography>
        <Typography variant="h5">Meet MSTRBSTRD (pronounced "Master Bastard"), the artistic pseudonym for Shaedan Hawse, a multidimensional artist who defies easy categorization. Though initially renowned for his emotive acoustic compositions, MSTRBSTRD marks Hawse’s pivot into a more experimental realm. Seamlessly blending indie-electronic, hip-hop, and art-pop elements, he crafts a unique auditory landscape that captivates and intrigues.

Shaedan Hawse has always viewed music as more than mere entertainment—it’s a form of exploration, an ongoing experiment in sonic storytelling. His eclectic influences, ranging from Aphex Twin and Bon Iver to Tyler, the Creator and David Bowie, shine through in his music, which borrows elements from various genres to construct something wholly unique. The result is MSTRBSTRD: a complex blend of rhythm, melody, and message that invites listeners to dig deeper and explore the layers of sound and emotion.

As an independent artist, Hawse takes the reins at every stage of MSTRBSTRD’s artistic development. From conceptualization and lyrics to instrumentation, recording, mixing, and mastering, each element passes through his hands. The work is intensely personal, informed by his own experiences with heartbreak, depression, and ADHD. This isn’t just music; it’s a deeply intimate snapshot of a life lived authentically, capturing the ebbs and flows, the highs and lows, and everything in between.

The immersive quality of MSTRBSTRD’s sound is no accident. With an astute ear for detail, Hawse's compositions are intricate sonic tapestries that engage the listener on multiple levels. Whether it’s the dreamy, lo-fi guitar strains of indie-pop tracks or the adrenaline-pumping dynamism of his more energetic numbers, each song is a world unto itself, full of hidden nuances waiting to be discovered.

For MSTRBSTRD, the musical experience is a journey without a final destination, an ever-evolving foray into the limitless possibilities of sound. It’s this insatiable curiosity and willingness to take risks that sets MSTRBSTRD apart in the indie music scene. With a fearless approach to artistry and an unwavering commitment to artistic growth, MSTRBSTRD is poised to continue captivating audiences, one unforgettable track at a time.

</Typography>
      </Paper>

      {/* Album Information */}
      <Paper>
        <Typography variant="h2">Album Information</Typography>
        {/* Add album information contents */}
      </Paper>

      {/* Music Video Information */}
      <Paper>
        <Typography variant="h2">Music Video Information</Typography>
        {/* Add music video information contents */}
      </Paper>

      {/* High-Resolution Images */}
      <Paper>
        {/* Add high-resolution images contents */}
      </Paper>

      {/* Music and Video Previews */}
      <Paper>
        <Typography variant="h2">Music and Video Previews</Typography>
        <List>
          <ListItem>
            <Link href="#">Music Preview</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Video Preview</Link>
          </ListItem>
        </List>
      </Paper>

      {/* Contact Information */}
      <Paper>
        <Typography variant="h2">Contact Information</Typography>
        {/* Add contact information contents */}
      </Paper>

      {/* Social Media */}
      <Paper>
        <Typography variant="h2">Social Media</Typography>
        {/* Add social media links */}
      </Paper>
    </Container>
  );
}

export default PressKit;

