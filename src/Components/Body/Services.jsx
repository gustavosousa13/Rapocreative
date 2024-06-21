import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';

const services = [
  {
    image: 'assets/imagem1.jpg',
  },
  {
    image: 'assets/imagem2.jpg',
  },
  {
    image: 'assets/imag3.jpg',
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 10000, 
  };

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100vw',
        margin: '0 auto',
        boxSizing: 'border-box',
        marginTop:'-6px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid black',
            width: '100%',

            '@media (max-width: 480px)': {
              borderBottom: 'none',
            },
          }}
        />
        <Typography variant="h4" sx={{ margin: '10px 0', fontFamily: 'Poppins', fontWeight:'bold' }}>
          Nossos serviços
        </Typography>
        <Box sx={{ width: '100%', }} />
      </Box>
      {isSmallScreen ? (
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                height: 'calc(60vh - 60px)',
                width: '100vw',
                boxSizing: 'border-box',
                padding: '0px',
                background: `url(${service.image}) no-repeat center center`,
                backgroundSize: 'cover',
                
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
              />
            </Box>
          ))}
        </Slider>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto', marginTop:'-19px' }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(60vh - 60px)',
                width: '100vw',
                boxSizing: 'border-box',
                padding: '20px',
                background: `url(${service.image}) no-repeat center center`,
                backgroundSize: 'cover',
              
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  zIndex: 1,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ServicesSection;
