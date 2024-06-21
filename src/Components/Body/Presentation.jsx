import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Presentation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: {
          xs: '600px', // small screens
          md: '65vh',  // medium and larger screens
        },
        width: '100%',
        display: 'flex',
        flexDirection: {
          xs: 'column', // small screens
          md: 'row',    // medium and larger screens
        },
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid black',
        fontFamily: 'Poppins, sans-serif',
        marginTop: '8px',
        paddingBottom: '30px',
       
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%', // small screens
            lg: '50%',  // large screens
            md: '650px' // medium screens
          },
          display: 'flex',
          justifyContent: {
            xs: 'center',   // small screens
            md: 'flex-start'// medium and larger screens
          },
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="assets/inspiramais08.jpg"
          alt="Inspirational Image"
          sx={{
            display: {
              xs: 'none',   // hide on small screens
              md: 'block',  // show on medium and larger screens
            },
            width: {
              xs: '100%',  // small screens
              lg: '650px'  // large screens
            },
            height: {
              xs: 'auto',
              lg: '59vh'   // large screens
            },
            marginLeft: {
              xs:'0px',
              md: '-60px',
              lg:'-60px'
            },
            objectFit: 'cover',
            marginTop: '28px',

            
          }}
        />
      </Box>

      <Box
        sx={{
          width: {
            xs: '100%', // small screens
            lg: '50%',  // large screens
            md: '50%'   // medium screens
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: {
            xs: 'center',   // small screens
            md: 'flex-start'// medium and larger screens
          },
          paddingLeft: {
            xs: '20px',  // small screens
            md: '30px',  // medium and larger screens
          },
          marginTop: {
            xs: '-20px', // small screens
            md: '0px',   // medium and larger screens
          },
          zIndex: 2,
          '@media (max-width: 1600px)': {
            marginLeft: '-100px',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: {
              xs: 'center', // small screens
              md: 'left',   // medium and larger screens
            },
            marginBottom: '20px',
            marginLeft: {
              xs: '60px', // small screens
              md: '30px', // medium and larger screens
            },
            fontFamily: 'Poppins',
            fontWeight: {
              xs: 'bold',  // small screens
              md: 'inherit'// medium and larger screens
            },
            color: {
              xs: 'black', // small screens
              md: 'inherit'// medium and larger screens
            },
          }}
        >
          Quem somos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginLeft: {
              xs: '60px', // small screens
              md: '30px', // medium and larger screens
            },
            textAlign: {
              xs: 'center', // small screens
              md: 'inherit' // medium and larger screens
            },
            lineHeight: 1.3,
            fontFamily: 'Poppins',
            color: {
              xs: 'black', // small screens
              md: 'inherit'// medium and larger screens
            },
            fontSize: {
              xs:'16px',
              lg:'20px',
              md:'16px'
            },
          }}
        >
          Bem-vindo ao Rapó Creative! Somos um estúdio especializado na criação de estampas exclusivas para o mercado têxtil, trazendo toda a exuberância e a rica diversidade cultural do Brasil para cada peça. No Rapó Creative, nossa paixão por design se reflete em estampas vibrantes e únicas, que capturam a essência da brasilidade. Além de nossa coleção exclusiva, também oferecemos serviços de criação de estampas sob demanda, adaptando nossas criações ao seu estilo e necessidade. Venha descobrir um mundo de cores e formas inspiradoras conosco!
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentation;
