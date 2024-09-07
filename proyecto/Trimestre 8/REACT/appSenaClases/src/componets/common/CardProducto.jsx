import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Bolt } from "@mui/icons-material";
import PicProducto from "./PicProducto";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function CardProducto({ id, titulo, precio, descripcion, foto }) {

  const [cantidad, setCantidad] = useState(0);


  const handleSumar =() =>{

    setCantidad(cantidad + 1)

  }

  const handleRestar =() =>{

    setCantidad(cantidad - 1)

    if (cantidad <= 0)
      setCantidad(0)

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
              <Button color="success" variant="contained" size="small" onClick={handleSumar}>
                <Typography fontSize={18} textAlign={"center"}>
                  +
                </Typography>
              </Button>

              <Typography fontSize={18} textAlign={"center"} fontWeight={"600"} >
                {cantidad}
              </Typography>
              <Button color="error" variant="contained" size="small" onClick={handleRestar} >
                <Typography fontSize={18} textAlign={"center"}>
                  -
                </Typography>{" "}
              </Button>
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
