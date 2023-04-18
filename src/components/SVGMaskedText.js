import React from 'react';
import { styled as muiStyled, keyframes } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const ResponsiveText = muiStyled('text')(({ theme, fontSize }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: fontSize.sm,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: fontSize.sm,
  },
}));

const createScrollingAnimation = (direction) => keyframes`
  0%, 100% {
    transform: translate(${direction === 'left' ? '-0%' : '0%'}, 0);
  }
  50% {
    transform: translate(${direction === 'left' ? '30%' : '-20%'}, 0);
  }
`;

const AnimatedGroup = muiStyled('g')(({ direction }) => ({
  animation: `${createScrollingAnimation(direction)} 10s linear infinite`,
  willChange: 'transform',
}));

const SVGMaskedText = ({
  text,
  imageUrl,
  fontSize = { xs: '1rem', sm: '2rem', md: '4rem' },
  textColor = 'F5F5F5',
}) => {
  const theme = useTheme();
  const words = text.split(' ');

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="text-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          {words.map((word, index) => (
            <AnimatedGroup key={word} direction={index % 2 === 0 ? 'left' : 'right'}>
              <ResponsiveText
                textAnchor="middle"
                x="50%"
                y={`${50 + (index % 2 === 0 ? -1 : 1) * 5}%`}
                dy=".35em"
                fontSize={fontSize}
                fontFamily="sans-serif"
                fontWeight="bold"
                fill="black"
              >
                {word}
              </ResponsiveText>
            </AnimatedGroup>
          ))}
        </mask>
      </defs>
      <image
        xlinkHref={imageUrl}
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
      <rect x="0" y="0" width="100%" height="100%" fill={`#${textColor}`} mask="url(#text-mask)" />
    </svg>
  );
};

export default SVGMaskedText;
