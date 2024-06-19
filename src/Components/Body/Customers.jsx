import React from 'react';
import { Box } from '@mui/system';

const images = [
  'assets/logos.jpg',
];

const AnimatedImages = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderTop: 'solid 1px',
        borderBottom: 'solid 1px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'slideRight 20s linear infinite',
          width: '200%', // Duplicating the set of images
        }}
      >
        {[...images, ...images].map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Image ${index}`}
            sx={{
              height: '50px',
              objectFit: 'contain',
              flexShrink: 0, // Prevent images from shrinking
              mx: 1, // Horizontal margin between images
            }}
          />
        ))}
      </Box>

      <style>
        {`
        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%); // Move half of the set (since it's duplicated)
          }
        }
        `}
      </style>
    </Box>
  );
};

export default AnimatedImages;
