import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Bolt } from "@mui/icons-material";
import PicProducto from "./PicProducto";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function CardTotal({ valor }) {

    let nf = new Intl.NumberFormat("en-US");
    let valorFormat = nf.format(valor);
  



  return (
    <Paper
      elevation={3}
      sx={{ margin: "1rem", maxWidth: { xs: "100%", md: "100%" } }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: { xs: "center", md: "flex-end" },
          flexDirection: { xs: "column", md: "row" },
          background:"#48C9B0",
         
        }}
      >
       

        <Box sx={{ padding: "0.5rem" , marginRight: "2rem" }}>
          <Typography fontSize={15} textAlign={"left"}>
          Valor Total  $ {valorFormat}
          </Typography>
        </Box>

    
      </Box>
    </Paper>
  );
}

export default CardTotal;
