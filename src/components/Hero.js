import { Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
    height: '50vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}));

function Hero({ children }) {
  return <HeroContainer>{children}</HeroContainer>;
}

export default Hero;

