// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Subscribe() {
  
  return (
    <Box sx={{ borderTop: 'solid 1px',
     flexDirection: 'row', 
     height: '65vh',
      marginLeft: '50px', 
      marginRight: '50px', 
      fontFamily: 'Poppins, sans-serif',
       position: 'relative',
       '@media (max-width: 480px)': {
         height:'80vh'
          },
          '@media (max-width: 850px)': {
          height:'50vh', 
          },
    
       }}>
    
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
         
          '@media (max-width: 1200px)': {
            height: '250px',
            width: '250px',
          },
          '@media (max-width: 850px)': {
           display:'none'
          },
          '@media (max-width: 480px)': {
            display:'none'
          },
        }}
      />
      <Box
        sx={{
          position: 'relative',
          width: '50%',
          justifyContent: 'center',
          paddingLeft: '220px',
          paddingTop: '50px',
          zIndex: 2,
          '@media (max-width: 850px)': {
            marginLeft:'-20px',
            paddingTop: '40px',
            width:'100%'
           },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'left', 
            marginBottom: '20px', 
            marginRight: '0px',
             marginLeft: '0px', 
             fontFamily: 'Poppins', 
             fontWeight:'bold', 
             fontSize:'38px',
             
             '@media (max-width: 1200px)': {
             
            },
            '@media (max-width: 850px)': {
             marginLeft:'-200px'
            },
            '@media (max-width: 480px)': {
              marginLeft:'-230px',
              marginTop:'-5px',
              fontSize:'34px'
            },
            
            }}
        >
            Fale com a gente!
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'left',
             marginRight: '-20px', 
             marginLeft: '0px', 
             fontFamily: 'Poppins',
             fontSize:'15px',
             '@media (max-width: 1200px)': {
             
             },
             '@media (max-width: 850px)': {
              marginLeft:'-200px',
              fontSize:'24px'
             },
             '@media (max-width: 480px)': {
               display:'none'
             },
             }}
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
          '@media (max-width: 1200px)': {
             
             },
             '@media (max-width: 850px)': {
              marginLeft:'-700px',
              paddingTop: '230px'
             },
             '@media (max-width: 480px)': {
               marginLeft:'-730px',
               paddingTop:'80px',
              
             },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ marginRight: '-120px' }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}
             sx={{
              '@media (max-width: 480px)': {
               marginRight:'530px',
                          
             },
            }} >
              <TextField
                id="outlined-multiline-flexible"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}
            sx={{
              '@media (max-width: 480px)': {
               marginRight:'530px',
                                       },
            }}>
              <TextField
                id="outlined-textarea"
                label="Telefone"
                placeholder="Digite telefone com DDD"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10}
            sx={{
              '@media (max-width: 480px)': {
               marginRight:'530px',
                          
             },
            }}
            >
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Digite seu email"
                fullWidth
              />
            </Grid>
            <Grid item xs={4.59} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Digite sua mensagem"
                placeholder="Deixe aqui seu recado, que entraremos em contato!"
                multiline
                rows={3}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
