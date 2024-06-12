
import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';


export default function Presentation() {
  return (
    <Box sx={{fontFamily:'poppins',height: '50vh',mt:'30px', borderRadius:'20px', padding:'30px',}} >
       <Box> 
        <Box>
        <Typography sx={{
          fontSize: '46px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          textAlign:'center',
          fontFamily:'poppins',
          marginRight:'50px',
          marginLeft:'50px'
        }}>
            Quem Somos
        </Typography>
        </Box> 
        <Typography sx={{ fontFamily:'poppins',
          fontSize: '20px',
          textAlign: 'center',
          
          }}  className='paragraph_presentation'>
            Bem-vindo ao Rapó Creative! Somos um estúdio especializado na criação de 
            estampas exclusivas para o mercado têxtil, trazendo toda a exuberância e a rica diversidade 
            cultural do Brasil para cada peça. No Rapó Creative, nossa paixão por design se reflete em estampas vibrantes e únicas, que capturam a essência da brasilidade. Além de nossa coleção exclusiva, também oferecemos serviços de criação de estampas sob demanda, adaptando nossas criações ao seu estilo e necessidade. 
            Venha descobrir um mundo de cores e formas inspiradoras conosco!
        </Typography>
        </Box>     

    </Box>
      

  )
}
