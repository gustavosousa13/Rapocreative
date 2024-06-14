import React from 'react';
import { Box, Typography } from '@mui/material';

const Presentation = () => {
  return (
    <Box
    sx={{
      height: '60vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      borderTop: '1px solid black',
      fontFamily: 'Poppins, sans-serif',
      marginTop:'30px',
      borderBottom:'none',
        }}
  >
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="assets/inspiramais08.jpg"
        sx={{ width: '650px', height: '59vh ', objectFit: 'cover'  }}
      />
    </Box>

    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '30px',
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: 'left', marginBottom: '20px', marginRight: '30px' }}
      >
        Quem somos
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'left', marginRight: '30px' }}
      >
       Bem-vindo ao Rapó Creative! Somos um estúdio especializado na criação de estampas exclusivas para o mercado têxtil, trazendo toda a exuberância e a rica diversidade cultural do Brasil para cada peça. No Rapó Creative, nossa paixão por design se reflete em estampas vibrantes e únicas, que capturam a essência da brasilidade. Além de nossa coleção exclusiva, também oferecemos serviços de criação de estampas sob demanda, adaptando nossas criações ao seu estilo e necessidade. 
       Venha descobrir um mundo de cores e formas inspiradoras conosco!
      </Typography>
    </Box>
  </Box>
);
};
export default Presentation;
