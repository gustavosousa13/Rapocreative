import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GridImage from './Grid-image';

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
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={4} md={3} lg={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              component="img"
              src="assets/logo-rapo.png"
              alt="Logo"
              sx={{
                width: '270px',
                height: 'auto',
                margin: { xs: '0 auto', md: '0' },
                display: { xs: 'block', md: 'inline-block' }
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                letterSpacing: 0,
                fontFamily: 'Poppins, sans-serif',
                marginLeft: { xs: '0px', md: '0' },
                textAlign: { xs: 'center', md: 'left' },
                mt: { xs: 2, md: 0 }
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
              <IconButton href="#" aria-label="TikTok">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" aria-label="Pinterest">
                <PinterestIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={3} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack sx={{ gap: '15px', fontFamily: 'Poppins, sans-serif', color: 'black', marginTop: { xs: '20px', sm: '40px' } }}>
              <Grid container spacing={0} justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      INÍCIO
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      SERVIÇOS
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      QUEM SOMOS
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      PORTIFÓLIO
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      CONTATO
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      ESTAMPAS
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={6} lg={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', height: '100%' }}>
            <Box sx={{ width: { xs: '100%', md: 'auto' }, textAlign: 'center', pr: { md: 4, lg: 6 } }}>
              <GridImage />
            </Box>
          </Grid>
        </Grid>

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
