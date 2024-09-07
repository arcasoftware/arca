
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './componets/Tarjeta'
import User from './componets/User'
import Usuario from './componets/usuario'

import Inicio from "./componets/Inicio"
import SobreNosotros from "./componets/SobreNosotros"
import Contacto from "./componets/Contacto"

import { Routes, Route } from "react-router-dom"

import { SiChakraui } from "react-icons/si";

import {useEffect , useState} from 'react'

import CircularProgress from '@mui/material/CircularProgress';

//import { useUsuarios } from "./hooks/useUsuarios.js";
import CardUser from './componets/CardUser'
import MenuLink from './componets/MenuLink'
import Productos from './componets/Productos'


function App() {
 

 
  return (
    <>
    <MenuLink/>
     <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="productos" element={ <Productos /> } />
        <Route path="nosotros" element={ <SobreNosotros /> } />
        <Route path="contacto" element={ <Contacto /> } />
        <Route path="usuario" element={ <CardUser /> } />
      </Routes>
    </>
  )
}

export default App
