import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Subscribe() {
  return (
    <Box sx={{borderTop:'solid 1px' , flexDirection: 'row', height:'60vh', marginLeft:'50px', marginRight:'50px', fontFamily: 'Poppins, sans-serif',}}>
    
    
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '50px',
        paddingTop:'100px'
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: 'left', marginBottom: '20px', marginRight: '30px' }}
      >
        Cadastre-se para mais informações.
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'left', marginRight: '30px' }}
      >
       Deixe aqui seu contato, para receber nossas novidades e para entrar em contato para mais informações.
      </Typography>
    </Box>
     
    
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
        marginLeft: '600px', 
        marginTop: '-220px',
        height:'350px',
        marginRight:'30px'
        }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8}>
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
        <Grid item xs={6} sm={8}>
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Digite seu email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Digite sua mensagem"
            placeholder="Deixe aqui seu recado, que entraremos em contato!"
            multiline
            rows={6}
            fullWidth
            sx={{
              width: '470px',  // Define a largura de 600px
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}
