import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Presentation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Added for large screens

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row', // Conditional flex direction
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid black',
        fontFamily: 'Poppins, sans-serif',
        marginTop: '30px',
        paddingBottom: '30px', // Padding for mobile
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? '100%' : isLargeScreen ? '50%' : '650px', // Adjust width based on screen size
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'flex-start', // Center on mobile
          alignItems: 'center',
        }}
      >
       {!isSmallScreen && ( 
          <Box
            component="img"
            src="assets/inspiramais08.jpg"
            alt="Inspirational Image"
            sx={{
              width: isSmallScreen ? '100%' : isLargeScreen ? '650px' : 'auto', // Adjust image width based on screen size
              height: isSmallScreen ? 'auto' : isLargeScreen ? '59vh' : 'auto', // Adjust image height based on screen size
              objectFit: 'cover',
              filter: isSmallScreen ? 'blur(5px)' : 'none', // Blur on mobile
              marginTop:'28px'
            }}
          />
        )}
      </Box>


      <Box
        sx={{
          width: isSmallScreen ? '100%' : isLargeScreen ? '50%' : '50%', // Adjust width based on screen size
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: isSmallScreen ? 'center' : 'flex-start', // Center on mobile
          paddingLeft: isSmallScreen ? '20px' : '30px',
          marginTop: isSmallScreen ? '-20px' : '0px',
          zIndex: isSmallScreen ? 2 : 2,
          
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: isSmallScreen ? 'center' : 'left', // Center on mobile
            marginBottom: '20px',
            marginRight: isSmallScreen ? '20px' : '30px', // Adjust margin based on screen size
            fontFamily: 'Poppins',
            color: isSmallScreen ? 'white' : 'inherit',
            fontWeight: isSmallScreen ? 'bold' : 'inherit',
            color: isSmallScreen ? 'black' : 'inherit',
                    }}
        >
          Quem somos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginRight: isSmallScreen ? '20px' : '30px',
            textAlign: isSmallScreen ? 'center' : 'inherit', // Center on mobile
            lineHeight: 1.3, // Adjust line height for readability
            fontFamily: 'Poppins',
            color: isSmallScreen ? 'white' : 'inherit',
            color: isSmallScreen ? 'black' : 'inherit', // Adjust text color for contrast on mobile
          }}
        >
          Bem-vindo ao Rapó Creative! Somos um estúdio especializado na criação de estampas exclusivas para o mercado têxtil, trazendo toda a exuberância e a rica diversidade cultural do Brasil para cada peça. No Rapó Creative, nossa paixão por design se reflete em estampas vibrantes e únicas, que capturam a essência da brasilidade. Além de nossa coleção exclusiva, também oferecemos serviços de criação de estampas sob demanda, adaptando nossas criações ao seu estilo e necessidade. Venha descobrir um mundo de cores e formas inspiradoras conosco!
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentation;
