import React from 'react';
import { Box } from '@mui/material';
import estilos from './Slider.module.css';

function Slider({imagenes}) {

    const [imagenActual, setImagenActual,] = React.
    useState(0);
    const cantidad = imagenes?.length;
  

if (!Array.isArray(imagenes) || cantidad === 0)
return;


const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ?
         0 : imagenActual + 1);
    };

      {/*setInterval(siguienteImagen,3000);*/}

     const anteriorImagen = () => {
            setImagenActual(imagenActual === 0 ? cantidad -
                 1 : imagenActual - 1);
};





    return( 

    <Box className={estilos.container}>

       <button onClick={anteriorImagen}>←</button>


        {imagenes.map((imagen, index) => {
            return (
                <Box>
                    {imagenActual === index && (
                        <img key={index} src=
                        {imagen} alt="imagen" />
                    )}
            </Box>
            );
        })}


         <button onClick={siguienteImagen}>→</button>
            </Box>
            );
        }

        export default Slider;