import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

function Cover() {
  const items = [
 
    {
      src: "assets/BannerGardenia.jpg",
      alt: "Third slide",
      position: 'right center' 
    },
    {
      src: "assets/BannerTempero.jpg",
      alt: "Fourth slide",
      position: 'right'  
    }
  ];

  return (
    <Box
      sx={{
        display: {
          xs: 'none', 
          sm: 'block' 
        },
        position: 'relative',
        zIndex: 2,
       
      }}
    >
      <Carousel
        className="carrossel"
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
              objectPosition: item.position,

              '@media (max-width: 1100px)': {
                height:'800px',
                width:'auto',
                marginLeft:'-800px'
              },
              '@media (max-width:900px)': {
                height:'500px',
                width:'auto',
                marginLeft:'-370px'
              },
             
             
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default Cover;
