import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

function Cover() {

  const items = [
    {
      src: "assets/RapoSlide.jpg",
      alt: "First slide"
    },
    {
      src: "assets/banner2.jpg",
      alt: "Second slide"
    },
    {
      src: "assets/BannerGardenia.jpg",
      alt: "Third slide"
    },
    {
      src: "assets/BannerTempero.jpg",
      alt: "Fourth slide"
    }
  ];

  return (
    
      <Carousel
        className="carrossel"
        sx={{ position: 'relative', zIndex: 2 }}
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible={true}
        animation="fade"
      >
        {items.map((item, index) => (
          <Box key={index} component="img"
            src={item.src}
            alt={item.alt}
            sx={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        ))}
      </Carousel>
    
  );
}

export default Cover;
