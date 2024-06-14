import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const services = [
  {
    title: 'Estampas exclusivas',
    description: 'Crimamos estampas exclusivas para sua empresa.',
    image: 'assets/banner5.jpg',
  },
  {
    title: 'Sob briefing',
    description: 'Criamos estampas sob briefing, de modo que o cliente possa acompanhar o processo de criação.',
    image: 'assets/Capa2B.jpg', 
  },
  {
    title: 'Estampas não exclusivas',
    description: 'Temos um catálogo de estampas não exclusivas, caso não necessite de exclusividade.',
    image: 'assets/referencia1.jpg', 
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        height: '65vh',
        width: '1400px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        marginLeft:'-60px',
        marginTop:'-26px'
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
        <Typography variant="h4" sx={{ margin: '10px 0' }}>
          Nossos Serviços
        </Typography>
        <Box sx={{ borderBottom: '1px solid black', width: '100%' }} />
      </Box>

      <Grid container spacing={2} sx={{ height: 'calc(60vh - 60px)' }}>
        {services.map((service, index) => (
          <Grid
            item
            xs={4}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: index < 2 ? '1px solid black' : 'none',
              boxSizing: 'border-box',
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>
              {service.title}
            </Typography>
            <Box
              component="img"
              src={service.image}
              alt={service.title}
              sx={{
                width: '300px',
                height: '150px',
                backgroundColor: 'lightgray',
                marginBottom: '10px',
                objectFit:'cover',
                borderRadius: '50px',
              }}
            />
            <Typography variant="body1"   sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:'45px',
              marginRight:'45px',
              textAlign:'center',
              
              
            }}>
              {service.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
