import React from 'react';
import { styled as muiStyled, keyframes } from '@mui/system';

const ResponsiveText = muiStyled('text')(({ theme, fontSize }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize.xs,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: fontSize.sm,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: fontSize.md,
  },
}));

const scrollingAnimation = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const AnimatedGroup = muiStyled('g')(({ theme }) => ({
  animation: `${scrollingAnimation} 25s linear infinite`,
}));

const SVGMaskedText = ({
  text,
  imageUrl,
  fontSize = { xs: '2rem', sm: '3rem', md: '4rem' },
  textColor = 'F5F5F5',
}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="text-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <AnimatedGroup>
            <ResponsiveText
              textAnchor="middle"
              x="50%"
              y="50%"
              dy=".35em"
              fontSize={fontSize}
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="black"
            >
              {text}
            </ResponsiveText>
          </AnimatedGroup>
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