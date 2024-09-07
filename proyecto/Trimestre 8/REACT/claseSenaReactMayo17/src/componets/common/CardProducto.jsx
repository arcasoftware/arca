import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Bolt } from "@mui/icons-material";
import PicProducto from "./PicProducto";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import CtrlCantidad from "./CtrlCantidad";

function CardProducto({ id, titulo, precio, descripcion, foto, compra, monitor, noProductos }) {

  const [cantidad, setCantidad] = useState(0);

  useEffect (()=>{
    if (noProductos != null) {
      setCantidad(noProductos)
    }
  } , [noProductos])


  useEffect (()=> {
 
  },[])

  const handleComprar = ()=>{
    let objetoCompra = {
      id : id, 
      titulo : titulo, 
      precio: precio, 
      descripcion: descripcion, 
      foto: foto,
      cantidad: cantidad
    }
    compra(objetoCompra)

  }

  const getCantidad = (valor)=>{ 
    let objeto = {
      idProducto :id,
      cantidad: valor
     }
     monitor(objeto)
     setCantidad(valor)

  }

  



  let nf = new Intl.NumberFormat("en-US");
  let precioFormat = nf.format(precio);

  return (
    <Paper
      elevation={3}
      sx={{ margin: "1rem", maxWidth: { xs: "100%", md: "600px" } }}
    >
      <Typography fontSize={25} textAlign={"center"} fontWeight={"600"}>
        {" "}
        {titulo}{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", padding: "0.5rem", position: "relative" }}>
            <img style={{ width: "100%", borderRadius: "1rem" }} src={foto} />
            <Box
              sx={{
                padding: "0.5rem",
                borderRadius: "5px",
                bgcolor: "#ffffff",
                zIndex: "100",
                position: "absolute",
                top: "1rem",
                right: "2rem",
              }}
            >
              <Typography fontSize={25}> $ {precioFormat} </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "80%", md: "40%" },
            padding: "0.5rem",
          }}
        >
          <Typography fontSize={18} textAlign={"justify"}>
            {descripcion}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: { xs: "space-around", md: "center" },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "40%",
                  md: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                },
              }}
            >
            <CtrlCantidad
            noProductos= {noProductos}
            getCantidad={getCantidad}
            
            />
            </Box>

            <Box
              sx={{
                width: { xs: "40%", md: "100%" },
                padding: "0.5rem",

                //margin: "0.5rem",
              }}
            >
              <Button

                sx ={{ width: "100%"}}
                variant="contained"
                disabled={cantidad > 0? false: true }
                endIcon={<AddShoppingCartIcon />}
                onClick={handleComprar}
              >
                Comprar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default CardProducto;
