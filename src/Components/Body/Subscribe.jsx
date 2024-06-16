import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Subscribe() {
  return (
    <Box sx={{ borderTop: 'solid 1px', flexDirection: 'row', height: '65vh', marginLeft: '50px', marginRight: '50px', fontFamily: 'Poppins, sans-serif', position: 'relative' }}>
    
      <Box
        component="img"
        src="assets/cachoeira.png"
        alt="cachoeira"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 'auto',
          width: '750px',
          marginLeft: '-70px',
          zIndex: 1,
          // Ajustes responsivos
          '@media (max-width: 1200px)': {
            height: '250px',
            width: '250px',
          },
          '@media (max-width: 768px)': {
            height: '200px',
            width: '200px',
          },
          '@media (max-width: 480px)': {
            height: '150px',
            width: '150px',
          },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '190px',
          paddingTop: '50px',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'left', marginBottom: '20px', marginRight: '0px', marginLeft: '0px', fontFamily: 'Poppins', fontWeight:'bold', fontSize:'44px' }}
        >
            Fale com a gente!
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'left', marginRight: '-20pxpx', marginLeft: '0px', fontFamily: 'Poppins' }}
        >
          Deixe aqui sua mensagem. Além de nos contatar, você receberá notificações de lançamentos.
        </Typography>
      </Box>
      
      <Box
        component="form"
        sx={{
          position: 'absolute',
          top: '50px', 
          left: '700px',
          display: 'flex',
          flexDirection: 'column',
          height: '350px',
          zIndex: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ marginRight: '-100px' }}>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                fullWidth
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField
                id="outlined-textarea"
                label="Telefone"
                placeholder="Digite telefone com DDD"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Digite seu email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Digite sua mensagem"
                placeholder="Deixe aqui seu recado, que entraremos em contato!"
                multiline
                rows={6}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
