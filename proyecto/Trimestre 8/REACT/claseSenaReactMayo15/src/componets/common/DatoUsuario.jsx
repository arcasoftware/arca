
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function DatoUsuario({label,texto,icono,fuente}) {

    let  user = {
        label:"Correo:",
        texto:"anavarro@sena.edu.co",
        icono:"mail",
        fuente:"small"
      }

    return (
        <Box sx={{ 
       
            display:'flex',
            justifyContent:'flex-start',
            alignItems: 'center',
            padding:'0.5rem'
            }}>
           <img src={`./${icono}.svg`} style={{marginRight:'2rem', width: 50 }} />
           <Typography sx={{fontSize:fuente }}> {label} {texto}  </Typography>
           </Box>
    );

}