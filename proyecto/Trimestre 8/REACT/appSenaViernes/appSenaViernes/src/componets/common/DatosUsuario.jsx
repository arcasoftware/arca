import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function DatosUsuario({label,texto,icono, fuente}){
    return(   
      <Box sx={{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        padding: '0.5rem'
      }}>
        <img src= {`./${icono}.svg`} style={{marginRight:'2rem', width:40 }}/>
       <Typography sx={{fontSize:fuente , paddingRight: '0.5rem'}}> {label}</Typography>
       <Typography sx={{fontSize:fuente, fontWeight:'bold' }}> {texto}  </Typography>
       </Box>
      
    );
}