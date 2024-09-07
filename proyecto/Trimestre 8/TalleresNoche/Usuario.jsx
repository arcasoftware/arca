
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import { FaUserAstronaut } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export default function Usuario() {

    let  user = {
        nombre:"Alberto",
        apellido:"Navarro",
        correo:"anavarro@sena.edu.co",
        ciudad:"Bogota",
        movil:"3206987485",
        foto:"https://randomuser.me/api/portraits/men/36.jpg"
      }

    return (
        <>
{/* Inicia Contenedor padre para la foto */}
<Box
      sx={{ 
        width: 300,
        height:180,
       
    }}
      >
      {/* caja blanco */}
      <Box   
      sx={{ 
        width: 300,
        height:90,
        border: 1,
        borderColor: '#ccc',
        bgcolor: '#fff'
    }}
     />
      
       {/* caja gris */}
      <Box
      sx={{ 
        width: 300,
        height:90,
        border: 1,
        borderColor: '#ccc',
        bgcolor: '#ccc'
    }}
      />
    {/* imagen */}
      <img 
        style={{marginTop: -200, 
            width: 100, 
            height: 100, 
            borderRadius: 100/ 2}}  
        src={user.foto}
      />
       </Box>
       {/* Termina Contenedor padre para la foto */}
       

        {/*creamos un contenedor por cada icono y texto  */}
       <Box sx={{ 
        width: 300,
        display:'flex',
        justifyContent:'flex-start',
        padding:'0.5rem'
        }}>
       <FaUserAstronaut  style={{marginRight:'2rem' }}/>
       <Typography sx={{fontSize:'large' }}> Nombre: {user.nombre}  </Typography>
       </Box>

       
       <Box sx={{ 
        width: 300,
        display:'flex',
        justifyContent:'flex-start',
        padding:'0.5rem'
        }}>
       <FaUserAstronaut style={{marginRight:'2rem' }}/>
       <Typography sx={{fontSize:'large' }}> Apellido: {user.apellido}  </Typography>
       </Box>
       <Box sx={{ 
        width: 300,
        display:'flex',
        justifyContent:'flex-start',
        padding:'0.5rem'
        }}>
       <MdEmail style={{marginRight:'2rem' }} />
       <Typography sx={{fontSize:'medium' }}> Correo: {user.correo}  </Typography>
       </Box>

       
       <Box sx={{ 
        width: 300,
        display:'flex',
        justifyContent:'flex-start',
        padding:'0.5rem'
        }}>
       <FaPhoneVolume style={{marginRight:'2rem' }} />
       <Typography sx={{fontSize:'large' }}> Telefono: {user.movil}  </Typography>
       </Box>
       <Box sx={{ 
        width: 300,
        display:'flex',
        justifyContent:'flex-start',
        padding:'0.5rem'
        }}>
       <MdPlace style={{marginRight:'2rem' }}/>
       <Typography sx={{fontSize:'large' }}> Ciudad: {user.ciudad}  </Typography>
       </Box>

      </>
  );
}