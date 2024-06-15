import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const ParallaxContainer = styled(Box)({
  position: 'relative',
  height: '900px',
  width: '100vw',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const ParallaxImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '900px',
  backgroundImage: 'url("assets/RapoCreativeEstamparia2.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
});

const Title = styled(Typography)({
  color: '#fff',
  fontSize: '48px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  zIndex: 1,
  marginBottom: '20px',
});

const SubText = styled(Typography)({
  color: '#fff',
  fontSize: '24px',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  zIndex: 1,
  marginBottom: '20px', 
});

const StyledButton = styled(Button)({
  width: '120px',
  height: '40px',
  backgroundColor: '#fff',
  color: '#000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  zIndex: 1,
});

const ParallaxComponent = () => {
  return (
    <ParallaxContainer>
      <ParallaxImage />
      <Title sx={{fontFamily:'poppins'}} variant="h1">RAPÓ CREATIVE</Title>
      <SubText sx={{fontFamily:'poppins'}} variant="h6">Descubra o mundo de cores e formas inspiradoras</SubText>
      <StyledButton>Saiba Mais</StyledButton>
    </ParallaxContainer>
  );
};

export default ParallaxComponent;
