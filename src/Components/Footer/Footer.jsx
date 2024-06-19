import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GridImage from './Grid-image';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#F2F1E4',
        py: 6,
        borderTop: 'solid 1px',
        height: '70vh',
        marginTop: isSmallScreen ? '100px' : 'inherit',
        alignItems: isSmallScreen ? 'center' : 'inherit',
      }}
    >
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Grid container spacing={5}>
          {/* Grid item 1 */}
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Box
              component="img"
              src="assets/logo-rapo.png"
              alt="Logo"
              sx={{
                width: '270px',
                height: 'auto',
                marginLeft: { xs: 7, sm: 1 }, // Ajuste para diferentes tamanhos de tela
                textAlign: isSmallScreen ? 'center' : 'inherit',
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                letterSpacing: 0,
                fontFamily: 'Poppins, sans-serif',
                marginLeft: isSmallScreen ? '0px' : '30px',
                textAlign: isSmallScreen ? 'center' : 'inherit',
              }}
            >
              Utilizamos técnicas inovadoras para produzir estampas vibrantes e cheias de personalidade. Seja para uma coleção completa ou uma peça única.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, marginLeft: '20px' }}>
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

          {/* Grid item 2 */}
          <Grid item xs={12} sm={4} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'inherit' }}>
            <Stack sx={{ gap: '15px', fontFamily: 'Poppins, sans-serif', color: 'black', marginTop: '40px' }}>
              <Grid container spacing={0}>
                <Grid item xs={8}>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      HOME
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      SERVICES
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      ABOUT
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={10}>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      CONTACT
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      BLOG
                    </Typography>
                  </Link>
                  <Link href="#" underline="none">
                    <Typography variant="body1" sx={{ letterSpacing: 0, color: 'black', padding: '10px' }}>
                      PROGRAM
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* Grid item 3 */}
          <Grid item xs={12} sm={4} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginRight: '-250px' }}>
              <GridImage />
            </Box>
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            padding: '10px 0px',
          }}
        >
          <Box
            component="img"
            sx={{
              width: 450,
              height: 80,
              marginLeft: -8,
              display: { xs: 'none', sm: 'block' },
            }}
            alt="Imagem rodape"
            src="assets/rodape2.png"
          />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant="body3"
              textAlign="center"
              sx={{
                letterSpacing: 1,
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
                paddingLeft: 15,
                paddingRight: 15,
                width: 10,
                fontSize: 15,
                '@media (max-width: 480px)': {
                  textAlign: 'center',
                  marginLeft: '-200px',
                },
              }}
            >
              &copy; 2024 Rapó Creative
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              width: 450,
              height: 80,
              marginLeft: 30,
              marginRight: 0,
              display: { xs: 'none', sm: 'block' },
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
