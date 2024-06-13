import React from 'react';
import { Box, Container, Grid, Typography,Link,IconButton, Stack,} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GridImage from './Grid-image.jsx';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F2F1E4', py: 6, borderTop:'solid 1px' }}>
      <Container maxWidth="xl" sx={{ px: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={3}>
            <Box component="img"
                src="assets/logo-rapo.png"
                alt="Logo"
                sx={{ width: '200px', height: 'auto', marginLeft:'-20px' }} 
            />
            
            <Typography variant="body2" sx={{ letterSpacing: 0, fontFamily: 'Poppins, sans-serif' }}>
            Utilizamos técnicas inovadoras para produzir estampas vibrantes e cheias de personalidade. 
            Seja para uma coleção completa ou uma peça única.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton href="#" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
              <IconButton href="#" aria-label="TikTok">
                {/* Substitua por um ícone de TikTok correto se disponível */}
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" aria-label="Pinterest">
                <PinterestIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom sx={{ letterSpacing: 2, fontFamily: 'Poppins, sans-serif' }}>
              Navigation
            </Typography>
            <Stack sx={{ gap: '15px', fontFamily: 'Poppins, sans-serif' }}>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  HOME
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  SERVICES
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  ABOUT
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  CONTACT
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  BLOG
                </Typography>
              </Link>
              <Link href="#" underline="none">
                <Typography variant="body2" sx={{ letterSpacing: 0 }}>
                  PROGRAM
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' , marginRight:'-250px'}}>
              <GridImage/>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" textAlign="center" mt={2} sx={{ letterSpacing: 3, fontFamily: 'Poppins, sans-serif' }}>
          &copy; 2024 Rapó Creative
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
