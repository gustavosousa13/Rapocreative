import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Presentation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: {
          xs: '700px',
          md: '65vh',
        },
        width: '100%',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        marginBottom: {
          xs: '80px',
          md: '0px',
        },
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: {
          xs: 'none',
          md: '3px solid black'
        },
        fontFamily: 'Poppins, sans-serif',
        marginTop: '1px',
        paddingBottom: '0px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            lg: '100%',
            md: '100%',
          },
          display: 'flex',
          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box
          component="img"
          src="assets/foto-quemsomos.jpg"
          alt="Inspirational Image"
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
            height: '100%',
            width: 'auto',
            marginLeft: {
              xs: '0px',
              md: '-200px',
              lg: '0px',
              xl: '0px',
            },
            objectFit: 'cover',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 1,
          right: 0,
          height: '100%',
          width: '50%',
          backgroundColor: {
            xs: 'transparent',
            md: 'rgba(255, 255, 255, 0.6)',
            lg: 'rgba(255, 255, 255, 0.9)',
          },
          backdropFilter: {
            xs: 'none',
            md: 'blur(20px)',
            lg: 'blur(10px)'
          },
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          width: {
            xs: '100%',
            lg: '50%',
            md: '50%',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          paddingLeft: {
            xs: '80px',
            md: '-130px',
            lg: '-200px',
          },
          paddingRight: {
            xs: '30px',
            md: '30px',
          },
          marginTop: {
            xs: '-80px',
            md: '0px',
          },
          zIndex: 2,
          marginLeft: {
            md: '-450px',
            xl: '-700px',
          },
          marginRight: '50px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
            marginBottom: '20px',
            fontFamily: 'Poppins',
            fontWeight: {
              xs: 'bold',
              md: 'inherit',
            },
            color: {
              xs: 'black',
              md: 'inherit',
            },
          }}
        >
          Quem somos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: {
              xs: 'center',
              md: 'inherit',
            },
            lineHeight: 1.3,
            fontFamily: 'Poppins',
            color: {
              xs: 'black',
              md: 'inherit',
            },
            fontSize: {
              xs: '16px',
              lg: '16px',
              md: '16px',
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
