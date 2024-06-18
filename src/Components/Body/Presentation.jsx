import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Presentation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid black',
        borderTop: isLargeScreen ? 'none' : 'inhirit',
        fontFamily: 'Poppins, sans-serif',
        marginTop: '30px',
       
        paddingBottom: '30px', 
        height: isSmallScreen ? '600px' : 'inherit',
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? '100%' : isLargeScreen ? '50%' : '650px', 
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'flex-start', 
          alignItems: 'center',
        }}
      >
       {!isSmallScreen && ( 
          <Box
            component="img"
            src="assets/inspiramais08.jpg"
            alt="Inspirational Image"
            sx={{
              width: isSmallScreen ? '100%' : isLargeScreen ? '650px' : 'auto', 
              height: isSmallScreen ? 'auto' : isLargeScreen ? '59vh' : 'auto', 
              objectFit: 'cover',
              marginTop:'28px'
            }}
          />
        )}
      </Box>


      <Box
        sx={{
          width: isSmallScreen ? '100%' : isLargeScreen ? '50%' : '50%', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: isSmallScreen ? 'center' : 'flex-start', 
          paddingLeft: isSmallScreen ? '20px' : '30px',
          marginTop: isSmallScreen ? '-20px' : '0px',
          zIndex: isSmallScreen ? 2 : 2,
          
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: isSmallScreen ? 'center' : 'left', 
            marginBottom: '20px',
            marginRight: isSmallScreen ? '20px' : '30px', 
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
            textAlign: isSmallScreen ? 'center' : 'inherit', 
            lineHeight: 1.3, 
            fontFamily: 'Poppins',
            color: isSmallScreen ? 'white' : 'inherit',
            color: isSmallScreen ? 'black' : 'inherit', 
          }}
        >
          Bem-vindo ao Rapó Creative! Somos um estúdio especializado na criação de estampas exclusivas para o 
          mercado têxtil, trazendo toda a exuberância e a rica diversidade cultural do Brasil para cada peça. No Rapó Creative, 
          nossa paixão por design se reflete em estampas vibrantes e únicas, que capturam a essência da brasilidade. Além de nossa coleção exclusiva, também oferecemos serviços de criação de estampas sob demanda, adaptando nossas criações ao seu estilo e necessidade. Venha descobrir um mundo de cores e formas inspiradoras conosco!
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentation;
