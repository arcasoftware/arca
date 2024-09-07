/* eslint-disable react/display-name */

import MenuIcon from "./MenuIcon"
import CardText from "./CardTexto"
import Box from '@mui/material/Box';
import CardImage from "./CardImagen";


export default function Inicio() {
    return(
    <>
    <h1> Componete Inicio </h1>
    <img src="./bgFood.JPG" />
    <MenuIcon/>
    <Box sx={{ display:'flex' , justifyContent: { xs: 'center', md: 'center'} ,  alignItems: { xs: 'center', md: 'center'},flexDirection: { xs: 'column', md: 'row'}, width:'100%'  }} >
    <Box sx={{ width: { xs: '90%', md: '40%'}}}>  <CardImage/></Box>
    <Box sx={{ width: { xs: '90%', md: '40%'} }}>  <CardText/></Box>
    </Box>
    </>
    );
}

// sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}