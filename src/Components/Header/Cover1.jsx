import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

function Cover() {
  const items = [
    {
      src: "assets/RapoSlide.jpg",
      alt: "First slide",
      position: 'left center'
    },
    {
      src: "assets/Banner_Gardenia-C.jpg",
      alt: "Second slide",
      position: 'right' 
    },
    {
      src: "assets/BannerGardenia.jpg",
      alt: "Third slide",
      position: 'right center' 
    },
    {
      src: "assets/BannerTempero.jpg",
      alt: "Fourth slide",
      position: 'right'  // Ajuste a posição conforme necessário
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
        <Box
          key={index}
          component="img"
          src={item.src}
          alt={item.alt}
          sx={{ 
            width: '100%', 
            height: '100vh', 
            objectFit: 'cover',
            objectPosition: item.position  // Use a posição específica para cada imagem
          }}
        />
      ))}
    </Carousel>
  );
}

export default Cover;
