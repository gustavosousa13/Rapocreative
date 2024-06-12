import React from 'react';
import { Box } from '@mui/system';

const images = [
  '/src/assets/logos.jpg',
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
        borderTop:'solid 1px',
        borderBottom: 'solid 1px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'slideRight 20s linear infinite',
          width: '200%', // Duplicando o conjunto de imagens
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
              flexShrink: 0, // Impede que as imagens encolham
              mx: 1, // Margem horizontal entre as imagens
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
            transform: translateX(-30%); // Move metade do conjunto (já que é duplicado)
          }
        }
        `}
      </style>
    </Box>
  );
};

export default AnimatedImages;
