import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#F2F1E4',
        py: 6,
        borderTop: 'solid 1px',
        height: '80vh',
        marginTop: { xs: '100px', md: 'inherit' },
        alignItems: { xs: 'center', md: 'inherit' },
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} sm={4} md={3} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' }, ml: { xs: '0px', md: '30px' } }}>
            <Box
              component="img"
              src="assets/logo-rapo.png"
              alt="Logo"
              sx={{
                width: '270px',
                height: 'auto',
                display: { xs: 'block', md: 'inline-block' },
                mb: { xs: 2, md: 0 },
              
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                letterSpacing: 0,
                fontFamily: 'Poppins, sans-serif',
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 2, md: 0 },
                ml: { xs: 0, md: 0 }
              }}
            >
              Utilizamos técnicas inovadoras para produzir estampas vibrantes e cheias de personalidade. Seja para uma coleção completa ou uma peça única.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: { xs: 'center', md: 'left' } }}>
              <IconButton href="#" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
              <IconButton href="#" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" aria-label="Pinterest">
                <PinterestIcon />
              </IconButton>
            </Stack>
          </Grid>

    
          
          <Grid item xs={12} sm={4} md={4} lg={3} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box 
              component="img"
              src="assets/fotos-insta.png"
              alt="Inspirational Image"
              sx={{
                display: { xs: 'none',md:'block', lg: 'block' },
                height: '250px',
                width: 'auto',
                ml: {md:'200px', lg:'400px'},
                mr: { lg: '300px', md: '-200px' }, // anteriormente 100px 
                mt: { xs: '0px', lg: '30px' }, 
              }}
            />
          </Grid>
        </Grid>

        {/* Footer Bottom Part */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'space-between' },
            width: '100%',
            padding: '10px 0px',
            mt: { xs: 4, sm: 0 }
          }}
        >
          <Box
            component="img"
            sx={{
              width: 450,
              height: 80,
              display: { xs: 'none', sm: 'block' },
              mb: { xs: 2, sm: 0 }
            }}
            alt="Imagem rodape"
            src="assets/rodape2.png"
          />
          <Typography
            variant="body3"
            sx={{
              letterSpacing: 1,
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center',
              paddingLeft: 15,
              paddingRight: 15,
              fontSize: 15,
              mb: { xs: 2, sm: 0 },
              mt: { xs: 2, sm: 0 }
            }}
          >
            &copy; 2024 Rapó Creative
          </Typography>
          <Box
            component="img"
            sx={{
              width: 450,
              height: 80,
              display: { xs: 'none', sm: 'block' },
              mb: { xs: 2, sm: 0 }
            }}
            alt="Imagem rodape"
            src="assets/rodape1.png"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
