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
    fontSize: fontSize.xs,
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

const AnimatedGroup = muiStyled('g')(({ direction, animate }) => ({
  animation: animate ? `${createScrollingAnimation(direction)} 10s linear infinite` : 'none',
}));

const SVGMaskedText = ({
  text,
  imageUrl,
  fontSize = { xs: '0.75rem', sm: '1.5rem', md: '3rem' },
  textColor = 'F5F5F5',
  animate = false, // Prop to control animation
}) => {
  const indexOfFirstSpace = text.indexOf(' ');
  const firstPart = text.substring(0, indexOfFirstSpace);
  const secondPart = text.substring(indexOfFirstSpace + 1);

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="text-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <AnimatedGroup direction='left' animate={animate}>
            <ResponsiveText
              textAnchor="middle"
              x="50%"
              y="45%"
              dy=".35em"
              fontSize={fontSize}
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="black"
            >
              {firstPart}
            </ResponsiveText>
          </AnimatedGroup>
          <AnimatedGroup direction='right' animate={animate}>
            <ResponsiveText
              textAnchor="middle"
              x="50%"
              y="55%"
              dy=".35em"
              fontSize={fontSize}
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="black"
            >
              {secondPart}
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
