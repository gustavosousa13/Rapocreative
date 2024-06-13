import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Subscribe() {
  return (
    <Box sx={{borderTop:'solid 1px'}}>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '800px', 
        marginTop: '30px',
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
