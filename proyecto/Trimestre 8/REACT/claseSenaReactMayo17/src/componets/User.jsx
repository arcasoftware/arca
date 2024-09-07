import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FaUserAstronaut } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

import DatoUsuario from "./common/DatoUsuario";
import FotoUsuario from "./common/FotoUsuario";

export default function User({nombre,apellido,correo, ciudad, movil, foto}) {


  return (
    <>
      <Box
        sx={{
          width: 500,
          border: 1,
          borderColor: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: '2rem',
          paddingBottom: '2rem',
         borderRadius: '1rem'
        }}
      >
        <Box
          sx={{
            width: 300,
          }}
        >
          {/* Inicia Contenedor padre para la foto */}
          <FotoUsuario foto={foto} />
          {/* caja blanco */}

          {/* Termina Contenedor padre para la foto */}

          <DatoUsuario
            label={"Nombre:"}
            texto={nombre}
            icono={"user_3"}
            fuente={"medium"}
          />

          <DatoUsuario
            label={"Apellido:"}
            texto={apellido}
            icono={"user_4"}
            fuente={"medium"}
          />

          <DatoUsuario
            label={"Correo:"}
            texto={correo}
            icono={"mail"}
            fuente={"small"}
          />

          <DatoUsuario
            label={"Telefono:"}
            texto={movil}
            icono={"phone"}
            fuente={"medium"}
          />

          <DatoUsuario
            label={"Ciudad:"}
            texto={ciudad}
            icono={"place"}
            fuente={"medium"}
          />
        </Box>
      </Box>
    </>
  );
}
