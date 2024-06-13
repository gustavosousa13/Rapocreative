import { Box, Grid, useMediaQuery, useTheme, Typography } from '@mui/material';
import React from 'react';

export default function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ borderTop:'solid 1px', height: '80vh', mt: '30px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid container spacing={2} sx={{ width: '80%', height: '100%' }}>
        {!isMobile && (
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: { xs: '50%', sm: '100%' },
                height: { xs: 'auto', sm: '400px' },
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  justifyContent: 'center',
                  alignItems:'center',            
                },
              }}
            >
              <img src='assets/inspiramais08.jpg' alt="Service 1" />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: 'left',  }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>Nossos Serviços</Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio neque
            nostrum inventore accusamus quaerat dolorum assumenda facilis voluptas,
            quas repellat, officiis tenetur accusantium incidunt! Vel corrupti amet laborum modi.
          </Typography>
        </Grid>
      </Grid>
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            backgroundColor: 'black',
            transform: 'translateX(-50%)',
          }}
        />
      )}
    </Box>
  );
}
