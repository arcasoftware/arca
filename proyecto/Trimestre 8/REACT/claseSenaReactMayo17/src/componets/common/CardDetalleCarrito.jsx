import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Bolt } from "@mui/icons-material";
import PicProducto from "./PicProducto";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CtrlCantidad from "./CtrlCantidad";

function CardDetalleCarrito({ id, titulo, precio, foto, cantidad, borrar, monitor }) {

    let nf = new Intl.NumberFormat("en-US");
    let subTotal = precio * cantidad

    
    let precioFormat = nf.format(precio);
    let subTotalFormat = nf.format(subTotal);


    const handleBorrar =() => {
       borrar(id)
    }


    const getCantidad = (valor)=>{ 
      let objeto = {
        id :id,
        cantidad: valor
       }
       monitor(objeto)
    
  
    }


  return (
    <Paper
      elevation={3}
      sx={{ margin: "1rem", maxWidth: { xs: "100%", md: "100%" } }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: { xs: "center", md: "space-around" },
          alignItems: { xs: "center", md: "space-around" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: "10%", padding: "0.5rem" }}>
       
        <Button color= "error" variant="outlined" startIcon={<DeleteIcon />} onClick={handleBorrar}>
        Borrar
      </Button>

        </Box>

        <Box sx={{ width: "10%" , margin: "0.5rem"}}>
          <img style={{ width: "100%", borderRadius: "0.25rem" }} src={foto} />
        </Box>

        <Box sx={{ width: "25%", padding: "0.5rem" }}>
          <Typography fontSize={12} textAlign={"justify"}>
            {titulo}
          </Typography>
        </Box>

        <Box sx={{ width: "10%", padding: "0.5rem" }}>
          <Typography fontSize={15} textAlign={"justify"}>
           $ {precioFormat}
          </Typography>
        </Box>

        <Box sx={{ width: "20%", padding: "0.5rem" }}>
        <CtrlCantidad
            noProductos= {cantidad}
            getCantidad={getCantidad}
            
            />
        </Box>

        <Box sx={{ width: "10%", padding: "0.5rem" }}>
          <Typography fontSize={15} textAlign={"justify"}>
           $ {subTotalFormat}
          </Typography>
        </Box>

        
      </Box>
    </Paper>
  );
}

export default CardDetalleCarrito;
