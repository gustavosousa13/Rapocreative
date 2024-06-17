import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';

const services = [
  {
    title: 'Estampas exclusivas',
    description: 'Criamos estampas exclusivas para sua empresa.',
    image: 'assets/banner5.jpg ',
  },
  {
    title: 'Sob briefing',
    description: 'Criamos estampas sob demanda, com acompanhamento do cliente.',
    image: 'assets/inspiramais09.jpg',
  },
  {
    title: 'Estampas facilitadas',
    description: 'Temos um catálogo de estampas prontas.',
    image: 'assets/referencia1.jpg',
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
  };

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100vw',
        margin: '0 auto',
        boxSizing: 'border-box',
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
        <Box sx={{ borderBottom: '1px solid black', width: '100%' }} />
        <Typography variant="h4" sx={{ margin: '10px 0', fontFamily: 'Poppins' }}>
          Nossos Serviços
        </Typography>
        <Box sx={{ borderBottom: '1px solid black', width: '100%' }} />
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
                textShadow: '0 2 5px black',
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
              <Typography variant="h3" sx={{ textShadow:'3px 2px 3px black',marginBottom: '0px', fontFamily: 'Poppins', color: '#fff', zIndex: 2 }}>
                {service.title}
              </Typography>
              <Box
                sx={{
                  
                  padding: '20px',
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: '1.8rem', 
                    zIndex: 3,
                     textShadow:'3px 2px 3px black'

                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
            
          ))}
        </Slider>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto' }}>
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
              <Typography variant="h3" sx={{fontSize: '2rem',textShadow: '0 2 2px black', fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Poppins', color: '#fff', zIndex: 2}}>
                {service.title}
              </Typography>
              <Box
                sx={{
              textShadow: '0 2 2px black',
                 textAlign:'center',
                  padding: '20px',
                  borderRadius: '10px',
                  zIndex: 2,
                   
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: '1.2rem', 
                    zIndex: 2,
                    
                    
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ServicesSection;
