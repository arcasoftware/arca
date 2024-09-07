
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import DatosUsuario from './common/DatosUsuario';
import FotoUsuario from './common/FotoUsuario';

export default function Usuario({nombre, apellido, correo , movil, ciudad, foto}) {

  return (
    <>
<Box sx={{
   width:500,
   border: 1,
   borderColor:'#ccc',
   borderRadius:'1rem',
   display:'flex',
   justifyContent:'center',
   paddingTop:'2rem',
   paddingBottom: '2rem'

}}> 
    <Box sx={{ width:300}}> 
      <FotoUsuario
        foto={foto}
      />


      <DatosUsuario
        label={"Nombre: "}
        texto={nombre}
        icono={"user_3"}
        fuente={"large"}
      />

      <DatosUsuario
        label={"Apellido: "}
        texto={apellido}
        icono={"user_4"}
        fuente={"large"}
      />


      <DatosUsuario
        label={"Movil: "}
        texto={movil}
        icono={"phone"}
        fuente={"medium"}
      />


      <DatosUsuario
        label={"Correo: "}
        texto={correo}
        icono={"mail"}
        fuente={"small"}
      />


      <DatosUsuario
        label={"Ciudad"}
        texto={ciudad}
        icono={"place"}
        fuente={"medium"}
      />

</Box>
</Box>

    </>
  );
}